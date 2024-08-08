// import React, { useEffect, useState } from 'react'
// import Register from './Register'
// import Login from './Login'
// import {Route, Routes, useNavigate } from 'react-router-dom';
// import Chat_page from './Chat_page';
// import {isLogined} from '../Firebase/Authentication/IsLogined'

// export default function Home() {

//   const [isAuthenticated, setIsAuthenticated] = useState(null); // State to hold login status
//   const navigate = useNavigate();

//   useEffect(() => {
//     const checkLoginStatus = async () => {
//       const user = await isLogined();
//       console.log("TESTTTTTTT: ",user)
//       if (user) {
//         setIsAuthenticated(true); // User is logged in
//         console.log("USER : ",user)
//         navigate('/interview')
//       } else {
//         setIsAuthenticated(false); // User is not logged in
//         console.log("USER NOT FOUND")
//         navigate('/login'); // Redirect to login page
//       }
//     };

//     checkLoginStatus();
//   }, [navigate]);

//   if (isAuthenticated === null) {
//     return <div>Loading...</div>; // Or a loading spinner/component
//   }


//   return (
//     <>
//       <Routes>
//       <Route path="/interview" element={<Chat_page/>}></Route>
//       <Route  path="/login" element={<Login/>} />
//       <Route  path="/register" element={<Register/>} />
//       </Routes>
//     </>
//   )
// }


import React, { useEffect, useState } from 'react';
import Register from './Register';
import Login from './Login';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Chat_page from './Chat_page';
import { isLogined } from '../Firebase/Authentication/IsLogined';
import { auth } from "../firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(null); // State to hold login status
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if(currentUser)
      {
        navigate('/interview',{replace : true})
      }
      });
  },[]);

  // if (isAuthenticated === null) {
  //   return <div>Loading...</div>; // Or a loading spinner/component
  // }

  return (
    <>
      <Routes>
        <Route path="/interview" element={<Chat_page />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}
