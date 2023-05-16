import { tmpMemberships } from "@/util/dummydata";
import MembershipCard from "./MembershipCard";
import { TmpMembership } from "@/util/types";
import { useEffect, useState } from "react";
import moment from "moment";

export default function History() {
  const [membershipHistory, setMembershipHistory] = useState<
    MembershipType[] | null
  >(null);

  useEffect(() => {
    try {
      const token = Cookies.get("token");
      if (!token) return;
      axios
        .get(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}membership/getMyMembership?filter=history`,
          {
            headers: { Authorization: token },
          },
        )
        .then(({ data }) => setMembershipHistory(data));
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <div className="membership">
      {membershipHistory?.map((membership: MembershipType, i: number) => (
        <MembershipCard membership={membership} bgColor="secondary" key={i} />
      ))}
    </div>
  );
}
