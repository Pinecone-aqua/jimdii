import Link from "next/link";
import React from "react";
import { BsFacebook, BsInstagram, BsVoicemail } from "react-icons/bs";
import MainResLogo from "./subcomp/MainResLogo";

export default function Footer(): JSX.Element {
  return (
    <footer className="h-fit bg-black">
      <div className="w-[70%] mx-auto py-5 h-full flex flex-col justify-between">
        <div className="md:flex flex-wrap justify-start">
          <div className="w-full md:w-1/3 py-5">
            <div>
              <MainResLogo />
            </div>
            <h3 className="text-2xl pt-3">Pinecone Academy 2023</h3>
          </div>
          <div className="w-2/3 lg:w-[550px] flex justify-between gap-[30px] lg:gap-5">
            <div className="text-center ">
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
                Full Stack developer
              </p>
              <div className="pt-3 flex justify-between text-sm md:text-2xl">
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
                Full Stack developer
              </p>
              <div className="pt-3 flex justify-between text-sm md:text-2xl">
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
                  src="https://cdn.discordapp.com/attachments/1087955956832407612/1111125788364902400/IMG_2609.jpg"
                  className="mx-auto mb-4 w-20 rounded-lg"
                  alt="Avatar"
                />
              </picture>
              <h5 className="mb-2 text-xl font-medium leading-tight">Jamie</h5>
              <p className="text-neutral-500 dark:text-neutral-400">
                Full Stack developer
              </p>
              <div className="pt-3 flex justify-between text-sm md:text-2xl">
                <Link href={`https://www.facebook.com/ochirjamia`}>
                  <BsFacebook />
                </Link>
                <BsInstagram />
                <BsVoicemail />
              </div>
            </div>
          </div>
          <div className="mx-auto lg:mx-0 inline lg:flex justify-center">
            <Link href={`/signUpGym`}>
              <div className="w-[250px] flex justify-center items-center bg-main border h-[40px] text-black border-none rounded-lg mt-4">
                Gym-ээ бүртгүүлэх
              </div>
            </Link>
          </div>
        </div>
        <div className="md:flex justify-between mt-5">
          <div className="mb-3 md:w-1/2 text-sm lg:text-xl">
            © Copyright by Jimdii 2023. Powered and secured by Pinecone Aqua
            Team
          </div>
          <div className="md:w-1/2 flex justify-center gap-[20px] md:gap-[30px] text-sm md:text-sm">
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
