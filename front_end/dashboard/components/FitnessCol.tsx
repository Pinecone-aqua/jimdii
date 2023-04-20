import { FitnessType } from "@/utils/types";

export default function FitnessCol(fitness: FitnessType) {
	console.log(fitness);

	return (
		<tr>
			<td>{fitness.name}</td>
		</tr>
	);
}
