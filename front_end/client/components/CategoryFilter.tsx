import { categoryDistrict } from "@/util/Pages";

export default function Category() {
	return (
		<div>
			<select className="text-white w-full bg-black border-bottom p-[5px]">
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
		</div>
	);
}
