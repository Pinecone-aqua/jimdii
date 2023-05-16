import { MembershipType } from "@/util/types";
import MembershipCard from "./MembershipCard";
import { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

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
          }
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
