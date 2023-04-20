import { FiSearch, FiPlus } from "react-icons/fi";

export default function Fitness() {
	return (
		<div className="w-full h-full bg-green-950 p-3">
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
					<button className="bg-red-950 px-4 rounded-2xl text-white flex items-center">
						<FiPlus /> Add Fitness
					</button>
				</div>
				<div className="">a</div>
			</div>
		</div>
	);
}
