import Membership from "@/components/profile/ActiveMembership";
import History from "@/components/profile/MembershipHistory";
import UserDetail from "@/components/profile/UserDetail";

export const ProfileButton = [
	{
		name: "Profile",
		component: <UserDetail />,
	},
	{
		name: "Membership",
		component: <Membership />,
	},
	{
		name: "History",
		component: <History />,
	},
];
