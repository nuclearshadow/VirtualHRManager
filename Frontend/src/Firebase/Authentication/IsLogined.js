// import { auth } from "../../firebaseConfig";
// import { onAuthStateChanged } from "firebase/auth";

// export const isLogined = async () => {
//     try {
//         onAuthStateChanged(auth, (user)=>{
//             if(user){
//                 console.log("USER FROM ISLOGINED",user)
//                 return user
//             }
//             return false
//         });
        
//     } catch (error) {
//         console.error("ERROR : ",error.message)
//     }
// }

import { auth } from "../../firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";

export const isLogined = async (props) => {
    let user = false;
    try {
        await new Promise((resolve, reject) => {
            const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
                unsubscribe(); // Clean up the listener
                if (currentUser) {
                    user = currentUser;
                    resolve(user);
                    // props.setIsAuthenticated(true);
                } else {
                    resolve();
                }
            }, (error) => {
                reject(error); // Reject the promise if there's an error
                // props.setIsAuthenticated(false);
            });
        });
    } catch (error) {
        console.error("ERROR : ", error.message);
    }
    return user;
}
