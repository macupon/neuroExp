// src/context/AuthContext.tsx
import React, { createContext, useContext, useState, useEffect } from "react";
import { User } from "../models/user";
import { useAuth } from "./UserAuthContext";
import { UserManager } from "../services/database/UserManager";

interface UserContextType {
  user: User | null;
  setUser: (user: User | null) => void;
  loading: boolean;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const { authUser } = useAuth();

  // We need to create an effect that sets the user when the page is reloaded and the user is still signed in.
  useEffect(() => {
    const fetchUserData = async () => {
      if (authUser) {
        try {
          // const userData = await getDocument<User>("users", authUser.uid);
          const userData = await UserManager.getUser(authUser.uid)
          if (userData) {
            setUser(userData);
          } else {
            console.log("No user data found for the authenticated user.");
            setUser(null);
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
          setUser(null);
        }
      } else {
        setUser(null);
      }
      setLoading(false);
    };

    fetchUserData();
  }, [authUser]);


  return (
    <UserContext.Provider value={{  user, setUser, loading }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a useUserProvider");
  }
  return context;
};
