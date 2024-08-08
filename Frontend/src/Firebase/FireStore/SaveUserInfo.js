import { firestore } from "../../firebaseConfig";
import { setDoc, doc } from 'firebase/firestore'

export const saveUserInfo = async (user) => {

    // try {

        // const userDocRef = doc(firestore, 'UserInfo', user.uid); // Use email as document ID for simplicity
        // await setDoc(userDocRef, {
        //     displayName: user.displayName,
        //     email: user.email,

            return true;
        // });

    // } catch (error) {
        // console.error("ERROR: ", error.message)
    // }

}