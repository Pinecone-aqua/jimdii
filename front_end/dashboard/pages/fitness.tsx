import { FiSearch, FiPlus } from "react-icons/fi";
// import { fitnesses } from "../utils/fitness.dummy";
import FitnessCol from "@/components/FitnessCol";
import { useState } from "react";
import AddFitness from "@/components/AddFitness";
import axios from "axios";
import { FitnessType } from "@/utils/types";

export default function Fitness(props: { fitness: FitnessType[] }) {
  const { fitness } = props;
  const [fitnesses, setFitnesses] = useState(fitness);
  const [addFitness, setAddFitness] = useState(false);
  const [showLoadMore, setShowLoadMore] = useState(true);

  console.log(fitnesses);

  function loadMore() {
    try {
      if (fitnesses.length % 5 !== 0) return setShowLoadMore(false);

      axios
        .get(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}fitness/${fitnesses.length}`
        )
        .then(({ data }) =>
          data.message
            ? setShowLoadMore(false)
            : setFitnesses([...fitnesses, ...data])

        );
    } catch (err) {
      console.log(err);
    }
  }

  function deleteHandler(id: string) {
    console.log("asd", id);
    axios
      .delete(`${process.env.NEXT_PUBLIC_BACKEND_URL}fitness/delete${id}`)
      .then(() =>
        setFitnesses((fitnesses) =>
          fitnesses.filter((fitness) => fitness._id !== id)
        )
      );
  }

  return (
    <>
      <div className="bg-white h-full">
        <div className="w-full flex align-center justify-between px-6 py-4">
          <form className="flex w-1/2 ">
            <label className="relative flex items-center w-3/4 text-red-950">
              <FiSearch className="absolute m-2" />
              <input
                className="placeholder:text-red-950 block bg-slate-200 w-full border-b-2 border-red-950  rounded-l-2xl py-2 pl-9 pr-3 focus:outline-0"
                placeholder="Search for anything..."
                type="text"
                name="search"
              />
            </label>
            <button className="bg-red-950 px-4 rounded-r-2xl text-white">
              Search
            </button>
          </form>
          <button
            className="bg-red-950 px-4 rounded-2xl text-white flex items-center"
            onClick={() => setAddFitness(true)}
          >
            <FiPlus /> Add Fitness
          </button>
          {addFitness && <AddFitness setAddFitness={setAddFitness} />}
        </div>
        <div>
          <table className="table-auto text-left w-full border-2 ">
            <thead>
              <tr className="h-20">
                <th scope="col">No</th>
                <th scope="col">Fitness Name</th>
                <th scope="col">Members</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody>
              {fitnesses?.map((fitness, i) => (
                <FitnessCol
                  fitness={fitness}
                  deleteHandler={deleteHandler}
                  i={i}
                  key={i}
                />
              ))}
            </tbody>
          </table>
          {showLoadMore && <button onClick={loadMore}>Load more</button>}
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}fitness/getAllfitness0`
    );
    return {
      props: {
        fitness: res.data,
      },
    };
  } catch (err) {
    return {
      props: {
        fitness: null,
      },
    };
  }
}
