import { FitnessType } from "@/util/types";
import Link from "next/link";
import React from "react";

interface Proptype {
  fitness: FitnessType;
}
export default function AllCard(props: Proptype): JSX.Element {
  const { fitness } = props;
  return (
    <div className=" w-[100%] lg:w-[90%] mx-auto relative lg:flex mb-[20px] pt-[20px]">
      <Link href={`/fitness/${fitness._id}`}>
        <div className="bg-gray-600 w-full h-[150px] md:h-[300px]   lg:w-[600px] lg:h-[450px]">
          <picture>
            <img
              src={fitness.image[0]}
              alt="fitnesspic"
              className="w-full h-full"
            />
          </picture>
        </div>
      </Link>

      <div className="bg-black border h-[140px] md:h-[180px] lg:w-[470px] lg:h-[340px] lg:absolute right-0 top-[60px] text-white flex flex-col justify-center items-center">
        <div className="text-xl">{fitness.name}</div>
        <p>Mon, Wed, Fri</p>

        <p>{fitness.price?.oneMonth} MNT </p>
        <Link href={`/fitness/${fitness._id}`}>
          <button className="bg-[#4D9799] text-black w-[120px] h-[30px]">
            Дэлгэрэнгүй
          </button>
        </Link>
      </div>
    </div>
  );
}
