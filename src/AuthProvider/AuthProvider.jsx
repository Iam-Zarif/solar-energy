/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import app from "../Firebase/firebase.config";
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword} from "firebase/auth"

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
    return signInWithEmailAndPassword(auth, email, password);
   }
    // Email & password

// Google sign in

// Google sign in
  const userInfo = {
    User,
  Loader,
createUser,
Login,

  };
  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
