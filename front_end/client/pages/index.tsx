/* eslint-disable react/no-unescaped-entities */
// import Banner from "@/components/Banner";

// import Image from "next/image";

// import Banner from "@/components/Banner";
import Card from "@/components/Card";
// import Footer from "@/components/Footer";
import Logo from "@/components/subcomp/Logo";
import Service from "@/components/subcomp/Service";
import { FitnessType } from "@/util/types";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import SmoothScrollLink from "@/components/subcomp/SmoothScrollLink";
// import { useParallax } from "react-scroll-parallax";
// import "../styles/index.css";

// import {
//   motion,
//   useScroll,
//   useSpring,
//   useTransform,
//   MotionValue,
// } from "framer-motion";

interface PropsType {
  fitness: FitnessType[];
}
export default function Home(props: PropsType) {
  const { fitness } = props;
  const [scrollY, setScrollY] = useState(0);

  // const { ref } = useParallax({ speed: 100 });

  // function useParallax(value: MotionValue<number>, distance: number) {
  //   return useTransform(value, [0, 1], [-distance, distance]);
  // }

  // const ref = useRef(null);
  // const { scrollYProgress } = useScroll({ target: ref });
  // const y = useParallax(scrollYProgress, 300);

  const onScroll = useCallback(() => {
    const { pageYOffset, scrollY } = window;
    console.log("pageYoffset", pageYOffset, "scrollY", scrollY);
    setScrollY(window.pageYOffset);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", onScroll, { passive: true });
    // remove event on unmount to prevent a memory leak with the cleanup
    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  return (
    <main className="text-white">
      <div className="relative z-30 py-20 px-16 lg:py-40 lg:pl-60">
        <div className="w-[200px] h-[50px] ">
          <Logo />
        </div>

        <p className="text-sm lg:text-3xl">
          Монголын анхны цахим фитнесс захиалга
        </p>
        <div className="h-[80px] py-5 lg:py-20 flex items-center gap-5">
          <SmoothScrollLink to="service">
            <button className="secondaryButton">Үйлчилгээний тухай</button>
          </SmoothScrollLink>
          <Link href={`/allFitness/1`}>
            <button className="mainButton">Захиалах</button>
          </Link>
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
        <h2 className="text-lg lg:text-3xl text-white">Онцлох жиймүүд</h2>

        <div className="flex gap-5 justify-center py-10">
          {fitness.map((fitness: FitnessType, index: number) => (
            <Card fitness={fitness} key={index} />
          ))}
        </div>
        <Link href={`/allFitness/1`}>
          <button className="mainButton">Бүх жийм үзэх</button>
        </Link>
      </section>
      <div id="service">
        <Service />
      </div>
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
