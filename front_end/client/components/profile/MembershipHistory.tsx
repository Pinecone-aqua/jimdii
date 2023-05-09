import { tmpMemberships } from "@/util/dummydata";
import MembershipCard from "./MembershipCard";
import { TmpMembership } from "@/util/types";
import { useEffect, useState } from "react";
import moment from "moment";

export default function History() {
  const [membershipHistory, setMembershipHistory] = useState<
    TmpMembership[] | null
  >(null);

  useEffect(() => {
    const currentDate = moment().format("YYYY-MM-DD");
    console.log(currentDate);
    setMembershipHistory(
      tmpMemberships.filter((membership) => membership.expireDate < currentDate)
    );
  }, []);

  return (
    <div className="flex flex-wrap p-5 gap-2 justify-between">
      {membershipHistory?.map((membership: TmpMembership, i: number) => (
        <MembershipCard
          membership={membership}
          bgColor="slate-700"
          textColor="white"
          key={i}
        />
      ))}
    </div>
  );
}
