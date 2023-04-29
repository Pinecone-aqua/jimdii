import { TimetableType } from "@/util/types";

interface PropsType {
	timetable: TimetableType;
}

export default function Timetable({ timetable }: PropsType) {
	const timetableStyle = "flex justify-between gap-2 mx-3 my-1 p-1";

	return (
		<div className="w-full lg:w-1/2 lg:border-none md:border-[1px] md:my-4 p-2  w-1/2 rounded-lg">
			Цагийн хууварь:
			<div className={timetableStyle}>
				<span>Mon</span>
				{timetable.Monday}
			</div>
			<div className={timetableStyle}>
				<span>Tue</span>
				{timetable.Tuesday}
			</div>
			<div className={timetableStyle}>
				<span>Wed</span>
				{timetable.Wednesday}
			</div>
			<div className={timetableStyle}>
				<span>Thu</span>
				{timetable.Thursday}
			</div>
			<div className={timetableStyle}>
				<span>Fri</span>
				{timetable.Friday}
			</div>
			<div className={timetableStyle}>
				<span>Sat</span>
				{timetable.Saturday}
			</div>
			<div className={timetableStyle}>
				<span>Sun</span>
				{timetable.Sunday}
			</div>
		</div>
	);
}
