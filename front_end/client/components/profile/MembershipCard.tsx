import { TmpMembership } from "@/util/types";

interface PropType {
  membership: TmpMembership;
  bgColor: string;
  textColor: string;
}

export default function MembershipCard(props: PropType) {
  const { membership, bgColor, textColor } = props;

  return (
    <div
      className={`w-[400px] md:w-full lg:w-[46%] border border-red px-4 py-2 mx-auto my-2 bg-${bgColor} text-${textColor}`}
    >
      <div className="my-2 mx-1 text-xs flex gap-1">
        Fitness:
        <span className="text-main font-bold text-md">
          {membership.fitnessName}
        </span>
      </div>
      <div className="flex gap-2 flex-col text-xs md:flex-row md:gap-10">
        <p>Start At: {membership.startDate}</p>
        <span className="hidden md:block">-</span>
        <p>Exp At: {membership.expireDate}</p>
      </div>
    </div>
  );
}
