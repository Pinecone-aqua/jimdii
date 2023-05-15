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
} from "react";

interface UserContextType {
  currentUser: UserType | null;
  logoutHandler: () => void;
}

const UserContext = createContext<UserContextType>({} as UserContextType);

export function useUser() {
  return useContext(UserContext);
}

type PropType = {
  children: ReactNode;
};

type ContextType = {
  loginHandler: () => void;
  logoutHandler: () => void;
};

const UserContext = createContext<ContextType>({} as ContextType);

export default function UserProvider({ children }: PropType) {
  const router = useRouter();

  function loginHandler() {
    try {
      axios.get("http://localhost:7003/google-login").then((res) => {
        router.push(res.data);
      });
    } catch (err) {
      loginHandler();
    }
  }

  function logoutHandler() {
    Cookies.remove("token");
  }

  return (
    <UserContext.Provider value={{ loginHandler, logoutHandler }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  return useContext(UserContext);
}
