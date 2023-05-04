/* eslint-disable @typescript-eslint/no-explicit-any */

import React from "react";
import Link from "next/link";
import LoginLogo from "./subcomp/LoginLogo";
import { Dropdown } from "flowbite-react";
import MainResLogo from "./subcomp/MainResLogo";
import axios from "axios";
import { useRouter } from "next/router";
import { FaGoogle } from "react-icons/fa";
import Cookies from "js-cookie";

interface HeaderType {
  user: any;
  setUser: (arg: any) => void;
}

export default function HeaderTest({ user, setUser }: HeaderType): JSX.Element {
  const router = useRouter();
  // user && console.log(user);

  // function loginHandler(e: any) {
  //   e.preventDefault();
  //   console.log(e.target.userName.value);
  //   console.log(e.target.password.value);
  // }
  function googleLoginHandler() {
    axios.get("http://localhost:7003/google-login").then((res) => {
      router.push(res.data);
    });
  }
  return (
    <header className="bg-none sticky top-0 z-20 h-[10vh] flex items-center">
      <div className="container mx-auto  flex items-center justify-between">
        <Dropdown
          label="//"
          className="bg-transparent text-black"
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
              Gym захиалах
            </Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Link href={`/map`} className="hover:text-[#4D9799]">
              Газрын зураг
            </Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Link href={`/membership`} className="hover:text-[#4D9799]">
              Гишүүнчлэл
            </Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Link href={`/signUpGym`} className="hover:text-[#4D9799]">
              Gym-ээ бүртгүүлэх
            </Link>
          </Dropdown.Item>

          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
        <Link href={`/`}>
          <MainResLogo />
        </Link>
        <nav className="hidden lg:flex  w-1/2 justify-between   text-white">
          <div className="w-[70%] flex gap-[30px]">
            <Link href={`/`} className="hover:text-[#4D9799]">
              Нүүр хуудас
            </Link>
            <Link href={`/allFitness`} className="hover:text-[#4D9799]">
              Gym захиалах
            </Link>
            <Link href={`/map`} className="hover:text-[#4D9799]">
              Газрын зураг
            </Link>
            <Link href={`/membership`} className="hover:text-[#4D9799]">
              Гишүүнчлэл
            </Link>
          </div>
        </nav>
        <div className="w-1/4 flex justify-between items-center">
          {/* <Link href={`/login`} className="flex items-center">
            <div className="flex justify-end gap-[5px] text-[#4D9799] w-[80px] md:w-[90px] m-0">
              <LoginLogo />
              <p className="text-sm">Log In</p>
            </div>
          </Link> */}
          {user ? (
            <div className="flex items-center w-1/2 justify-between">
              <Link
                href={`/#`}
                className="flex w-1/2 items-center justify-between"
              >
                <div className="flex justify-end gap-[5px] text-[#4D9799] w-[80px] md:w-[90px] m-0">
                  <picture>
                    <img className="w-[100px]" src={user.image} alt="" />
                  </picture>
                  <p className="text-sm">Hi {user.name}</p>
                </div>
              </Link>
              <div>
                <div
                  className="cursor-pointer text-main"
                  onClick={() => {
                    Cookies.remove("token");
                    setUser("");
                  }}
                >
                  logout
                </div>
              </div>
            </div>
          ) : (
            <div className="flex gap-5">
              <Link href={`/signUp`} className="flex items-center">
                <div className="flex justify-end gap-[5px] text-[#4D9799] w-[80px] md:w-[90px] m-0">
                  <LoginLogo />
                  <p className="text-sm">Log In</p>
                </div>
              </Link>
            </div>
          )}

          <Link href={`/signUpGym`} className="hidden lg:flex">
            <button className="bg-[#4D9799] h-[40px] w-[155px]">
              Gym-ээ бүртгүүлэх
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
}
