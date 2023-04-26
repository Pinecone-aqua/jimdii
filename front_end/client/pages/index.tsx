/* eslint-disable react/no-unescaped-entities */
// import Banner from "@/components/Banner";

// import Image from "next/image";

import Card from "@/components/Card";

export default function Home() {
  const examples = [1, 2, 3, 4];
  return (
    <main>
      <div className="h-[80px] md:h-[120px] lg:h-[160px] flex items-center text-center bg-main w-full text-sm  sm:text-2xl  lg:text-4xl">
        <p className="container mx-auto w-3/4">
          "Эхлэх хамгийн зөв цаг нь өчигдөр байсан. Харин дараагийн хамгийн зөв
          цаг нь өнөөдөр юм."
        </p>
      </div>
      <div className="bg-black">
        <h2 className="text-center text-3xl text-white">Ontsloh Gymuud</h2>

        <div className="flex gap-5 justify-center py-10">
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
