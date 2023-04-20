import { UserType } from "@/utils/types";
import { createContext, useState } from "react";

import { ReactNode } from "react";

type PropType = {
  children: ReactNode;
};

type ContextType = {
  user: UserType | null;
};

const UserContext = createContext<ContextType>({ user: null });

export default function UserProvider({ children }: PropType) {
  const [user, serUser] = useState<UserType | null>(null);

  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
}
