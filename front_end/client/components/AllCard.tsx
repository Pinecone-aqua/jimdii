import { FitnessType } from "@/util/types";
import Link from "next/link";
import React from "react";

interface Proptype {
  fitness: FitnessType;
}
export default function AllCard(props: Proptype): JSX.Element {
  const { fitness } = props;
  return (
    <Link href={`/fitness/${fitness._id}`}>
      <div className="w-full flex justify-center items-center mb-[20px] pt-[20px] flex-col md:flex-row text-white">
        <div className="w-full md:w-2/3 h-[200px] md:h-[300px] lg:h-[400px]">
          <picture>
            <img
              src={fitness.image[0]}
              alt="fitnesspic"
              className="w-full h-full rounded-t-lg lg:rounded-lg border object-cover"
            />
          </picture>
        </div>
        <div className="bg-black w-full md:w-1/2 border h-[140px] md:h-[240px] lg:h-[340px] flex flex-col justify-center items-center rounded-b-lg md:rounded-lg md:scale-x-125">
          <div className="text-2xl">{fitness.name}</div>
          <p>Schedule: Mon, Wed, Fri</p>

          <p>Price: {fitness.price?.oneMonth} MNT </p>
          <button className="bg-[#4D9799] text-black w-[140px] h-[30px] mt-3">
            Дэлгэрэнгүй
          </button>
        </div>
      </div>
    </Link>
  );
}
