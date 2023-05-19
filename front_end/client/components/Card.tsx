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
      <div className="w-[300px] h-[500px] rounded-xl">
        <div className="c-card block bg-black shadow-md hover:shadow-xl overflow-hidden rounded-xl">
          <Link href={`/fitness/${fitness._id}`}>
            <div className="relative pb-48 overflow-hidden ">
              <Image
                src={fitness.image[0]}
                alt={fitness.name}
                width={150}
                height={100}
                className="h-full w-full absolute inset-0 object-cover"
              />
            </div>
          </Link>
          <div className="p-4 text-white">
            <span className="inline-block px-2 py-1 leading-none bg-main text-white rounded-full font-semibold uppercase tracking-wide text-xs">
              Онцлох
            </span>
            <h2 className="mt-2 mb-2 font-bold text-main">{fitness.name}</h2>

            <div className="mt-3 flex items-center">
              <span className="text-xl font-semibold">
                {fitness.price?.oneMonth}₮
              </span>
              {/* <span className="text-sm font-semibold">ab</span>&nbsp;
                <span className="font-bold text-xl">45,00</span>&nbsp;
                <span className="text-sm font-semibold">€</span> */}
            </div>
          </div>
          <div className="p-2 border-t border-b border-black text-xs text-white">
            <span className="flex items-center">
              <i className="far fa-clock fa-fw mr-2 text-gray-900"></i>
              {fitness.address?.description}
            </span>
            {/* <span className="flex items-center">
              <i className="far fa-address-card fa-fw text-gray-900 mr-2"></i>{" "}
              Ermäßigung mit Karte
            </span> */}
          </div>
          {/* <div className="p-4 flex items-center text-sm text-gray-600">
              <span className="ml-2">34 Bewertungen</span>
            </div> */}
          <Link href={`/fitness/${fitness._id}`}>
            <button className="bg-main w-[132px] h-[40px] my-9 text-white font-extralight rounded-r-xl">
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
