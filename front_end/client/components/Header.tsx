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
      <div className="flex container mx-auto justify-evenly sm:justify-between items-center">
        <div className="w-[10%] sm:hidden">
          <Dropdown label="" id="headerDropdown">
            <Dropdown.Item>
              <Link href={`/`}>Нүүр хуудас</Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link href={`/allFitness`}>Жийм</Link>
            </Dropdown.Item>
            <Dropdown.Divider />
          </Dropdown>
        </div>

        <div className="w-1/2 sm:w-1/3 lg:w-1/10">
          <Link href={`/`} className="flex justify-center">
            <MainResLogo />
          </Link>
        </div>
        <div className="hidden sm:w-1/2 lg:w-8/12 sm:block">
          <nav className="text-white flex lg:gap-20 sm:gap-10">
            <Link href={`/`} className="hover:text-main">
              Нүүр хуудас
            </Link>
            <Link href={`/allFitness/1`} className="hover:text-main">
              Жийм
            </Link>
          </nav>
        </div>

        <div className="w-1/10">
          {user ? (
            <div className="flex items-center gap-10">
              <div className="flex items-center gap-2">
                <picture>
                  <img
                    className="w-[30px] sm:w-[50px] lg:w-[80px] rounded-[50%]"
                    src={user.image}
                    alt=""
                  />
                </picture>
                <div className="lg:hidden">
                  <Dropdown label="" id="headerDropdown">
                    <Dropdown.Header>
                      <span className="block text-sm">{user.name}</span>
                      <span className="block truncate text-sm font-medium">
                        {user.email}
                      </span>
                    </Dropdown.Header>
                    <Dropdown.Item>
                      <Link href={`/`}>Миний хуудас</Link>
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item
                      onClick={() => {
                        console.log("logout");
                        Cookies.remove("token");
                        setUser("");
                      }}
                    >
                      Log Out
                    </Dropdown.Item>
                  </Dropdown>
                </div>

                <p className="hidden lg:block text-md">{user.name}</p>
              </div>
              <div
                className="hidden lg:block cursor-pointer text-main text-md"
                onClick={() => {
                  Cookies.remove("token");
                  setUser("");
                }}
              >
                Log Out
              </div>
            </div>
          ) : (
            <Link href={`/login`}>
              <div className="flex items-center gap-2">
                <LoginLogo />
                <p className="text-sm">Log In</p>
              </div>
            </Link>
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
