import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDownloadURL, getStorage, listAll, ref } from "@firebase/storage";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut
} from 'firebase/auth';
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
  orderBy,
  updateDoc,
  arrayUnion
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDYoigj-YYyaUGlrd-5d0ZWlCoLHZe-ZGM",
  authDomain: "chardy-s.firebaseapp.com",
  projectId: "chardy-s",
  storageBucket: "chardy-s.appspot.com",
  messagingSenderId: "825416200791",
  appId: "1:825416200791:web:cc3b8b9a705cab7b01e912",
  measurementId: "G-NRBFK0HJ8S"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getStorage()
const imagesRef = ref(storage, 'images/')

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: 'select_account'
})

export const auth = getAuth();
export const signInWithGooglePopup = async () => 
  await signInWithPopup( auth, googleProvider )

export const db = getFirestore();

export const getImages = async () => {
  let images = {}
  try{
    const res = await listAll(imagesRef)
    await Promise.all(res.items.map(async (itemRef) => {
      images[itemRef.name] = await getDownloadURL(itemRef)
      //images[itemRef.name] = url
    }))
  }
  catch (error){
    console.log(error)
  }
  return images
}

export const createUserDocumentFromAuth = async (userAuth, otherInfo) => {
  if(!userAuth) return

  const userDocRef = doc(db, 'users', userAuth.uid);
  let userSnapShot = await getDoc(userDocRef);
  if(!userSnapShot.exists()){
    const {displayName, email} = userAuth
    const createdAt = new Date()
    try{
      await setDoc(
        userDocRef,
        {
          displayName,
          email,
          createdAt,
          ...otherInfo
        }
      )
    }
    catch(err){
      console.log('Error in setting user document', err.message)
    }
    userSnapShot = await getDoc(userDocRef);
  }
  
  return userSnapShot
}

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if(!email || !password) return
  return await signInWithEmailAndPassword( auth, email, password )
}

export const createUserAuthWithEmailAndPassword = async (email,password) => {
  if(!email || !password) return
  return await createUserWithEmailAndPassword( auth, email, password )
}

export const signOutUser = async () => await signOut(auth)

export const onAuthStateChangedListener = (callback) => onAuthStateChanged( auth, callback )

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = collection(db, collectionKey)
  const batch = writeBatch(db)
  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title)
    batch.set(docRef, object)
  })
  await batch.commit()
}

export const getCategoriesAndDocuments = async() => {
  const collectionRef = collection(db, 'products')
  const q = query(collectionRef, orderBy('arrangement', 'asc'))

  const querySnapshot = await getDocs(q)
  const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
    const { title, items } = docSnapshot.data()
    acc[title] = items
    return acc
  }, {})
  return categoryMap
}

export const updateBasketFieldOfUser = async (userAuth, basketItems) => {
  const items = Object.keys(basketItems).length ? 
    basketItems.filter((item) => item.count > 0 || item.dozenCount > 0) : []
  const userRef = doc(db, 'users', userAuth.id)
  await updateDoc(userRef, {
    basketItems: items
  })
}

export const getUserBasket = async (userAuth) => {
  const userRef = doc(db, 'users', userAuth.uid)
  const userSnapShot = await getDoc(userRef)
  if(userSnapShot.exists()){
    const basketItems = userSnapShot.data().basketItems
    return basketItems
  }
  return userSnapShot
}

export const udpateUserPurchases = async (userAuth, basketItems) => {
  const date = new Date()
  const arr = [{purchaseDate: date.toISOString()}, {notify: true}, {items: {...basketItems}}]
  const newObj = arr.reduce((acc, curr, i) => {
    acc[i] = curr
    return acc
  },{})
  const userRef = doc(db, 'users', userAuth.id)
  await updateDoc(userRef, {
    purchases: arrayUnion(newObj)
  })
}

export const updateUserPurchaseNotification = async (userAuth, purchases) => {
  const p = purchases
  for(let i = 0; i<p.length; i++){
    if(p[i][1]) {p[i][1] = {notify: false}}
  }
  const userRef = doc(db, 'users', userAuth.id)
  await updateDoc(userRef, {
    purchases: p
  })
}

export const getUserPurchases = async (userAuth) => {
  const userRef = doc(db, 'users', userAuth.id)
  const userSnapShot = await getDoc(userRef)
  if(userSnapShot.exists()){
    const purchases = userSnapShot.data().purchases
    return purchases
  }
  return userSnapShot
}

export const removeAllUserPurchases = async (userAuth) => {
  const userRef = doc(db, 'users', userAuth.id)
  await updateDoc(userRef, {
    purchases: []
  })
}

export const getCurrentUser = () => {
  return new Promise((resolve,reject) => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (userAuth) => {
        unsubscribe()
        resolve(userAuth)
      },
      reject
    )
  })
}

export const setUserAddress = (address, userAuth) => {
  const userRef = doc(db, 'users', userAuth.id)
  updateDoc(userRef,{
    address
  })
}
