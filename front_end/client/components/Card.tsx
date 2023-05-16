import { FitnessType } from "@/util/types";
import Link from "next/link";
import React from "react";

interface PropsType {
	fitness: FitnessType;
}
export default function Card(props: PropsType): JSX.Element {
	const { fitness } = props;

	return (
		<div className="border border-white w-fit">
			<div className="flex justify-between ">
				<Link href={`/fitness/${fitness._id}`}>
					<div className="bg-black w-[300px] h-[550px] text-white p-5 font-extralight">
						<picture>
							<img
								src={fitness.image[0]}
								alt="Card Pic"
								className="h-[50%]"
							/>
						</picture>
						<h2 className="text-2xl my-4">{fitness.name}</h2>
						<p>Mon, Wed, Fri</p>
						<p>{}</p>
						<p>MNT {fitness.price?.oneMonth}</p>
						<button className="bg-main w-[132px] h-[40px] my-9 text-black font-extralight">
							Бүргүүлэх
						</button>
					</div>
				</Link>
			</div>
		</div>
	);
}
