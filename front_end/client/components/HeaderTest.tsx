import React from "react";
import Link from "next/link";
import Logo from "./subcomp/Logo";
import LoginLogo from "./subcomp/LoginLogo";
import { Dropdown } from "flowbite-react";

export default function HeaderTest(): JSX.Element {
  return (
    <header className="bg-none sticky top-0 z-20 h-[8vh] flex items-center">
      <div className="w-[80%] mx-auto  flex items-center justify-between">
        <Dropdown
          label="//"
          className="bg-slate-200 text-black"
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
          <Logo />
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
        <div className="flex gap-[20px]">
          <Link href={`/login`} className="flex items-center">
            <div className="flex justify-end gap-[5px] text-[#4D9799] w-[80px] md:w-[90px] m-0">
              <LoginLogo />
              <p className="text-sm">Log In</p>
            </div>
          </Link>
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
