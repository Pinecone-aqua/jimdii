import Link from "next/link";
import React from "react";

export default function Card({ photo }): JSX.Element {
  console.log(photo);
  return (
    <div className="border border-white w-fit">
      <div className="flex justify-between ">
        <Link href={`singleGym`}>
          <div className="bg-black w-[300px] h-[550px] text-white p-5 font-extralight">
            <picture>
              <img src={photo} alt="Card Pic" className="h-[50%]" />
            </picture>
            <h2 className="text-2xl my-4">Cardio Fitness</h2>
            <p>Mon, Wed, Fri</p>
            <p>45 min</p>
            <p>MNT 99</p>
            <button className="bg-main w-[132px] h-[40px] my-9 text-black font-extralight">
              Бүргүүлэх
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
}
