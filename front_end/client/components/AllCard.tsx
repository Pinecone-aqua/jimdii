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
      <div className=" w-[100%] lg:w-[80%] mx-auto relative lg:flex mb-[20px] pt-[20px]">
        <div className=" w-full h-[200px] md:h-[300px]   lg:w-[600px] lg:h-[450px]  ">
          <picture>
            <img
              src={fitness.image[0]}
              alt="fitnesspic"
              className="w-full h-full rounded-t-lg lg:rounded-lg border"
            />
          </picture>
        </div>

        <div className="bg-black border h-[140px] md:h-[180px] lg:w-[470px] lg:h-[340px] lg:absolute right-0 top-[60px] text-white flex flex-col justify-center items-center rounded-b-lg lg:rounded-lg">
          <div className="text-2xl">{fitness.name}</div>
          <p>Schedule: Mon, Wed, Fri</p>

          <p>Price: {fitness.price?.oneMonth} MNT </p>
          <Link href={`/fitness/${fitness._id}`}>
            <button className="bg-[#4D9799] text-black w-[140px] h-[30px] mt-3">
              Дэлгэрэнгүй
            </button>
          </Link>
        </div>
      </div>
    </Link>
  );
}
