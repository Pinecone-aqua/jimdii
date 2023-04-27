import React from "react";
import MainLogo from "./subcomp/MainLogo";
import MainResLogo from "./subcomp/MainResLogo";

export default function Banner(): JSX.Element {
  return (
    <div className="bg-black h-[60vh] flex justify-center items-center">
      <div className="w-[50%]">
        <div className="md:hidden">
          <MainResLogo />
        </div>
        <div className="hidden md:inline">
          <MainLogo />
        </div>
        <h2 className="text-[22px] sm:text-[28px] md:text-[30px] text-white my-[30px] font-extralight">
          Монголын анхны цахим фитнесс захиалга
        </h2>

        <div className="mb-3 xl:w-96">
          <div className="relative mb-4 flex w-[100%] flex items-stretch">
            <input
              type="search"
              className="relative m-0 -mr-0.5 block w-[80%] min-w-0 flex-auto rounded-l border border-solid border-[#4D9799] bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-[#4D9799] focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,1,202)] focus:outline-none dark:border-[#4D9799] dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-[#4D9799]"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="button-addon1"
            />

            {/* <!--Search button--> */}
            <button
              className="relative z-[2] flex items-center rounded-r bg-[#4D9799] px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
              type="button"
              id="button-addon1"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
