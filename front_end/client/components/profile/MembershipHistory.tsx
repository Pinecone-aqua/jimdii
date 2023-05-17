import { MembershipType } from "@/util/types";
import MembershipCard from "./MembershipCard";
import { useEffect, useState } from "react";
import ReactLoading from "react-loading";
import axios from "axios";
import Cookies from "js-cookie";
import useReload from "@/hook/useReload";

export default function History() {
	const [membershipHistory, setMembershipHistory] = useState<
		MembershipType[] | null
	>(null);

	const { showLoading, ShowReload } = useReload();

	useEffect(() => {
		try {
			const token = Cookies.get("token");
			if (!token) return;
			axios
				.get(
					`${process.env.NEXT_PUBLIC_BACKEND_URL}membership/getMyMembership?filter=history`,
					{
						headers: { Authorization: token },
					}
				)
				.then(({ data }) => setMembershipHistory(data))
				.catch((err) => console.log(err));
		} catch (err) {
			console.log(err);
		}
	}, []);

	return (
		<div className="membership">
			{membershipHistory ? (
				membershipHistory[0] ? (
					membershipHistory.map((membership: MembershipType, i: number) => (
						<MembershipCard
							membership={membership}
							bgColor="primary"
							key={i}
						/>
					))
				) : (
					<div className="text-white flex justify-center w-full text-xl">
						No membership history found
					</div>
				)
			) : (
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
			)}
		</div>
	);
}
