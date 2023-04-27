/* eslint-disable react/no-unescaped-entities */
// import Banner from "@/components/Banner";

// import Image from "next/image";

import Card from "@/components/Card";

export default function Home() {
  const examples = [1, 2, 3, 4];
  // const photo = "./titanic.jpeg";

  return (
    <main className="text-white">
      <section className="h-[80px] md:h-[120px] lg:h-[160px] flex items-center text-center bg-main w-full text-sm  sm:text-2xl  lg:text-4xl">
        <p className="container mx-auto w-3/4 text-white">
          "Эхлэх хамгийн зөв цаг нь өчигдөр байсан. Харин дараагийн хамгийн зөв
          цаг нь өнөөдөр юм."
        </p>
      </section>
      <section className="bg-black flex flex-col items-center py-10">
        <h2 className="text-3xl text-white">Онцлох жиймүүд</h2>
        <p className="text-white">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime
          necessitatibus dolore ad doloribus recusandae fugit quis, itaque harum
          nihil dolorum.
        </p>

        <div className="flex gap-5 justify-center py-10">
          {examples.map((example, index) => (
            <Card key={index} photo={"./musashi.webp"} />
          ))}
        </div>
        <button className="bg-main">Бүх жийм үзэх</button>
      </section>
      <section className="bg-gray-500 flex flex-col items-center py-10">
        <h2 className="text-3xl text-white">Таны сонирхож буй үйлчилгээ</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
          neque, fugiat similique velit reprehenderit explicabo eaque non nulla
          deserunt dolor.
        </p>
        <div className="h-[600px] flex items-center gap-60">
          <div className="relative">
            <span className="text-main text-9xl font-bold">1</span>
            <p className="absolute top-12 left-[-30px] whitespace-nowrap">
              Жиймны мэдээлэл
            </p>
          </div>
          <div className="relative">
            <span className="text-main text-9xl font-bold">2</span>
            <p className="absolute top-12 left-[-45px] whitespace-nowrap">
              Хувийн дасгалжуулагч
            </p>
          </div>
          <div className="relative">
            <span className="text-main text-9xl font-bold">3</span>
            <p className="absolute top-12 left-0 text-center">Гишүүнчлэл</p>
          </div>
        </div>
        <button className="bg-main text-black ">Дэлгэрэнгүй</button>
      </section>
      <section className="bg-black flex flex-col items-center py-10">
        <h2 className="text-3xl text-white">Мэдээ мэдээлэл</h2>
        <p className="text-white">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime
          necessitatibus dolore ad doloribus recusandae fugit quis, itaque harum
          nihil dolorum.
        </p>

        <div className="flex gap-5 justify-center py-10">
          {examples.map((example, index) => (
            <Card key={index} photo={"./titanic.jpeg"} />
          ))}
        </div>
        <button className="bg-main">Бүх жийм үзэх</button>
      </section>
      <div>
        <p>Success stories</p>
      </div>
      <div>
        <p>Holiday Sale</p>
      </div>
      <div>
        <p>Partner</p>
      </div>
      <div>
        <p>Download App</p>
      </div>
      {/* <Card /> */}
    </main>
  );
}
