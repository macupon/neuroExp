// src/context/DBContext.tsx
import React, { createContext, useContext, useEffect, useState } from "react";
import {
  onAuthStateChanged,
  User,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth, db } from "../firebase";
import { doc, setDoc, getDoc } from "firebase/firestore"; // Firestore functions

interface DBContextType {
  authUser: User | null;
  createUser: (email: string, password: string) => Promise<void>;
  getUserData: (uid: string) => Promise<UserData | null>;
}

interface UserData {
  uid: string;
  email: string;
  name: string;
  lastVisit?: string;
  numberOfSessions?: number;
}

const DBContext = createContext<DBContextType | undefined>(undefined);

export const DBProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [authUser, setAuthUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setAuthUser(firebaseUser);
    });
    return () => unsubscribe();
  }, []);


  const createUser = async (email: string, password: string): Promise<void> => {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Add the new user to the Firestore database
    await setDoc(doc(db, "users", user.uid), {
      uid: user.uid,
      email: user.email,
      name: "", // You may ask for or update the name later
      createdAt: new Date().toISOString(),
      lastVisit: new Date().toISOString(),
      numberOfSessions: 1,
    });
  };

  const getUserData = async (uid: string): Promise<UserData | null> => {
    const userDocRef = doc(db, "users", uid);
    const userDocSnap = await getDoc(userDocRef);

    if (userDocSnap.exists()) {
      return userDocSnap.data() as UserData;
    }
    return null;
  };

  return (
    <DBContext.Provider value={{ authUser, createUser, getUserData }}>
      {children}
    </DBContext.Provider>
  );
};

export const useDB = () => {
  const context = useContext(DBContext);
  if (!context) {
    throw new Error("useDB must be used within a DBProvider");
  }
  return context;
};
