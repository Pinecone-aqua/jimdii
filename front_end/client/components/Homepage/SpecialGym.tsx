import { FitnessType } from "@/util/types";
import Link from "next/link";
import Card from "../Card";

// import Carousel from "react-multi-carousel";
import Slider from "react-slick";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
      }}
      onClick={onClick}
    />
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
      }}
      onClick={onClick}
    />
  );
}

export default function SpecialGym({ fitness }: { fitness: FitnessType[] }) {
  const settings = {
    dots: true,
    infinite: true,

    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    className: "specialCarousel mx-auto",
    dotsClass: "slick-dots slick-thumb",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 3000,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // const responsive = {
  //   desktop: {
  //     breakpoint: { max: 3000, min: 1024 },
  //     items: 4,
  //   },
  //   tablet: {
  //     breakpoint: { max: 1024, min: 768 },
  //     items: 2,
  //   },
  //   mobile: {
  //     breakpoint: { max: 640, min: 0 },
  //     items: 1,
  //   },
  // };

  return (
    <section className="w-full bg-black py-16">
      <div className="mx-auto">
        <h2 className="text-lg lg:text-3xl text-white text-center mb-16">
          Онцлох жиймүүд
        </h2>

        <div className="">
          <Slider {...settings}>
            {fitness.map((fitness: FitnessType, index: number) => (
              <Card fitness={fitness} key={index} />
            ))}
          </Slider>
        </div>
        <div className="flex justify-center mt-16">
          <Link href={{ pathname: "/allFitness", query: { page: 1 } }}>
            <button className="mainButton">Бүх жийм үзэх</button>
          </Link>
        </div>
      </div>
    </section>
  );
}

// flex gap-5 justify-center py-10

// bg-black flex flex-col items-center py-10
