import Link from "next/link";
import React from "react";

export default function AllCard(): JSX.Element {
  return (
    <div className=" w-[100%] lg:w-[80%] mx-auto relative lg:flex mb-[20px] pt-[20px]">
      <div className="bg-gray-600 w-full h-[150px] md:h-[200px]   lg:w-[530px] lg:h-[420px]">
        <img src="#" alt="" />
      </div>
      <div className="bg-black border h-[140px] md:h-[180px] lg:w-[470px] lg:h-[340px] lg:absolute right-0 top-[60px] text-white flex flex-col justify-center items-center">
        <div>Cardio Fitness</div>
        <p>Mon, Wed, Fri</p>
        <p>45 min</p>
        <p>MNT 99</p>
        <Link href={`/singleGym`}>
          <button className="bg-[#4D9799] text-black w-[120px] h-[30px]">Дэлгэрэнгүй</button>
        </Link>
      </div>
    </div>
  );
}
