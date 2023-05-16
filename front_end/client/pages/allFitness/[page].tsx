import AllCard from "@/components/AllCard";
import Pagination from "@/components/Pagination";
import { AllFitnessProp, FitnessType } from "@/util/types";
import axios from "axios";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import { useRouter } from "next/router";

export default function AllFitness({
  data: fitnesses,
  data: fitnesses,
}: {
  data: FitnessType[];
}): JSX.Element {
  return (
    <div className="min-h-screen allFitness">
      <div className="container mx-auto h-[50vh] sm:h-[40vh]">
        <div className="text-white">
          <h2 className="text-center text-[30px] sm:text-[38px] pt-[50px]">
            Gym
          </h2>
          <h2 className="text-center text-[22px] sm:text-[28px] md:text-[36px] pt-[15px]">
            Our Recommendations
          </h2>
          <p className=" pt-[15px] pb-[30px] w-[100%] md:w-[70%] text-center flex justify-center m-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
            iste natus qui dolore ipsum cum expedita dolor veritatis sequi
            officiis.
          </p>
        </div>
        <div className="sm:flex lg:w-[70%] m-auto ">
          <div className="border w-[100%] sm:w-[50%] h-[42px] flex">
            <label
              htmlFor="districts"
              className="text-white border flex items-center"
            >
              Icon
            </label>
            <select
              name="districts"
              id="districts"
              className="h-full w-[100%] bg-transparent text-white"
            >
              <option value="Бүх дүүрэг/сум..." className="w-[50%]">
                Бүх дүүрэг/сум...
              </option>
              <option value="Bayangol" className="text-black">
                Bayangol
              </option>
              <option value="Khan-uul" className="text-black">
                Khan-uul
              </option>
              <option value="Bayanzurkh" className="text-black">
                Bayanzurkh
              </option>
              <option value="Sukhbaatar" className="text-black">
                Sukhbaatar
              </option>
              <option value="Songino-Khairkhan" className="text-black">
                Songino-Khairkhan
              </option>
              <option value="Chingeltei" className="text-black">
                Chingeltei
              </option>
            </select>
          </div>
          <div className="border w-[100%] sm:w-[50%] h-[42px]">
            <div className="mb-3">
              <div className="relative mb-4 flex w-full flex-wrap items-stretch">
                <input
                  type="search"
                  className="relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="button-addon1"
                />

                {/* Search button */}
                <button
                  className="relative z-[2] flex items-center  bg-main px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white  transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:outline-none focus:ring-0 active:bg-primary-800 "
                  type="button"
                  id="button-addon1"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[70%] sm:w-[60%] md:w-[55%] mx-auto lg:bg-black  ">
        {fitnesses.map((fitness: FitnessType, index: number) => (
          <AllCard fitness={fitness} key={index} />
        ))}
      </div>
      <Pagination />
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async ({}) => {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}fitness/pages`
  );
  const paths = await res.data.map((page: string) => ({
    params: { page: page },
  }));
  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps<AllFitnessProp> = async ({
  params,
}: GetStaticPropsContext) => {
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}fitness/getAllfitness${params?.page}`
    );
    const fitnesses = await res.data;
    return {
      props: {
        data: fitnesses,
      },
    };
  } catch (err) {
    return { props: { data: null } };
  }
};
