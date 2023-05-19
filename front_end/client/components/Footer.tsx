import Link from "next/link";
import React from "react";
import { BsFacebook, BsInstagram, BsVoicemail } from "react-icons/bs";
import MainResLogo from "./subcomp/MainResLogo";

export default function Footer(): JSX.Element {
  return (
    <footer className="h-[320px] bg-black">
      <div className="w-[70%] mx-auto py-5 h-full flex flex-col justify-between">
        <div className="lg:flex">
          <div className="w-1/3 py-5">
            <div>
              <MainResLogo />
            </div>
            <h3 className="text-2xl pt-3">Pinecone Academy 2023</h3>
          </div>
          <div className="w-1/3 flex justify-between">
            <div className="text-center">
              <picture>
                <img
                  src="https://tecdn.b-cdn.net/img/new/avatars/2.webp"
                  className="mx-auto mb-4 w-20 rounded-lg"
                  alt="Avatar"
                />
              </picture>
              <h5 className="mb-2 text-xl font-medium leading-tight">
                Batsukh
              </h5>
              <p className="text-neutral-500 dark:text-neutral-400">
                Web developer
              </p>
              <div className="pt-3 flex justify-between text-2xl">
                <Link href={`https://www.facebook.com/Batsukh.Da`}>
                  <BsFacebook />
                </Link>
                <BsInstagram />
                <BsVoicemail />
              </div>
            </div>
            <div className="text-center">
              <picture>
                <img
                  src="https://scontent.fuln1-2.fna.fbcdn.net/v/t1.6435-9/199297921_3046186728987127_4012760665836434381_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=174925&_nc_ohc=o2vUexD0ThQAX9Ww_XA&_nc_ht=scontent.fuln1-2.fna&oh=00_AfAYLPhckkyStmbr1FRwBBz_cb51glGbt36dWhjeOCTwcw&oe=648E871A"
                  className="mx-auto mb-4 w-20 rounded-lg"
                  alt="Avatar"
                />
              </picture>
              <h5 className="mb-2 text-xl font-medium leading-tight">Murun</h5>
              <p className="text-neutral-500 dark:text-neutral-400">
                Web developer
              </p>
              <div className="pt-3 flex justify-between text-2xl">
                <Link href={`https://www.facebook.com/nuuz.az`}>
                  <BsFacebook />
                </Link>
                <BsInstagram />
                <BsVoicemail />
              </div>
            </div>
            <div className="text-center">
              <picture>
                <img
                  src="https://tecdn.b-cdn.net/img/new/avatars/2.webp"
                  className="mx-auto mb-4 w-20 rounded-lg"
                  alt="Avatar"
                />
              </picture>
              <h5 className="mb-2 text-xl font-medium leading-tight">Jamie</h5>
              <p className="text-neutral-500 dark:text-neutral-400">
                Web developer
              </p>
              <div className="pt-3 flex justify-between text-2xl">
                <Link href={`https://www.facebook.com/ochirjamia`}>
                  <BsFacebook />
                </Link>
                <BsInstagram />
                <BsVoicemail />
              </div>
            </div>
          </div>
          <div className="mx-auto">
            <Link href={`/signUpGym`}>
              <div className="w-[250px] flex justify-center items-center bg-main border h-[40px] text-black border-none rounded-lg">
                Gym-ээ бүртгүүлэх
              </div>
            </Link>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="w-1/2">
            © 2023 by Jimdii. Powered and secured by Pinecone Aqua Team
          </div>
          <div className="w-1/2 flex gap-[40px]">
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
