import { tmpMemberships } from "@/util/dummydata";
import MembershipCard from "./MembershipCard";
import { TmpMembership } from "@/util/types";
import { useEffect, useState } from "react";
import ReactLoading from "react-loading";
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
          },
        )
        .then(({ data }) => setMembershipHistory(data));
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <div className="membership">
      {membershipHistory ? (
        membershipHistory[0] ? (
          membershipHistory.map((membership: MembershipType, i: number) => (
            <MembershipCard membership={membership} bgColor="primary" key={i} />
          ))
        ) : (
          <div className="text-black flex justify-center w-full">
            No membership history found
          </div>
        )
      ) : (
        <div className="text-black flex justify-center w-full">
          <ReactLoading color="black" height={50} width={50} type="bars" />
        </div>
      )}
    </div>
  );
}
