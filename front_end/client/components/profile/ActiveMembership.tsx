import { MembershipType } from "@/util/types";
import { useEffect, useState } from "react";
import MembershipCard from "./MembershipCard";
import ReactLoading from "react-loading";
import Cookies from "js-cookie";
import axios from "axios";
import useReload from "@/hook/useReload";

export default function Membership() {
	const [memberships, setMemberships] = useState<MembershipType[] | null>(null);
	const { showLoading, ShowReload } = useReload();

	useEffect(() => {
		try {
			const token = Cookies.get("token");
			if (!token) return;
			axios
				.get(
					`${process.env.NEXT_PUBLIC_BACKEND_URL}membership/getMyMembership?filter=active`,
					{
						headers: { Authorization: token },
					}
				)
				.then(({ data }) => setMemberships(data))
				.catch((err) => console.log(err));
		} catch (err) {
			console.log(err);
		}
	}, []);
	return (
		<div className="membership">
			{memberships ? (
				memberships[0] ? (
					memberships.map((membership: MembershipType, i: number) => (
						<MembershipCard
							membership={membership}
							bgColor="primary"
							key={i}
						/>
					))
				) : (
					<div className="text-white flex justify-center w-full text-xl">
						No membership found
					</div>
				)
			) : (
				<div className="text-black flex justify-center w-full">
					<div className="text-black flex justify-center w-full">
						{showLoading ? (
							<ReactLoading
								color="black"
								height={50}
								width={50}
								type="bars"
							/>
						) : (
							<ShowReload />
						)}
					</div>
				</div>
			)}
		</div>
	);
}
