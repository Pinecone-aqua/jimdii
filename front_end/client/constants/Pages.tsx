import Membership from "@/components/profile/ActiveMembership";
import History from "@/components/profile/MembershipHistory";
import UserDetail from "@/components/profile/UserDetail";
import { BsCardList, BsClockHistory, BsPersonCircle } from "react-icons/bs";

export const ProfileNavbar = [
	{
		name: "Profile",
		component: <UserDetail />,
		icon: <BsPersonCircle />,
	},
	{
		name: "Membership",
		component: <Membership />,
		icon: <BsCardList />,
	},
	{
		name: "History",
		component: <History />,
		icon: <BsClockHistory />,
	},
];
