import Link from "next/link";
import React from "react";

export default function SingleGym(): JSX.Element {
  return (
    <div className=" h-screen w-[60%] m-auto">
      <div className="flex gap-2 py-5 border-b-2 border-black my-4">
        <Link href={`/`}>Back</Link>
        <p>Cardio Fitness</p>
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
            <Link
              href={`https://www.goldsgym.mn/amenities/`}
              className="border border-black "
            >
              Facebook Icon
            </Link>
            <Link
              href={`https://www.goldsgym.mn/amenities/`}
              className="border border-black "
            >
              Instagram Icon
            </Link>
            <Link
              href={`https://www.goldsgym.mn/amenities/`}
              className="border border-black "
            >
              Website Icon
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
