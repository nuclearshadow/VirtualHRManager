import { auth, googleProvider, firestore } from "../../firebaseConfig";
import { signInWithPopup } from "firebase/auth";
import { doc, setDoc, getDoc } from 'firebase/firestore'
import {saveUserInfo} from '../FireStore/SaveUserInfo'

export const signinWithGoogle = async () => {
    try {
        const userCredential = await signInWithPopup(auth, googleProvider);
        const documentRef = doc(firestore, "UserInfo", userCredential.user.uid)
        const userDoc = await getDoc(documentRef);
        if (!userDoc.exists()) {
            const response = await saveUserInfo(userCredential.user)
            if (response) {
                console.log('User created:', userCredential.user.uid);
            }
        }
        console.log('User Signined:', userCredential.user);
    } catch (error) {
        console.error("Error : ", error.message)
    }
}