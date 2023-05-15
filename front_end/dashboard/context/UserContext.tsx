import axios from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { createContext, useContext } from "react";

import { ReactNode } from "react";

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
