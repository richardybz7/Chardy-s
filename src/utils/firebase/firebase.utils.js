import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
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
  orderBy
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

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: 'select_account'
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup( auth, googleProvider );

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, otherInfo) => {
  if(!userAuth) return

  const userDocRef = doc(db, 'users', userAuth.uid);
  const userSnapShot = await getDoc(userDocRef);
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
  }
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