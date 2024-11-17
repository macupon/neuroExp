// src/context/AuthContext.tsx
import React, { createContext, useContext, useState, useEffect } from "react";
import { signInWithEmailAndPassword, signOut, onAuthStateChanged, User, createUserWithEmailAndPassword, UserCredential } from "firebase/auth";
import { auth } from "../firebase";
import { UserManager } from "../services/database/UserManager";

interface AuthContextType {
  authUser: User | null;
  login: (email: string, password: string) => Promise<UserCredential>;
  createUserAuth: (email: string, password: string) => Promise<UserCredential>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [authUser, setAuthUser] = useState<User | null>(null);

  // Listen to Firebase auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setAuthUser(firebaseUser);
      if (firebaseUser) {
        try {
          // Update the 'lastOnline' field to the current date and time
          UserManager.updateUserField(
            firebaseUser.uid,
            "lastOnline",
            new Date()
          );
          console.log(`Updated lastOnline for user ${firebaseUser.uid}`);
        } catch (error) {
          console.error(
            `Failed to update lastOnline for user ${firebaseUser.uid}:`,
            error
          );
        }
      }
    });
    return () => unsubscribe();
  }, []);


  const login = (email: string, password: string): Promise<UserCredential> => {

    return signInWithEmailAndPassword(auth, email, password)
    ;
  };

  const logout = (): Promise<void> => {
    return signOut(auth).then(() => {
      console.log("User logged out");
    });
  };

  const createUserAuth = (email: string, password: string): Promise<UserCredential> => {
    return createUserWithEmailAndPassword(auth, email, password)
  };

  return (
    <AuthContext.Provider value={{ authUser, login, logout, createUserAuth }}>
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
