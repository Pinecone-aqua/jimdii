/* eslint-disable react/no-unescaped-entities */
// import Banner from "@/components/Banner";

// import Image from "next/image";

import Card from "@/components/Card";

export default function Home() {
  const examples = [1, 2, 3, 4];
  return (
    <main>
      <div className="text-center bg-main w-full text-sm sm:bg-tomato sm:text-2xl lg:bg-main lg:text-xl">
        <p className="container mx-auto">
          "Эхлэх хамгийн зөв цаг нь өчигдөр байсан. Харин дараагийн хамгийн зөв
          цаг нь өнөөдөр юм."
        </p>
      </div>
      <div className="bg-black">
        <h2 className="text-center text-3xl text-white">Ontsloh Gymuud</h2>
        <div className="flex gap-5 justify-center flex-wrap py-10">
          {examples.map((example, index) => (
            <Card key={index} />
          ))}
        </div>
      </div>
      <div>
        <p>Tanii sonirhoj bui uilchilgee</p>
      </div>
      <div>
        <p>Medee, Medeelel</p>
      </div>
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
