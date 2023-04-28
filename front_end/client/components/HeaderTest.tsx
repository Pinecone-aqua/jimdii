import React from "react";
import Link from "next/link";
import Logo from "./subcomp/Logo";
import LoginLogo from "./subcomp/LoginLogo";
import { Dropdown } from "flowbite-react";

export default function HeaderTest(): JSX.Element {
  return (
    <header className="bg-slate-700 h-[8vh] flex items-center">
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
            <Link href={`/aboutUs`} className="hover:text-[#4D9799]">
              Бидний тухай
            </Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Link href={`/contact`} className="hover:text-[#4D9799]">
              Холбоо барих
            </Link>
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
        <Link href={`/`}>
          <Logo />
        </Link>
        <nav className="hidden lg:flex  w-[70%] justify-between   text-white">
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
          <Link href={`/aboutUs`} className="hover:text-[#4D9799]">
            Бидний тухай
          </Link>
          <Link href={`/contact`} className="hover:text-[#4D9799]">
            Холбоо барих
          </Link>
        </nav>
        <Link href={`/login`}>
          <div className="flex justify-end gap-[5px] text-[#4D9799] w-[80px] md:w-[90px] m-0">
            <LoginLogo />
            <p className="text-sm">Log In</p>
          </div>
        </Link>
      </div>
    </header>
  );
}
