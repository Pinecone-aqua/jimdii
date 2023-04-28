import { UserType } from "@/utils/types";
import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

import { ReactNode } from "react";

type PropType = {
  children: ReactNode;
};

type ContextType = {
  user: UserType | null;
  loginHandler: () => void;
  logoutHandler: () => void;
};

const UserContext = createContext<ContextType>({} as ContextType);

export default function UserProvider({ children }: PropType) {
  const [user, setUser] = useState<UserType | null>(null);

  useEffect(() => {
    if (localStorage.getItem("currentUser")) {
      const currentUser = localStorage.getItem("currentUser");
      setUser(JSON.parse(currentUser));
    }
  }, []);

  function loginHandler() {
    try {
      axios
        .get("http://localhost:7003/user/login")
        .then((res) => {
          setUser(res.data);
          localStorage.setItem("currentUser", JSON.stringify(res.data));
        })
        .catch((err) => console.log(err));
    } catch (err) {
      console.log(err);
    }
  }

  function logoutHandler() {
    localStorage.removeItem("currentUser");
  }

  return (
    <UserContext.Provider value={{ user, loginHandler, logoutHandler }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  return useContext(UserContext);
}
