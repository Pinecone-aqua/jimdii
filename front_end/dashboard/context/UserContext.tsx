import { UserType } from "@/util/types";
import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";
import React, {
	ReactNode,
	createContext,
	useContext,
	useEffect,
	useState,
} from "react";

interface UserContextType {
	currentUser: UserType | null;
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
