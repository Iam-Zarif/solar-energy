/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import app from "../Firebase/firebase.config";
import {
  FacebookAuthProvider,
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

export const AuthContext = createContext(null);
const auth = getAuth(app);

// The Component start here
const AuthProvider = ({ children }) => {
  const [User, setUser] = useState(null);
  const [Loader, setLoader] = useState(true);

  // Facebook
  const facebookUser = new FacebookAuthProvider()
  const facebookSignIn = () =>{
    setLoader(true);
    return signInWithPopup(auth, facebookUser);
  }

  // Google
  const googleUser = new GoogleAuthProvider();
  const googleSignIn =() =>{
    setLoader(true)
    return signInWithPopup(auth, googleUser);
  }
    // Github sign in
const githubProvider = new GithubAuthProvider()
const githubSignIn =() =>{
  setLoader(true);
  return signInWithPopup(auth,githubProvider)
}
  // Email & password
  const createUser = (email, password) => {
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const Login = (email, password) => {
    setLoader(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logOut = () => {
    setLoader(true);
    return signOut(auth);
  };
  const UpdatedUserInfo = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (loggedUser) => {
      // console.log(loggedUser);
      setUser(loggedUser);
      setLoader(false);
    });
    return () => {
      return unsubscribe();
    };
  });
  // Email & password



  const userInfo = {
    User,
    Loader,
    createUser,
    Login,
    logOut,
    UpdatedUserInfo,
    googleSignIn,
    githubSignIn,
    facebookSignIn
  };
  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
