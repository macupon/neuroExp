// src/context/AuthContext.tsx
import React, { createContext, useContext, useState, useEffect } from "react";
import { userType } from "../types/user";
import { useAuth } from "./UserAuthContext";
import { useDB } from "./DBContext";

interface UserContextType {
  user: userType | null;
  setUser: (user: userType | null) => void;
  loading: boolean;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<userType | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const { authUser } = useAuth();
  const { getDocument } = useDB();

  // We need to create an effect that sets the user when the page is reloaded and the user is still signed in.
  useEffect(() => {
    const fetchUserData = async () => {
      if (authUser) {
        try {
          const userData = await getDocument<userType>("users", authUser.uid);
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
  }, [authUser, getDocument]);


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
