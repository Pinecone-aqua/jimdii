// import { createContext } from "react";

import { ReactNode } from "react";

type PropType = {
  children: ReactNode;
};

// const UserContext = createContext();

export default function UserProvider({ children }: PropType) {
  return <>{children}</>;
}
