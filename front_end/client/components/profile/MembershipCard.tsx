import { MembershipType } from "@/util/types";

interface PropType {
	membership: MembershipType;
	bgColor: string;
}

export default function MembershipCard(props: PropType) {
	const { membership, bgColor } = props;

	return (
		<div
			className={`membership-card ${
				bgColor === "primary"
					? "membership-card--primary"
					: "membership-card--secondary"
			}`}>
			<div className="membership-card__header">
				<div className="my-2 mx-1 text-xs flex gap-1">
					Fitness:
					<span className="membership-card__fitness font-bold text-md">
						{membership.fitnessId.name}
					</span>
				</div>
			</div>
			<div className="membership-card__dates flex gap-2 flex-col text-xs md:flex-row md:gap-10">
				<p>Start At: {membership.startDate}</p>
				<span className="membership-card__dates-separator hidden md:block">
					-
				</span>
				<p>Exp At: {membership.expireDate}</p>
			</div>
		</div>
	);
}
