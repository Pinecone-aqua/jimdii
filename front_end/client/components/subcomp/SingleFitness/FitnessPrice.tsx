import { PriceType } from "@/util/types";

interface PropsType {
	price: PriceType;
}

export default function FitnessPrice({ price }: PropsType) {
	const priceStyle = "flex justify-between mx-3 my-1 border-[1px] p-1";
	const spanStyle = "w-1/3 border-r-[1px] pr-1 mr-1";

	return (
		<div className="w-full lg:w-1/2 md:border-[1px] md:my-4 lg:border-none p-2 lg:text-sm text-base rounded-lg">
			Үнэ:
			{price.onetime && (
				<div className={priceStyle}>
					<span className={spanStyle}>Хоног</span>
					{price.onetime} ₮
				</div>
			)}
			{price.oneMonth && (
				<div className={priceStyle}>
					<span className={spanStyle}>1 сар</span>
					{price.oneMonth} ₮
				</div>
			)}
			{price.threeMonth && (
				<div className={priceStyle}>
					<span className={spanStyle}>3 сар</span>
					{price.threeMonth} ₮
				</div>
			)}
			{price.sixMonth && (
				<div className={priceStyle}>
					<span className={spanStyle}>6 сар</span>
					{price.sixMonth} ₮
				</div>
			)}
			{price.year && (
				<div className={priceStyle}>
					<span className={spanStyle}>Жил</span>
					{price.year} ₮
				</div>
			)}
		</div>
	);
}
