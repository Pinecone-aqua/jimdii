import { Dropdown } from "flowbite-react";
import Link from "next/link";
import React from "react";
import LoginLogo from "./subcomp/LoginLogo";
import Logo from "./subcomp/Logo";

export default function Header(): JSX.Element {
  return (
    <header className="h-[140px] flex items-center bg-slate-700">
      <div className="w-[100%] m-auto flex justify-between items-center">
        <Link href={`/`}>
          <Logo />
        </Link>
        <nav className=" flex justify-between text-white font-light invisible md:visible ">
          <Link href={`/`} className="hover:text-[#4D9799]">
            Нүүр хуудас
          </Link>
          <Link href={`/gymOrder`} className="hover:text-[#4D9799] ">
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
          <div className="flex justify-between gap-[14px] text-[#4D9799]">
            <LoginLogo />
            <p>Log In</p>
          </div>
        </Link>

        <Dropdown
          label="DD svg"
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
            <Link href={`/gymOrder`} className="hover:text-[#4D9799]">
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
        {/* Dropdown */}
      </div>
    </header>
  );
}
