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

// export default function SingleGym(): JSX.Element {
// 	console.log(Fitnesses[0]);

// 	return (
// 		<div className=" h-screen w-[60%] m-auto">
// 			<div className="flex gap-2 py-5 border-b-2 border-black my-4">
// 				<Link href={`/`}>Back</Link>
// 				<p>Cardio Fitness</p>
// 			</div>
// 			<div className="flex w-[40%] justify-between mb-1">
// 				<div>Location is Here</div>
// 				<div>Phone is Here</div>
// 			</div>
// 			<div className="flex justify-between">
// 				<div className="w-[57%] bg-slate-200 h-[60vh]">
// 					<picture>
// 						<img
// 							src="https://www.goldsgym.mn/images/upload/2016/ub_golds_amenities/DSC06969.jpg"
// 							alt="Single Gym Picc"
// 						/>
// 					</picture>
// 				</div>
// 				<div
// 					id="singleDescription"
// 					className="w-[40%] bg-slate-300 p-4">
// 					<h2 className="text-2xl m-5">Нэр</h2>
// 					<div className="flex w-[60%] justify-between mx-5">
// 						<p>Wifi</p>
// 						<p>Check icon for Boolean</p>
// 					</div>
// 					<div className="flex w-[60%] justify-between mx-5">
// 						<p>Shower</p>
// 						<p>Check icon for Boolean</p>
// 					</div>
// 					<div className="flex w-[60%] justify-between mx-5">
// 						<p>Park</p>
// 						<p>Check icon for Boolean</p>
// 					</div>

// 					{/* This is Schedule Table  */}
// 					<div className="flex flex-col">
// 						<div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
// 							<div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
// 								<div className="overflow-hidden">
// 									<table className="min-w-full text-left text-sm font-light">
// 										<thead className="border-b font-medium dark:border-neutral-500">
// 											<tr>
// 												<th
// 													scope="col"
// 													className="px-6 py-4">
// 													Цагийн хууварь
// 												</th>
// 											</tr>
// 										</thead>
// 										<tbody>
// 											<tr>
// 												<td className="whitespace-nowrap px-6 py-4">Даваа</td>
// 												<td className="whitespace-nowrap px-6 py-4">
// 													07:00 - 22:00
// 												</td>
// 											</tr>
// 											<tr>
// 												<td className="whitespace-nowrap px-6 py-4">Jacob</td>

// 												<td className="whitespace-nowrap px-6 py-4">
// 													07:00 - 22:00
// 												</td>
// 											</tr>
// 											<tr>
// 												<td className="whitespace-nowrap px-6 py-4">Larry</td>
// 												<td className="whitespace-nowrap px-6 py-4">
// 													07:00 - 22:00
// 												</td>
// 											</tr>
// 											<tr>
// 												<td className="whitespace-nowrap px-6 py-4">Larry</td>
// 												<td className="whitespace-nowrap px-6 py-4">
// 													07:00 - 22:00
// 												</td>
// 											</tr>
// 											<tr className="border-b dark:border-neutral-500">
// 												<td className="whitespace-nowrap px-6 py-4">Larry</td>
// 												<td className="whitespace-nowrap px-6 py-4">
// 													07:00 - 22:00
// 												</td>
// 											</tr>
// 											<tr>
// 												<td className="whitespace-nowrap px-6 py-4">Larry</td>
// 												<td className="whitespace-nowrap px-6 py-4">
// 													07:00 - 21:00
// 												</td>
// 											</tr>
// 											<tr className="border-b dark:border-neutral-500">
// 												<td className="whitespace-nowrap px-6 py-4">Larry</td>
// 												<td className="whitespace-nowrap px-6 py-4">
// 													09:00 - 21:00
// 												</td>
// 											</tr>
// 										</tbody>
// 									</table>
// 								</div>
// 							</div>
// 						</div>
// 					</div>
// 					{/* Icon  */}
// 					<div className="flex justify-between">
// 						<Link
// 							href={`/`}
// 							className="border border-black w-[50%]">
// 							Бүртгүүлэх товч
// 						</Link>
// 						<Link
// 							href={`https://www.goldsgym.mn/amenities/`}
// 							className="border border-black ">
// 							FBIcon
// 						</Link>
// 						<Link
// 							href={`https://www.goldsgym.mn/amenities/`}
// 							className="border border-black ">
// 							IGIcon
// 						</Link>
// 						<Link
// 							href={`https://www.goldsgym.mn/amenities/`}
// 							className="border border-black ">
// 							WIcon
// 						</Link>
// 					</div>
// 				</div>
// 			</div>
// 			<div className="flex justify-between mt-4">
// 				<div className="w-[57%]  bg-slate-200 h-[25vh]">Description</div>
// 				<div className="w-[40%] bg-slate-200">
// 					<iframe
// 						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2674.6157396292306!2d106.94065411232931!3d47.90512226719518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5d96922a376aac73%3A0x77624a376ddadbea!2sGold&#39;s%20Gym!5e0!3m2!1smn!2smn!4v1682008315059!5m2!1smn!2smn"
// 						width="600"
// 						height="450"
// 						loading="lazy"
// 						className="h-[25vh] w-full"
// 					/>
// 				</div>
// 			</div>
// 		</div>
// 	);
// }

