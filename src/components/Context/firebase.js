// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'deneme',
  authDomain: 'auth-deneme.deneme.com',
  projectId: 'auth-deneme',
  storageBucket: 'auth-deneme.appspot.com',
  messagingSenderId: 'deneme',
  appId: 'deneme'
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const provider = new GoogleAuthProvider()

export { auth, provider }
