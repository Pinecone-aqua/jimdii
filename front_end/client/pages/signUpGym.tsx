import MainLogo from "@/components/subcomp/MainLogo";
import { DiscountType } from "@/util/types";
import axios from "axios";
import React, { useRef, useState } from "react";
import { toast } from "react-toastify";

export default function SignUpGym(): JSX.Element {
	const [discounts, setDiscounts] = useState<DiscountType[]>([]);
	const discountName = useRef("");
	const discountPers = useRef("");

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	function submitHandler(e: any) {
		e.preventDefault();

		const newFitness = {
			name: e.target.name.value,
			description: e.target.description.value,
			price: {
				oneMonth: e.target.oneMonth.value,
				year: e.target.year.value,
			},
			address: {
				district: e.target.districts.value,
				description: e.target.addressDescription.value,
			},
			timetable: {
				Monday: e.target.workDay.value,
				Tuesday: e.target.workDay.value,
				Wednesday: e.target.workDay.value,
				Thursday: e.target.workDay.value,
				Friday: e.target.workDay.value,
				Saturday: e.target.weekend.value,
				Sunday: e.target.weekend.value,
			},
			discount: discounts,
			spec: {
				wifi: e.target.specWifi.value,
				shower: e.target.specShower.value,
				parking: e.target.specParking.value,
			},
			contact: {
				// eslint-disable-next-line camelcase
				phonenumber: e.target.phonenumber.value,
				social: e.target.social.value,
			},
		};
		console.log(newFitness);
		const files: File[] = e.target.file.files;

		const data = new FormData();
		Array.from(files).forEach((file) => data.append("image", file));

		data.append("newFitness", JSON.stringify(newFitness));

		const promise = (async () => {
			const res = await axios.post(
				`${process.env.NEXT_PUBLIC_BACKEND_URL}tempfitness/addtempFitness`,
				data
			);
			if (res.status === 200) {
				toast("Success", {
					position: "bottom-left",
					type: "success",
					autoClose: 1000,
					closeOnClick: true,
					pauseOnHover: false,
					draggable: true,
				});
			} else {
				toast("Error try again", {
					position: "bottom-left",
					type: "error",
					autoClose: 1000,
					closeOnClick: true,
					pauseOnHover: false,
					draggable: true,
				});
			}
		})();
		promise.catch((error) => {
			console.log(error);
		});
	}

	function discountAdd() {
		setDiscounts([
			...discounts,
			{ name: discountName.current, discount: Number(discountPers.current) },
		]);
	}

	return (
		<div className="w-full h-fit registerPage">
			<div className="w-[50%] mx-auto py-[35px]">
				<div className="flex">
					<div className="hidden lg:inline w-[50%] rounded-l-lg">
						<div className="w-full h-full flex justify-center items-center bg-[#4D9799] rounded-l-lg  ">
							<MainLogo />
						</div>
					</div>

					<div className="bg-black text-white rounded-r-lg w-[50%]">
						<div className=" text-white flex justify-center items-center h-[50px] text-lg font-bold rounded-t-lg p-[30px]">
							<h2>Gym Registration Form</h2>
						</div>
						<form
							onSubmit={submitHandler}
							className="w-[80%] mx-auto">
							<label className="block w-full">
								<h2>НЭР :</h2>
								<input
									type="text"
									name="name"
									placeholder="Your Gym Name"
									className="w-full p-[5px]"
									id="input_Style"
									required
								/>
							</label>
							<label className="w-full">
								<h2>ДЭЛГЭРЭНГҮЙ :</h2>

								<input
									type="text"
									name="description"
									placeholder="Description"
									className="w-full  p-[5px]"
									id="input_Style"
									required
								/>
							</label>
							<label className="w-full">
								<h2>ҮНЭ :</h2>

								<div className="flex justify-between">
									<input
										type="text"
										name="oneMonth"
										placeholder="Month"
										className="w-[49%]  p-[5px]"
										id="input_Style"
										required
									/>
									<input
										type="text"
										name="year"
										placeholder="Year"
										className="w-[49%]  p-[5px]"
										id="input_Style"
									/>
								</div>
							</label>
							<label className="block ">
								<h2>ADDRESS :</h2>
								<select
									name="districts"
									id="districts"
									className="text-white w-full bg-black border-bottom p-[5px]">
									<option
										value="Бүх дүүрэг/сум..."
										className="w-[50%]">
										Дүүрэг...
									</option>
									<option value="Bayangol">Bayangol</option>
									<option value="Khan-uul">Khan-uul</option>
									<option value="Bayanzurkh">Bayanzurkh</option>
									<option value="Sukhbaatar">Sukhbaatar</option>
									<option value="Songino-Khairkhan">Songino-Khairkhan</option>
									<option value="Chingeltei">Chingeltei</option>
								</select>
								<div className="mt-3">
									<h2>ХАЯГ :</h2>
									<input
										type="text"
										name="addressDescription"
										placeholder="Description"
										className="text-white w-full p-[5px] "
										id="input_Style"
									/>
								</div>
							</label>
							<label className="block">
								<h2>ЦАГИЙН ХУВААРЬ:</h2>

								<div className="mt-2">
									<h2>Ажлын өдөр:</h2>

									<input
										type="text"
										name="workDay"
										placeholder="Хэдээс хэдэн цаг хүртэл"
										className="text-white w-full p-[5px]"
										id="input_Style"
									/>
								</div>
								<div>
									<h2>Амралтын өдөр:</h2>

									<input
										type="text"
										name="weekend"
										placeholder="Хэдээс хэдэн цаг хүртэл"
										className="text-white w-full p-[5px]"
										id="input_Style"
									/>
								</div>
							</label>
							<label className="w-full">
								<input
									type="file"
									name="file"
									multiple
								/>
							</label>
							<label className="w-full">
								<h2>ХӨНГӨЛӨЛТ :</h2>

								<div>
									Хөнгөлөлтийн нэр:
									<input
										type="text"
										name="discountName"
										placeholder="Discount name"
										className="text-white w-full  p-[5px]"
										id="input_Style"
										onChange={(e) => (discountName.current = e.target.value)}
									/>
								</div>
								<div>
									Хөнгөлөлтийн хувь:
									<input
										type="number"
										name="discountPer"
										placeholder="Discount Percentage"
										className="text-white w-full  p-[5px]"
										id="input_Style"
										onChange={(e) => (discountPers.current = e.target.value)}
									/>
								</div>
								<input
									type="button"
									value={"+"}
									onClick={discountAdd}
								/>
							</label>
							<label>
								<h2>НЭМЭЛТ :</h2>
								<div className="flex gap-[20px]">
									<div className="flex gap-[10px]">
										<h3>Wifi :</h3>
										<input
											type="checkbox"
											name="specWifi"
										/>
									</div>

									<h3>Shower: </h3>
									<input
										type="checkbox"
										name="specShower"
									/>
									<h3>Parking: </h3>
									<input
										type="checkbox"
										name="specParking"
									/>
								</div>
							</label>
							<label className="w-full">
								<div>
									<h3>УТАСНЫ ДУГААР :</h3>
									<input
										type="number"
										name="phonenumber"
										placeholder="Phone Number"
										className="text-white w-full p-[5px]"
										id="input_Style"
									/>
									<h3>СОШИАЛ :</h3>
									<input
										type="url"
										name="social"
										placeholder="Social Link"
										className="text-white w-full  p-[5px]"
										id="input_Style"
									/>
								</div>
							</label>
							{/* <label>
                   Image: 
                    <input type="file" name="Upload Images" multiple placeholder="Image" required/>
                </label> */}
							<button
								type="submit"
								className="bg-[#4D9799] my-[20px] p-[15px] w-full ">
								Add New Gym
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}
