import AllCard from "@/components/AllCard";
import Pagination from "@/components/Pagination";
import { AllFitnessProp, FitnessType } from "@/util/types";
import axios from "axios";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import { useRouter } from "next/router";

export default function AllFitness({
  data: fitnesses,
}: {
  data: FitnessType[];
}) {
  const router = useRouter();

  async function testHandler(e: { target: { value: string } }) {
    console.log("1", router);

    router.push({
      pathname: `/allFitness/${router.query.page}`,
      query: { category: e.target.value },
    });
    console.log(router);
    const res = await axios.get("http://localhost:7003/fitness/pages");
    const paths = await res.data.map((page: string) => ({
      params: { page },
    }));
    const category = [
      {
        params: {
          category: "Bayangol",
        },
      },
      { params: { category: "Sukhbaatar" } },
      { params: { category: "Khan-uul" } },
      { params: { category: "Songino-Khairkhan" } },
      { params: { category: "Bayanzurkh" } },
      { params: { category: "Chingeltei" } },
      { params: { category: "Baganuur" } },
    ];
    console.log([...paths, ...category]);
  }

  return (
    <div className="min-h-screen allFitness">
      <div className="container mx-auto h-[40vh] sm:h-[40vh]">
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
      </div>
      <div className="w-[70%] sm:w-[60%] md:w-[55%] mx-auto bg-black  ">
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
  const category = [
    {
      params: {
        category: "Bayangol",
      },
    },
    { params: { category: "Sukhbaatar" } },
    { params: { category: "Khan-uul" } },
    { params: { category: "Songino-Khairkhan" } },
    { params: { category: "Bayanzurkh" } },
    { params: { category: "Chingeltei" } },
    { params: { category: "Baganuur" } },
  ];
  const paths = [...pages, ...category];
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
