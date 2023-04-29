import { TimetableType } from "@/util/types";

interface PropsType {
	timetable: TimetableType;
}

export default function Timetable({ timetable }: PropsType) {
	const timetableStyle = "flex justify-between gap-2 mx-3";
	const spanStyle = "w-3/5 lg:w-1/3 border-r-[1px] border-black pr-1 mr-1";

	return (
		<div className="w-full lg:w-1/2 lg:border-none md:border-[1px] md:my-4 p-2  w-1/2 rounded-lg">
			<p className="text-lg font-bold">Цагийн хууварь:</p>
			<div className={timetableStyle}>
				<span className={spanStyle}>Mon</span>
				{timetable.Monday}
			</div>
			<div className={timetableStyle}>
				<span className={spanStyle}>Tue</span>
				{timetable.Tuesday}
			</div>
			<div className={timetableStyle}>
				<span className={spanStyle}>Wed</span>
				{timetable.Wednesday}
			</div>
			<div className={timetableStyle}>
				<span className={spanStyle}>Thu</span>
				{timetable.Thursday}
			</div>
			<div className={timetableStyle}>
				<span className={spanStyle}>Fri</span>
				{timetable.Friday}
			</div>
			<div className={timetableStyle}>
				<span className={spanStyle}>Sat</span>
				{timetable.Saturday}
			</div>
			<div className={timetableStyle}>
				<span className={spanStyle}>Sun</span>
				{timetable.Sunday}
			</div>
		</div>
	);
}
