// src/context/AuthContext.tsx
import React, { createContext, useContext, useState, useEffect } from "react";
import { signInWithEmailAndPassword, signOut, onAuthStateChanged, User, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

interface AuthContextType {
  authUser: User | null;
  login: (email: string, password: string) => void;
  createUser: (email: string, password: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [authUser, setAuthUser] = useState<User | null>(null);

  // Listen to Firebase auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setAuthUser(firebaseUser);
    });
    return () => unsubscribe();
  }, []);


  const login = (email: string, password: string): Promise<void> => {
    return signInWithEmailAndPassword(auth, email, password).then(() => {
      console.log("Login successful");
    });
  };

  const logout = (): Promise<void> => {
    return signOut(auth).then(() => {
      console.log("User logged out");
    });
  };

  // const signIn = (email: string, password: string) => {
  //   signInWithEmailAndPassword(auth, email, password)
  //   .then(userCredentials => {
  //     console.log(userCredentials)
  //   }).catch((error)=>{
  //     console.log(error)
  //   })
  // }

  // const createUser = (email: string, password: string) => {
  //   createUserWithEmailAndPassword(auth, email, password)
  //   .then(userCredentials => {
  //     console.log(userCredentials)
  //   }).catch((error)=>{
  //     console.log(error)
  //   })
  // }
  const createUser = (email: string, password: string): Promise<void> => {
    return createUserWithEmailAndPassword(auth, email, password).then(() => {
      console.log("Account created successfully");
    });
  };

  return (
    <AuthContext.Provider value={{ authUser, login, logout, createUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
