import { FiSearch, FiPlus } from "react-icons/fi";
import { fitnesses } from "../utils/fitness.dummy";
import FitnessCol from "@/components/FitnessCol";
import { useState } from "react";
import AddFitness from "@/components/AddFitness";

export default function Fitness() {
	const [addFitness, setAddFitness] = useState(false);

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
						onClick={() => setAddFitness(true)}>
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
							{fitnesses.map((fitness, i) => (
								<FitnessCol
									fitness={fitness}
									i={i}
									key={i}
								/>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</>
	);
}
