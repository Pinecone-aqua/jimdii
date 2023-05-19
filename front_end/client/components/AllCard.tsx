import { FitnessType } from "@/util/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Proptype {
  fitness: FitnessType;
}
export default function AllCard(props: Proptype): JSX.Element {
  const { fitness } = props;
  return (
    <Link href={`/fitness/${fitness._id}`}>
      <div className="w-full flex justify-center items-center mb-[20px] pt-[20px] flex-col md:flex-row text-white px-6">
        <div className="w-full md:w-3/4 h-[150px] md:h-[300px] lg:h-[380px]">
          <Image
            src={fitness.image[0]}
            alt={fitness.name}
            width={150}
            height={100}
            className="w-full h-full rounded-t-lg md:rounded-lg border object-cover"
          />
        </div>
        <div className="bg-black w-full md:w-2/5 border h-[140px] md:h-[200px] lg:h-[300px] flex flex-col justify-center items-center rounded-b-lg md:rounded-lg md:scale-x-125 text-sm">
          <div className="text-md text-bold md:text-xl">{fitness.name}</div>
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
