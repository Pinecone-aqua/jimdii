import Link from "next/link";

export default function Service(): JSX.Element {
  return (
    <>
      <div className="service relative px-10 ">
        <section className="flex flex-col items-center py-32 sm:px-20">
          <h2 className="text-xl sm:text-2xl mb-5 lg:text-3xl text-white">
            Таны сонирхож буй үйлчилгээ
          </h2>
          <p className="text-sm sm:text-base text-center lg:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            neque, fugiat similique velit reprehenderit explicabo eaque non
            nulla deserunt dolor.
          </p>
          <div className="h-[300px] py-10 flex flex-col justify-evenly lg:h-[600px]  lg:flex lg:flex-row lg:items-center lg:justify-normal lg:gap-60">
            <Link href={`allFitness`}>
              <div className="relative">
                <span className="text-main text-6xl lg:text-9xl font-bold">
                  1
                </span>

                <p className="absolute top-4 left-[-50px] lg:top-12 lg:left-[-30px] whitespace-nowrap">
                  Жиймны мэдээлэл
                </p>
              </div>
            </Link>
            <Link href={`personalTrainer`}>
              <div className="relative">
                <span className="text-main text-6xl lg:text-9xl font-bold">
                  2
                </span>
                <p className="absolute top-5 left-[-50px] lg:top-12 lg:left-[-45px] whitespace-nowrap">
                  Мэдээ, сонин хачин
                </p>
              </div>
            </Link>
          </div>
          <button className="mainButton">Дэлгэрэнгүй</button>
        </section>
      </div>
      {scrollY > 800 && (
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
              <source src="./running.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      )}
    </>
  );
}
