// import React, { createContext, useState } from 'react'
// import app from '../firebase/firebase.config';
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// export const AuthContext = createContext();
// const auth = getAuth(app);

// const AuthProvider = ({children}) => {
//   const [user, setUser] = useState(null);
//   const [loading, setloading] = useState(true);

//   const createUser = (email, password) => {
//        setloading(true);
//        return createUserWithEmailAndPassword(auth, email, password)
//   }

// //   const signUpWithGmail = () => {
// //     return sigInWit
// //   }
  
//   useEffect( () => {
//     const unsubscribe = onAuthStateChanged(auth, currentUser => {
//       // console.log(currentUser);
//       setUser(currentUser);
//       setloading(false);
//     });
//     return () => {
//     return unsubscribe(); 
//     }
//   }, [])

//   const authInfo = {
//       user,
//       createUser
//   }
  
//   return (
//     <AuthContext.Provider value={authInfo}>
//        {children}
//     </AuthContext.Provider>
//   )
  
// }

// export default AuthProvider


import React, { createContext, useState, useEffect } from 'react';  // Import useEffect
import app from '../firebase/firebase.config';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";  // Import onAuthStateChanged

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);  // Fixed typo

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // const signUpWithGmail = () => {
    //     return signInWithGmail(auth, email, password);  // Example placeholder for Gmail signup
    // };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        });

        return () => {
            unsubscribe();  // Clean up the subscription on component unmount
        };
    }, []);

    const authInfo = {
        user,
        createUser,
        loading,  // Make loading state available in context
        // signUpWithGmail,  // Uncomment when implemented
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
