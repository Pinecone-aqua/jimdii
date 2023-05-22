import { UserType } from "@/util/types";
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
  setCurrentUser: React.Dispatch<React.SetStateAction<UserType | null>>;
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
  const router = useRouter();

  useEffect(() => {
    if (router.query.token) {
      router.replace("/");
      Cookies.set("token", `${router.query.token}`);
      setCurrentUser(jwtDecode(`${router.query.token}`));
    }
    const token = Cookies.get("token");
    if (!token && router.asPath === "/profile") router.push("/login");
  }, [router]);

  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </UserContext.Provider>
  );
}
