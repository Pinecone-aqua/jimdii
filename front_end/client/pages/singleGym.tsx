import Link from "next/link";
import React from "react";

export default function SingleGym(): JSX.Element {
  return (
    <div className=" h-screen w-[60%] m-auto">
      <div className="flex gap-2 py-5 border-b-2 border-black my-4">
        <Link href={`/`}>Back</Link>
        <p>Cardio Fitness</p>
      </div>
      <div className="flex w-[40%] justify-between mb-1">
        <div>Location is Here</div>
        <div>Phone is Here</div>
      </div>
      <div className="flex justify-between">
        <div className="w-[57%] bg-slate-200 h-[60vh]">
          <picture>
            <img
              src="https://www.goldsgym.mn/images/upload/2016/ub_golds_amenities/DSC06969.jpg"
              alt="Single Gym Picc"
            />
          </picture>
        </div>
        <div id="singleDescription" className="w-[40%] bg-slate-300 p-4">
          <h2 className="text-2xl m-5">Нэр</h2>
          <div className="flex w-[60%] justify-between mx-5">
            <p>Wifi</p>
            <p>Check icon for Boolean</p>
          </div>
          <div className="flex w-[60%] justify-between mx-5">
            <p>Shower</p>
            <p>Check icon for Boolean</p>
          </div>
          <div className="flex w-[60%] justify-between mx-5">
            <p>Park</p>
            <p>Check icon for Boolean</p>
          </div>

          {/* This is Schedule Table  */}
          <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                  <table className="min-w-full text-left text-sm font-light">
                    <thead className="border-b font-medium dark:border-neutral-500">
                      <tr>
                        <th scope="col" className="px-6 py-4">
                          Цагийн хууварь
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="whitespace-nowrap px-6 py-4">Даваа</td>
                        <td className="whitespace-nowrap px-6 py-4">
                          07:00 - 22:00
                        </td>
                      </tr>
                      <tr>
                        <td className="whitespace-nowrap px-6 py-4">Jacob</td>

                        <td className="whitespace-nowrap px-6 py-4">
                          07:00 - 22:00
                        </td>
                      </tr>
                      <tr>
                        <td className="whitespace-nowrap px-6 py-4">Larry</td>
                        <td className="whitespace-nowrap px-6 py-4">
                          07:00 - 22:00
                        </td>
                      </tr>
                      <tr>
                        <td className="whitespace-nowrap px-6 py-4">Larry</td>
                        <td className="whitespace-nowrap px-6 py-4">
                          07:00 - 22:00
                        </td>
                      </tr>
                      <tr className="border-b dark:border-neutral-500">
                        <td className="whitespace-nowrap px-6 py-4">Larry</td>
                        <td className="whitespace-nowrap px-6 py-4">
                          07:00 - 22:00
                        </td>
                      </tr>
                      <tr>
                        <td className="whitespace-nowrap px-6 py-4">Larry</td>
                        <td className="whitespace-nowrap px-6 py-4">
                          07:00 - 21:00
                        </td>
                      </tr>
                      <tr className="border-b dark:border-neutral-500">
                        <td className="whitespace-nowrap px-6 py-4">Larry</td>
                        <td className="whitespace-nowrap px-6 py-4">
                          09:00 - 21:00
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          {/* Icon  */}
          <div className="flex justify-between">
            <Link href={`/`} className="border border-black w-[50%]">
              Бүртгүүлэх товч
            </Link>
            <Link
              href={`https://www.goldsgym.mn/amenities/`}
              className="border border-black "
            >
              FBIcon
            </Link>
            <Link
              href={`https://www.goldsgym.mn/amenities/`}
              className="border border-black "
            >
              IGIcon
            </Link>
            <Link
              href={`https://www.goldsgym.mn/amenities/`}
              className="border border-black "
            >
              WIcon
            </Link>
          </div>
        </div>
      </div>
      <div className="flex justify-between mt-4">
        <div className="w-[57%]  bg-slate-200 h-[25vh]">Description</div>
        <div className="w-[40%] bg-slate-200">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2674.6157396292306!2d106.94065411232931!3d47.90512226719518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5d96922a376aac73%3A0x77624a376ddadbea!2sGold&#39;s%20Gym!5e0!3m2!1smn!2smn!4v1682008315059!5m2!1smn!2smn"
            width="600"
            height="450"
            loading="lazy"
            className="h-[25vh] w-full"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
