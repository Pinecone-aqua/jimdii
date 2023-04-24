import { FitnessType } from "@/utils/types";
import { useRouter } from "next/router";
// import axios from "axios";
import { MdDeleteOutline } from "react-icons/md";

type PropType = {
  fitness: FitnessType;
  i: number;
};

export default function FitnessCol(props: PropType) {
  const { fitness, i } = props;
  const router = useRouter();

  function deleteHandler() {
    console.log("asd", fitness._id);
    // axios.delete(`http://localhost:7070/fitness/delete${fitness._id}`);
  }

  function fitnessHandler() {
    router.push(`/fitness/${fitness._id}`);
  }

  return (
    <tr className="odd:bg-gray-300 h-10">
      <td scope="col" onClick={fitnessHandler}>
        {i + 1}
      </td>
      <td scope="col" onClick={fitnessHandler}>
        {fitness.name}
      </td>
      <td scope="col" onClick={fitnessHandler}>
        ...
      </td>
      <td scope="col" className="text-center">
        <MdDeleteOutline color="red" size={"1.5em"} onClick={deleteHandler} />
      </td>
    </tr>
  );
}
