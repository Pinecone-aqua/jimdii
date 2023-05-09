import { tmpMemberships } from "@/util/dummydata";
import { TmpMembership } from "@/util/types";
import moment from "moment";
import { useEffect, useState } from "react";
import MembershipCard from "./MembershipCard";

export default function Membership() {
  const [memberships, setMemberships] = useState<TmpMembership[] | null>(null);
  useEffect(() => {
    const currentDate = moment().format("YYYY-MM-DD");
    console.log(currentDate);
    setMemberships(
      tmpMemberships.filter((membership) => membership.expireDate > currentDate)
    );
  }, []);
  return (
    <div className="flex flex-wrap p-5 gap-2 justify-between">
      {memberships?.map((membership: TmpMembership, i: number) => (
        <MembershipCard
          membership={membership}
          bgColor="white"
          textColor="black"
          key={i}
        />
      ))}
    </div>
  );
}
