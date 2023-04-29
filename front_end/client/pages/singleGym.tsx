import { useState } from "react";
import { Fitnesses } from "@/util/dummydata";
import { useRouter } from "next/router";
import { IoMdArrowBack } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Timetable from "@/components/subcomp/SingleFitness/Timetable";
import FitnessPrice from "@/components/subcomp/SingleFitness/FitnessPrice";
import Discount from "@/components/subcomp/SingleFitness/Discount";
import ContactInfo from "@/components/subcomp/SingleFitness/ContactInfo";
import Link from "next/link";
import Spec from "@/components/subcomp/SingleFitness/Spec";

export default function SingleGym() {
	const [changeImg, setChangeImg] = useState(0);
	const router = useRouter();
	const fitness = Fitnesses[0];

	const changeImgStyle =
		"absolute top-0 h-full flex items-center text-main w-1/2 group";

	function changeImgLeft() {
		if (changeImg > 0) setChangeImg((i) => i - 1);
	}
	function changeToRigth() {
		if (changeImg < fitness.image.length - 1) setChangeImg((i) => i + 1);
	}
	return (
		<div className="min-h-screen bg-gray-900 text-black">
			<div className="container mx-auto p-6">
				<div className="border-b-2 p-3 border-main flex text-main items-center gap-5">
					<button
						onClick={() => router.back()}
						className="border-2 border-main rounded-2xl">
						<IoMdArrowBack size={"2em"} />
					</button>
					<p className="text-xl font-bold">&quot;{fitness.name}&quot;</p>
				</div>
				<>
					<p className="flex items-center my-5 text-xs text-white">
						<IoLocationSharp size={"1rem"} /> {fitness.address.description}
					</p>
				</>
				<div className="lg:flex justify-between gap-8">
					<div className="w-full lg:w-7/12 flex flex-col gap-4 my-4">
						<div className="flex w-full h-[200px] sm:h-[300px] md:h-[350px] lg:h-[400px] relative rounded-xl select-none">
							<p
								onClick={changeImgLeft}
								className={`${changeImgStyle} left-0 rounded-l-xl justify-start`}>
								<IoIosArrowBack
									size={"2em"}
									className="bg-black rounded-2xl m-2 p-1 group-active:bg-black/50 cursor-pointer"
								/>
							</p>
							<picture className="w-full h-full">
								<img
									src={fitness.image[changeImg]}
									alt=""
									className="h-full w-full object-cover rounded-xl"
								/>
							</picture>
							<p
								onClick={changeToRigth}
								className={`${changeImgStyle} right-0 rounded-r-xl justify-end`}>
								<IoIosArrowForward
									size={"2em"}
									className="bg-black rounded-2xl m-1 p-1 group-active:opacity-50 cursor-pointer"
								/>
							</p>
						</div>
						<div className="w-full flex justify-between py-2 px-4 items-center rounded-xl bg-gray-200">
							<ContactInfo contact={fitness.contact} />
							<Link href={"/membership"}>
								<button className="px-4 py-2 bg-main rounded-lg">
									Бүртгүүлэх
								</button>
							</Link>
						</div>
					</div>
					<div className="w-full lg:w-5/12 rounded-xl p-1 flex flex-col lg:text-sm text-base bg-gray-200 text-black">
						<div className="flex w-full gap-5 flex-col md:flex-row">
							<FitnessPrice price={fitness.price} />
							<Discount discounts={fitness.discount} />
						</div>
						<div className="flex w-full gap-5 flex-col md:flex-row">
							<Timetable timetable={fitness.timetable} />
							<Spec />
						</div>
					</div>
				</div>
				<div className="w-full bg-gray-200 p-3 my-4 rounded-xl">
					<span className="text-lg font-bold">Танилцуулга:</span>
					<p className="px-2">{fitness.description}</p>
				</div>
			</div>
		</div>
	);
}