export default function SingleGym() {
	const [changeImg, setChangeImg] = useState(0);
	const router = useRouter();
	const fitness = Fitnesses[0];

	const changeImgStyle =
		"absolute top-0 h-full flex items-center bg-gray-100/10 active:bg-gray-100/20";

	function changeImgLeft() {
		if (changeImg > 0) setChangeImg((i) => i - 1);
	}
	function changeToRigth() {
		if (changeImg < fitness.image.length - 1) setChangeImg((i) => i + 1);
	}
	return (
		<div className="min-h-screen bg-black text-white">
			<div className="container mx-auto p-6">
				<div className="border-b-2 p-3 border-main flex text-main items-center gap-5">
					<button
						onClick={() => router.back()}
						className="border-2 border-main rounded-2xl">
						<IoMdArrowBack size={"2em"} />
					</button>
					<p className="text-xl font-bold">&quot;{fitness.name}&quot;</p>
				</div>
				<div>
					<p className="flex items-center my-5 text-xs">
						<IoLocationSharp size={"1rem"} /> {fitness.address.description}
					</p>
				</div>
				<div className="lg:flex justify-between gap-8">
					<div className="w-full lg:w-7/12 flex flex-col">
						<div className="flex w-full h-[400px] relative rounded-xl select-none">
							<p
								onClick={changeImgLeft}
								className={`${changeImgStyle} left-0 rounded-l-xl`}>
								<IoIosArrowBack size={"2em"} />
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
								className={`${changeImgStyle} right-0 rounded-r-xl`}>
								<IoIosArrowForward size={"2em"} />
							</p>
						</div>
						<div className="w-full flex justify-between p-5">
							<ContactInfo contact={fitness.contact} />
							<Link href={"/"}>
								<button className="px-4 py-2 bg-main rounded-lg">
									Бүртгүүлэх
								</button>
							</Link>
						</div>
					</div>
					<div className="w-full lg:w-5/12 lg:rounded-xl lg:border-2 flex flex-col">
						<div className="flex w-full gap-5 flex-col md:flex-row">
							<FitnessPrice price={fitness.price} />
							<div className="border-r-2 lg:block md:hidden" />
							<Discount discounts={fitness.discount} />
						</div>
						<div className="border-b-2 lg:block md:hidden" />
						<div className="flex w-full gap-5 flex-col md:flex-row">
							<Timetable timetable={fitness.timetable} />
							<div className="border-r-2 lg:block md:hidden" />
							<Discount discounts={fitness.discount} />
						</div>
					</div>
				</div>
				<div className="w-full border-2 p-3 my-4 rounded-lg">
					{fitness.description}
				</div>
			</div>
		</div>
	);
}
