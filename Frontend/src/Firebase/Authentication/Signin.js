import { auth } from '../../firebaseConfig'
import { signInWithEmailAndPassword } from 'firebase/auth'


export const signin = async (email,password) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        console.log('User Signined:', userCredential.user);

    } 
    catch (error) 
    {
        if (error.code === 'auth/user-not-found') 
        {
            alert('No user found with this email.');
        } 
        else if (error.code === 'auth/wrong-password') 
        {
            alert('Incorrect password or Email');
        } 
        else 
        {
            console.error(error.message);
        }
        console.error('Error signing in:', error);
    }
}