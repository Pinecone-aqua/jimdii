import Service from "@/components/Homepage/Service";
import { FitnessType } from "@/util/types";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";

import HomeBanner from "@/components/Homepage/HomeBanner";
import SpecialGym from "@/components/Homepage/SpecialGym";
import Partners from "@/components/Homepage/Partners";
import ShowReload from "@/components/common/Reload";
import Footer from "@/components/Footer";

interface PropsType {
  fitness: FitnessType[];
  status: number;
}
export default function Home(props: PropsType) {
  const { fitness, status } = props;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [scrollY, setScrollY] = useState(0);

  const onScroll = useCallback(() => {
    setScrollY(window.pageYOffset);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  return status >= 300 ? (
    <div className="min-h-screen bg-black text-2xl text-white flex justify-center items-center">
      <ShowReload />
    </div>
  ) : (
    <main className="text-white">
      <HomeBanner />
      <section className="h-[80px] flex items-center text-center bg-main w-full text-sm md:h-[120px] lg:h-[160px]   sm:text-2xl  lg:text-4xl bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#90FFFF] via-main to-main">
        <p className="container mx-auto w-3/4 text-white ">
          &quot;Эхлэх хамгийн зөв цаг нь өчигдөр байсан. Харин дараагийн хамгийн
          зөв цаг нь өнөөдөр юм. &quot;
        </p>
      </section>
      <SpecialGym fitness={fitness} />
      <div id="service">
        <Service />
      </div>
      {/* <section className="bg-black flex flex-col items-center py-10">
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
      </section> */}
      <Partners />
      <Footer />
    </main>
  );
}

export async function getStaticProps() {
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}fitness/limitedFitness:limit`,
    );
    const fitness = await res.data;
    return {
      props: {
        fitness,
        status: res.status,
      },
    };
  } catch (err) {
    return {
      props: {
        status: 400,
      },
    };
  }
}
