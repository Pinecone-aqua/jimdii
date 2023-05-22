/* eslint-disable react/self-closing-comp */
import { FitnessType } from "@/util/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface PropsType {
  fitness: FitnessType;
}
export default function Card(props: PropsType): JSX.Element {
  const { fitness } = props;
  // w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4

  return (
    <div className=" mx-auto w-fit border border-white rounded-xl">
      <div className="sm:w-[200px] sm:h-[360px] lg:w-[240px] lg:h-[400px] 2xl:w-[280px] 2xl:h-[500px] xl:w-[230px] xl:h-[450px]  rounded-xl">
        <div className="c-card block bg-black shadow-md hover:shadow-xl overflow-hidden rounded-xl">
          <Link href={`/fitness/${fitness._id}`}>
            <div className="relative pb-32 sm:pb-28 lg:pb-32 2xl:pb-48 xl:pb-40  overflow-hidden ">
              <Image
                src={fitness.image[0]}
                alt={fitness.name}
                width={150}
                height={100}
                className="h-full w-full absolute inset-0 object-cover"
              />
            </div>
          </Link>
          <div className="p-4 sm:px-4 sm:py-2 text-white">
            <span className="inline-block px-2 py-1 leading-none bg-main text-white rounded-full font-semibold uppercase tracking-wide text-xs">
              Онцлох
            </span>
            <h2 className="mt-2 mb-2 sm:text-sm font-bold text-main">
              {fitness.name}
            </h2>

            <div className="mt-3 sm:mt-1 lg:mt-2 flex items-center">
              <span className="text-xl sm:text-sm lg:text-lg font-semibold">
                {fitness.price?.oneMonth}₮
              </span>
            </div>
          </div>
          <div className="p-2 sm:h-[70px] sm:px-2 sm:py-2 border-t border-b border-black text-xs text-white">
            <span className="flex items-center">
              <i className="far fa-clock fa-fw mr-2 text-gray-900"></i>
              {fitness.address?.description}
            </span>
          </div>
          <Link href={`/fitness/${fitness._id}`}>
            <button className="bg-main w-[132px] h-[40px] my-9 lg:my-7 sm:my-4 text-white font-extralight rounded-r-xl">
              Дэлгэрэнгүй
            </button>
          </Link>
        </div>
      </div>

      {/* <div className="flex justify-between ">
        <Link href={`/fitness/${fitness._id}`}>
          <div className="bg-black w-[280px] h-[500px] text-white font-extralight">
            <Image
              src={fitness.image[0]}
              alt={fitness.name}
              width={150}
              height={100}
              className="h-[50%] w-full"
            />
            <div className="border border-white">
              <h2 className="text-2xl my-4">{fitness.name}</h2>
              <p>Mon, Wed, Fri</p>
              <p>{}</p>
              <p>MNT {fitness.price?.oneMonth}</p>
              <button className="bg-main w-[132px] h-[40px] my-9 text-black font-extralight">
                Бүргүүлэх
              </button>
            </div>
          </div>
        </Link>
      </div> */}
    </div>
  );
}
