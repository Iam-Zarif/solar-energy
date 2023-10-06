/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import app from "../Firebase/firebase.config";
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, updateProfile} from "firebase/auth"

export const AuthContext = createContext(null);
const auth = getAuth(app)

// The Component start here
const AuthProvider = ({ children }) => {
    const [User, setUser] = useState(null);
    const [Loader, setLoader] = useState(true);

    // Email & password
   const createUser = (email,password) =>{
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, password);
   }

   const Login =(email, password) =>{
    setLoader(true)
    return signInWithEmailAndPassword(auth, email, password);
   }
   const UpdatedUserInfo =(name, photo) =>{
     return updateProfile(auth.currentUser, {
       displayName: name,
       photoURL: photo
     })
   }
   useEffect(() => {
    
    const unsubscribe = onAuthStateChanged(auth, (loggedUser) => {
      console.log(loggedUser);
      setUser(loggedUser);
      setLoader(false)
    });
    return () => {
      return unsubscribe();
    };
  });
    // Email & password

// Google sign in

// Google sign in
  const userInfo = {
    User,
  Loader,
createUser,
Login,
UpdatedUserInfo,
  };
  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
