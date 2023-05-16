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

interface UserProviderType {
  children: ReactNode;
  children: ReactNode;
}

export default function UserProvider({ children }: UserProviderType) {
  const [currentUser, setCurrentUser] = useState<UserType | null>(null);
  const router = useRouter();

  useEffect(() => {
    const token = Cookies.get("aToken");
    // if (!token && router.asPath !== "/login") {
    //   router.push("/login");
    //   return;
    // }
    if (token) {
      try {
        axios
          .get("http://localhost:7003/user/checkToken?role=admin", {
            headers: { Authorization: token },
          })
          .then(() => setCurrentUser(jwtDecode(token)))
          .catch(() => (Cookies.remove("atoken"), setCurrentUser(null)));
      } catch (err) {
        console.log(err);
      }
    }
  }, [router]);

  function logoutHandler() {
    Cookies.remove("aToken");
    setCurrentUser(null);
    router.push("/login");
  }

  return (
    <UserContext.Provider value={{ currentUser, logoutHandler }}>
      {children}
    </UserContext.Provider>
  );
}
