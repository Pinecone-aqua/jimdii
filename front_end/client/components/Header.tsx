/* eslint-disable @typescript-eslint/no-explicit-any */

import React, { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import LoginLogo from "./subcomp/LoginLogo";
import { Dropdown } from "flowbite-react";
import MainResLogo from "./subcomp/MainResLogo";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

interface HeaderType {
  user: any;
  setUser: (arg: any) => void;
}

export default function Header({ user, setUser }: HeaderType): JSX.Element {
  const [scrollY, setScrollY] = useState(0);
  const router = useRouter();

  const onScroll = useCallback(() => {
    // console.log(window);
    // const { pageYOffset, scrollY } = window;
    // console.log("yOffset", pageYOffset, "scrollY", scrollY);
    setScrollY(window.pageYOffset);
  }, []);

  useEffect(() => {
    //add eventlistener to window
    window.addEventListener("scroll", onScroll, { passive: true });
    // remove event on unmount to prevent a memory leak with the cleanup
    return () => {
      window.removeEventListener("scroll", onScroll, { passive: true });
    };
  }, []);

  return (
    <header
      className={`${
        scrollY < 60 && router.asPath == "/" ? "bg-none" : "bg-black z-40"
      } sticky top-0 z-20 h-[120px] flex items-center transition ease-in text-main whitespace-nowrap`}
    >
      <div className="flex container mx-auto justify-between items-center">
        {/* <Dropdown
          label="//"
          className="bg-transparent text-white"
          id="headerDropdown"
          arrowIcon={false}
        >
          <Dropdown.Header>
            <span className="block text-sm">Unknown</span>
            <span className="block truncate text-sm font-medium">
              example@gmail.com
            </span>
          </Dropdown.Header>
          <Dropdown.Item>
            <Link href={`/`} className="hover:text-[#4D9799]">
              Нүүр хуудас
            </Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Link href={`/allFitness`} className="hover:text-[#4D9799]">
              Жийм
            </Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Link href={`/signUpGym`} className="hover:text-[#4D9799]">
              Gym-ээ бүртгүүлэх
            </Link>
          </Dropdown.Item>

          <Dropdown.Divider />
        </Dropdown> */}
        <div className="w-1/5">
          <Link href={`/`}>
            <MainResLogo />
          </Link>
        </div>
        <div className="w-1/2">
          <nav className="text-white">
            <Link href={`/`} className="hover:text-main">
              Нүүр хуудас
            </Link>
            <Link href={`/allFitness/1`} className="hover:text-main">
              Жийм
            </Link>
          </nav>
        </div>

        <div className="">
          {user ? (
            <div className="flex items-center">
              <div className="flex items-center gap-6">
                <picture className="">
                  <img
                    className="w-[30px] rounded-[50%]"
                    src={user.image}
                    alt=""
                  />
                </picture>
                <p className="text-md ">{user.name}</p>
              </div>
              <div
                className="cursor-pointer text-main text-md"
                onClick={() => {
                  Cookies.remove("token");
                  setUser("");
                }}
              >
                Log Out
              </div>
            </div>
          ) : (
            <div className="">
              <Link href={`/login`} className="flex items-center">
                <div className="">
                  <LoginLogo />
                  <p className="text-sm">Log In</p>
                </div>
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

{
  /* <Link href={`/signUpGym`} className="hidden lg:flex">
            <button className="bg-[#4D9799] h-[40px] w-[155px]">
              Gym-ээ бүртгүүлэх
            </button>
          </Link> */
}
