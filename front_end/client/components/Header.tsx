import Link from "next/link";
import React from "react";
import LoginLogo from "./subcomp/LoginLogo";
import Logo from "./subcomp/Logo";

export default function Header(): JSX.Element {
  return (
    <header className="h-[140px] flex items-center bg-slate-700">
      <div className="w-[100%] max-w-[1650px] m-auto flex justify-between items-center">
        <Link href={`/`}>
          <Logo />
        </Link>
        <nav className="w-[750px] flex justify-between text-white font-light">
          <Link href={`/`} className="hover:text-[#4D9799]">
            Нүүр хуудас
          </Link>
          <Link href={`/gymOrder`} className="hover:text-[#4D9799]">
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
        <Link href={`/Login`}>
          <div className="flex justify-between gap-[14px] text-[#4D9799]">
            <LoginLogo />
            <p>Log In</p>
          </div>
        </Link>
      </div>
    </header>
  );
}
