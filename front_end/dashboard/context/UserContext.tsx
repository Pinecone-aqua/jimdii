import { UserType } from "@/utils/types";
import axios from "axios";
import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";
import { useRouter } from "next/router";
import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

interface UserContextType {
  currentUser: UserType | null;
  logoutHandler: () => void;
}

const UserContext = createContext<UserContextType>({} as UserContextType);

export function useUser() {
  return useContext(UserContext);
}

const UserContext = createContext<UserContextType>({} as UserContextType);

export function useUser() {
  return useContext(UserContext);
}

interface UserProviderType {
  children: ReactNode;
}

export default function UserProvider({ children }: UserProviderType) {
  const [currentUser, setCurrentUser] = useState<UserType | null>(null);

  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      setCurrentUser(jwtDecode(token));
    }
  }, []);

  return (
    <UserContext.Provider value={{ currentUser }}>
      {children}
    </UserContext.Provider>
  );
}
