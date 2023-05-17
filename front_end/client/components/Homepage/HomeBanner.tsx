import Link from "next/link";
import Logo from "../subcomp/Logo";
import SmoothScrollLink from "../subcomp/SmoothScrollLink";

export default function HomeBanner() {
  return (
    <>
      <div className="homebanner relative z-30 py-20 px-16 sm:py-30 sm:px-28 lg:py-48 lg:px-60">
        <div className="w-[200px] h-[50px] sm:w-[300px] sm:h-[80px] lg:w-[400px] lg:h-[100px]">
          <Logo />
        </div>

        <p className="text-sm lg:text-3xl">
          Монголын анхны цахим фитнесс захиалга
        </p>
        <div className="h-[80px] py-5 sm:py-0 sm:my-5 lg:py-20 flex items-center gap-5">
          <SmoothScrollLink to="service">
            <button className="secondaryButton">Үйлчилгээний тухай</button>
          </SmoothScrollLink>
          <Link href={`/allFitness/1`}>
            <button className="mainButton">Захиалах</button>
          </Link>
        </div>
      </div>
      {scrollY < 800 && (
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
      )}
    </>
  );
}
