/* eslint-disable react/no-unescaped-entities */
// import Banner from "@/components/Banner";

// import Image from "next/image";

// import Banner from "@/components/Banner";
import Card from "@/components/Card";
import Footer from "@/components/Footer";
import Logo from "@/components/subcomp/Logo";
import Service from "@/components/subcomp/Service";
import { FitnessType } from "@/util/types";
import axios from "axios";
import Link from "next/link";
// import "../styles/index.css";

interface PropsType {
  fitness: FitnessType[];
}
export default function Home(props: PropsType) {
  const { fitness } = props;
  const { fitness } = props;

  return (
    <main className="text-white">
      <div className="relative z-30 py-40 pl-60">
        <Logo />
        <p className="text-3xl">Монголын анхны цахим фитнесс захиалга</p>
        <div className="py-20 flex gap-5">
          <button className="secondaryButton">Үйлчилгээний тухай</button>
          <button className="mainButton">Захиалах</button>
        </div>
      </div>
  return (
    <main className="text-white">
      <div className="relative z-30 py-40 pl-60">
        <Logo />
        <p className="text-3xl">Монголын анхны цахим фитнесс захиалга</p>
        <div className="py-20 flex gap-5">
          <button className="secondaryButton">Үйлчилгээний тухай</button>
          <button className="mainButton">Захиалах</button>
        </div>
      </div>

      <div className="relative">
        <div id="pattern">
          <video
            autoPlay
            loop
            muted
            playsInline
            // id="pattern"
            className="rope"
          >
            <source src="./rope.mp4" type="video/mp4" />
          </video>
        </div>
      </div>

      <section className="h-[80px] md:h-[120px] lg:h-[160px] flex items-center text-center bg-main w-full text-sm  sm:text-2xl  lg:text-4xl bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#90FFFF] via-main to-main">
        <p className="container mx-auto w-3/4 text-white ">
          "Эхлэх хамгийн зөв цаг нь өчигдөр байсан. Харин дараагийн хамгийн зөв
          цаг нь өнөөдөр юм."
        </p>
      </section>
      <section className="bg-black flex flex-col items-center py-10">
        <h2 className="text-3xl text-white">Онцлох жиймүүд</h2>

        <div className="flex gap-5 justify-center py-10">
          {fitness.map((fitness: FitnessType, index: number) => (
            <Card fitness={fitness} key={index} />
          ))}
        </div>
        <button className="mainButton">Бүх жийм үзэх</button>
      </section>
      <Service />
      <section className="bg-black flex flex-col items-center py-10">
        <h2 className="text-3xl text-white">Мэдээ мэдээлэл</h2>
        <p className="text-white">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime
          necessitatibus dolore ad doloribus recusandae fugit quis, itaque harum
          nihil dolorum.
        </p>

        <div className="flex gap-5 justify-center py-10">
          {fitness.map((fitness: FitnessType, index: number) => (
            <Card fitness={fitness} key={index} />
          ))}
        </div>
        <button className="mainButton">Бүх мэдээ үзэх</button>
      </section>
      <section className="text-black flex h-[500px]">
        <div className="w-1/2">
          <picture>
            <img
              src="./trainer.png"
              alt=""
              className="object-cover h-full w-full"
            />
          </picture>
        </div>
        <div className="bg-main w-1/2 text-center flex flex-col items-center justify-center">
          <h2 className="text-5xl font-bold">Success Stories</h2>
          <div className="mt-10">
            <p>"In just 6 months of training with Michael I lost 38 pounds"</p>
            <p>JACK</p>
            <p>January 10, 2035</p>
          </div>
          <div className="mt-10">
            <p>"In just 6 months of training with Michael I lost 38 pounds"</p>
            <p>JACK</p>
            <p>January 10, 2035</p>
          </div>
          <div className="mt-10">
            <p>"In just 6 months of training with Michael I lost 38 pounds"</p>
            <p>JACK</p>
            <p>January 10, 2035</p>
          </div>
        </div>
      </section>
      <section className="text-black flex h-[400px]">
        <div className="w-1/3">
          <picture>
            <img
              src="./sale.png"
              alt=""
              className="cover h-full w-full object-cover"
            />
          </picture>
        </div>
        <div className="w-2/3 bg-black text-white pl-60 py-20">
          <h2>Holiday Sale</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            aliquam est tempore expedita! Commodi, neque debitis. Veritatis
            magnam consequatur nostrum.
          </p>
          <button className="mainButton">Shop Now</button>
        </div>
      </section>
      <section className="bg-white text-black flex justify-center items-center py-40 gap-10">
        <div className="border-r-2 border-black h-[100px]">
          <p className="text-6xl font-bold px-10">Partners</p>
        </div>
        <div className="flex gap-3">
          <div className="bg-main h-[120px] w-[120px] flex justify-center items-center">
            <p className="text-lg font-bold">Naadam</p>
          </div>
          <div className="bg-main h-[120px] w-[120px] flex justify-center items-center">
            <p className="text-lg font-bold">Gold's Gym</p>
          </div>
          <div className="bg-main h-[120px] w-[120px] flex justify-center items-center">
            <p className="text-lg font-bold">Olympus</p>
          </div>
          <div className="bg-main h-[120px] w-[120px] flex justify-center items-center">
            <p className="text-lg font-bold">Uran Gan</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export async function getStaticProps() {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}fitness/limitedFitness:limit`
  );
  const fitness = await res.data;
  return {
    props: {
      fitness,
    },
  };
}
