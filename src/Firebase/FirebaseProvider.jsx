import React, { useEffect, useState } from "react";
import { FirebaseAuthContext } from "./FirebaseAuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "./firebase.init";

const FirebaseProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [roommates, setRoommates] = useState([]);
  const [search, setSearch] = useState("");
  const provider = new GoogleAuthProvider();

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  const logIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const [theme, setTheme] = useState("light");
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const userInfo = {
    createUser,
    logIn,
    user,
    logOut,
    setUser,
    signInWithGoogle,
    loading,
    setLoading,
    theme,
    setTheme,
    roommates,
    setRoommates,
    search,
    setSearch,
  };

  return <FirebaseAuthContext value={userInfo}>{children}</FirebaseAuthContext>;
};

export default FirebaseProvider;
