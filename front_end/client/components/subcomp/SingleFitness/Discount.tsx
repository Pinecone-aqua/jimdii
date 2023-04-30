import { DiscountType } from "@/util/types";

interface PropsType {
	discounts: DiscountType[];
}

export default function Discount({ discounts }: PropsType) {
	const discountStyle = "flex justify-between mx-3";
	const spanStyle = "w-3/5 md:w-4/5 border-r-[1px] border-black pr-1 mr-1";

	return (
		<div className="w-full lg:w-1/2 md:border-[1px] md:my-4 lg:border-none p-2 rounded-lg">
			<p className="text-lg font-bold">Хөнгөлөлт:</p>
			{discounts.map((discount, i) => (
				<div
					key={i}
					className={discountStyle}>
					<span className={spanStyle}>{discount.name}</span>
					{discount.discount}
				</div>
			))}
		</div>
	);
}
