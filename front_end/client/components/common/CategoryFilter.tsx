import { categoryDistrict } from "@/util/Pages";
import { useRouter } from "next/router";

export default function Category({ pathname }: { pathname: string }) {
	const router = useRouter();
	function changeHandler(e: { target: { value: string } }) {
		if (e.target.value === "district") {
			router.push({ pathname, query: { page: 1 } });
			return;
		}
		router.push({ pathname, query: { page: 1, category: e.target.value } });
	}
	return (
		<select
			className="text-white w-full md:w-1/2 bg-black px-2 p-[5px] text-main h-10 my-5 focus:border-none"
			onChange={changeHandler}
			defaultValue={router.query.category}>
			<option
				value="district"
				className="w-[50%]">
				All district
			</option>
			{categoryDistrict.map((district, i) => (
				<option
					value={district}
					key={i}>
					{district}
				</option>
			))}
		</select>
	);
}
