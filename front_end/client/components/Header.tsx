/* eslint-disable @typescript-eslint/no-explicit-any */

import React, { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import LoginLogo from "./subcomp/LoginLogo";
import { Dropdown } from "flowbite-react";
import MainResLogo from "./subcomp/MainResLogo";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { useUser } from "@/context/UserContext";
import Image from "next/image";

export default function Header(): JSX.Element {
  const [scrollY, setScrollY] = useState(0);
  const router = useRouter();
  const { currentUser, setCurrentUser } = useUser();

  const onScroll = useCallback(() => {
    // const { pageYOffset, scrollY } = window;
    setScrollY(window.pageYOffset);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", onScroll, { passive: true });
    // remove event on unmount to prevent a memory leak with the cleanup
    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  return (
    <header
      className={`${
        scrollY < 60 && router.asPath == "/"
          ? "bg-black lg:bg-none z-50"
          : "bg-black z-40"
      } sticky top-0 z-20 h-[120px] flex items-center transition ease-in text-main whitespace-nowrap`}
    >
      <div className="flex container mx-auto justify-evenly sm:justify-between items-center">
        <div className="w-[10%] sm:hidden z-100">
          <Dropdown label="" id="headerDropdown">
            <Dropdown.Item>
              <Link href={`/`}>Нүүр хуудас</Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link
                href={{
                  pathname: "/allFitness",
                  query: { page: 1 },
                }}
              >
                Жийм
              </Link>
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>
              <Link href={`/news`}>Мэдээ, мэдээлэл</Link>
            </Dropdown.Item>
          </Dropdown>
        </div>

        <div className="w-1/2 sm:w-1/3 lg:w-[10%]">
          <Link href={`/`} className="flex justify-center">
            <MainResLogo />
          </Link>
        </div>
        <div className="hidden sm:w-1/2 sm:text-sm lg:text-lg lg:w-8/12 sm:block">
          <nav className="text-white flex lg:gap-16 lg:pl-20 sm:gap-5">
            <Link href={`/`} className="hover:text-main">
              Нүүр хуудас
            </Link>
            <Link
              href={{
                pathname: "/allFitness",
                query: { page: 1 },
              }}
            >
              Жийм
            </Link>
            <Link href={`/news`} className="hover:text-main">
              Мэдээ, мэдээлэл
            </Link>
          </nav>
        </div>
        <div className="w-1/10 sm:w-[15%] lg:w-1/10">
          {currentUser ? (
            <div className="flex items-center gap-10">
              <div className="flex items-center gap-2">
                {currentUser.image && (
                  <Image
                    src={currentUser.image}
                    alt={""}
                    width={30}
                    height={30}
                    className="rounded-[100%]"
                  />
                )}
                <div className="lg:hidden">
                  <Dropdown label="" id="headerDropdown">
                    <Dropdown.Header>
                      <span className="block text-sm">
                        {currentUser.username}
                      </span>
                      <span className="block truncate text-sm font-medium">
                        {currentUser.email}
                      </span>
                    </Dropdown.Header>
                    <Dropdown.Item>
                      <Link href={`/profile`}>Миний хуудас</Link>
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item
                      onClick={() => {
                        console.log("logout");
                        Cookies.remove("token");
                        setCurrentUser(null);
                      }}
                    >
                      Log Out
                    </Dropdown.Item>
                  </Dropdown>
                </div>

                <Link href={"/profile"}>
                  <p className="hidden lg:block text-md cursor-pointer">
                    {currentUser.username}
                  </p>
                </Link>
              </div>
              <div
                className="hidden lg:block cursor-pointer text-main text-md"
                onClick={() => {
                  Cookies.remove("token");
                  setCurrentUser(null);
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
