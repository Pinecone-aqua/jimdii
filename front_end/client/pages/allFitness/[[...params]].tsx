import AllCard from "@/components/AllCard";
import Category from "@/components/CategoryFilter";
import Pagination from "@/components/Pagination";
import Search from "@/components/Search";
import { FitnessType } from "@/util/types";
import axios from "axios";
import { useRouter } from "next/router";

export default function AllFitness({
  data: fitnesses,
  status: status,
}: {
  data: FitnessType[];
  status: number;
}) {
  const router = useRouter();

  console.log("qeury", router.query);

  return status >= 300 ? (
    <div className="min-h-screen bg-black text-2xl text-white flex justify-center items-center">
      Something went wrond
    </div>
  ) : (
    <div className="min-h-screen allFitness bg-black">
      <div className="container mx-auto p-5">
        <div className="text-white">
          <h2 className="text-center text-[30px] sm:text-[38px] pt-[50px]">
            Gym
          </h2>
          <h2 className="text-center text-[22px] sm:text-[28px] md:text-[36px] pt-[15px]">
            Our Recommendations
          </h2>
          <p className=" pt-[15px] pb-[30px] w-[100%] md:w-[70%] text-center flex justify-center m-auto">
            A modern day gymnasium (as gym used to be called way back in Ancient
            Greece) is a place for indoor physical workout where various
            equipment and machines are typically used.
          </p>
        </div>
        <div className="flex p-4">
          <Category pathname={"/allFitness"} />
          <Search pathname={"/allFitness"} />
        </div>
        <div className="bg-black m-2 flex flex-col items-center justify-center">
          {fitnesses.map((fitness: FitnessType, index: number) => (
            <AllCard fitness={fitness} key={index} />
          ))}
        </div>
        <Pagination pathname={"/allFitness"} />
      </div>
    </div>
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function getServerSideProps(context: { query: any }) {
  try {
    const { query } = context;
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}fitness/getAllFitness?page=${
        query?.page
      }&category=${query.category ? query.category : ""}`
    );
    if (res.status == 200) {
      return {
        props: {
          data: res.data,
          status: res.status,
        },
      };
    }
    return {
      props: {
        status: res.status,
      },
    };
  } catch (err) {
    return {
      props: {
        status: 500,
      },
    };
  }
}
