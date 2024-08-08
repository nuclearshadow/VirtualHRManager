import { auth } from '../../firebaseConfig'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { saveUserInfo } from '../FireStore/SaveUserInfo';

export const signup = async (email,password) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const response = await saveUserInfo(userCredential.user)
        if(response)
        {
            console.log('User created:', userCredential.user.uid);
        }
    } catch (error) {
        if (error.code === 'auth/email-already-in-use') {
            alert('This email address is already in use. Please use a different email.');
        } else {
            console.error(error.message);
        }
        console.error('Error creating user:', error);
    }
}