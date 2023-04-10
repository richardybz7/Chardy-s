import { all, call, put, takeLatest } from "@redux-saga/core/effects";
import { createUserAuthWithEmailAndPassword, createUserDocumentFromAuth, getCurrentUser, getUserPurchases, signInAuthUserWithEmailAndPassword, signInWithGooglePopup, signOutUser } from "../../utils/firebase/firebase.utils";
import { setBasketItems, setSearchItems, setTotalCountStart } from "../basket/basket.action";
import { noUserSession, signInFailed, signInSuccess, signOutFailed, signOutSuccess, signUpFailed, signUpSuccess } from "./user.action";
import { USER_ACTION_TYPES } from "./user.types";
import { setPurchases, setPurchasesNotification } from "../purchases/purchases.action";

export function* getSnapshotFromUserAuth(userAuth, additionalDetails) {
  try{
    const userSnapshot = yield call(
      createUserDocumentFromAuth,
      userAuth,
      additionalDetails
    )
    yield put(signInSuccess({id: userSnapshot.id, ...userSnapshot.data()}))
    yield put(setBasketItems(userSnapshot.data().basketItems))
    yield put(setTotalCountStart())
    yield put(setPurchases(userSnapshot.data().purchases))
    yield put(setPurchasesNotification(userSnapshot.data().purchases))
    yield put(setSearchItems(userSnapshot.data().basketItems))
  } catch (err) {
    yield put(signInFailed(err))
  }
}

export function* isUserAuthenticated() {
  try{
    const userAuth = yield call(getCurrentUser)
    if(!userAuth) {
      yield put(noUserSession())
      return
    }
    yield call(getSnapshotFromUserAuth,userAuth)
  } catch(err) {
    yield put(signInFailed(err))
  }
}

export function* signInWithGoogle(){
  try{
    const {user} = yield call(signInWithGooglePopup)
    yield call(getSnapshotFromUserAuth, user)
  } catch(err) {
    put(signUpFailed(err))
  }
}

export function* signInWithEmail({payload: {email,password}}){
  try{
    const { user } = yield call(
      signInAuthUserWithEmailAndPassword,
      email,
      password
    )
    if(!user) return yield put(signInFailed())
    yield call(getSnapshotFromUserAuth, user)
  }catch(err){
    yield put(signInFailed(err))
  }
}

export function* signInAfterSignUp({payload: {user,additionalDetails}}){
  yield call(getSnapshotFromUserAuth, user, additionalDetails)
}

export function* signUp({payload: {email,password,displayName}}){
  try{
    const {user} = yield call(
      createUserAuthWithEmailAndPassword,
      email,
      password,
      displayName
    )
    yield put(signUpSuccess(user, {displayName}))
  } catch (err) {
    yield put(signUpFailed(err))
  }
}

export function* signOut(){
  try{
    yield call(signOutUser)
    yield put(signOutSuccess())
  } catch(err) {
    yield put(signOutFailed())
  }
}

export function* onCheckUserSession() {
  yield takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, isUserAuthenticated)
}

export function* onGoogleSignInStart() {
  yield takeLatest(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START, signInWithGoogle)
}

export function* onEmailSignInStart(){
  yield takeLatest(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, signInWithEmail)
}

export function* onSignUpStart(){
  yield takeLatest(USER_ACTION_TYPES.SIGN_UP_START, signUp)
}

export function* onSignUpSuccess(){
  yield takeLatest(USER_ACTION_TYPES.SIGN_UP_SUCCESS, signInAfterSignUp)
}

export function* onSignOutStart(){
  yield takeLatest(USER_ACTION_TYPES.SIGN_OUT_START, signOut)
}

export function* userSagas() {
  yield all([
    call(onCheckUserSession),
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onSignUpStart),
    call(onSignUpSuccess),
    call(onSignOutStart)
  ])
}