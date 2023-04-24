import { Dispatch, SetStateAction } from "react";

interface PropType {
	setAddFitness: Dispatch<SetStateAction<boolean>>;
}

export default function AddFitness(prop: PropType) {
	const { setAddFitness } = prop;
	return (
		<div className="w-screen h-screen top-0 left-0 bg-gray-300/50 absolute flex justify-center items-center">
			<div
				className="w-full h-full"
				onClick={() => setAddFitness(false)}>
				{" "}
			</div>
			<div className="w-10/12 h-5/6 bg-white absolute">hi</div>
		</div>
	);
}
