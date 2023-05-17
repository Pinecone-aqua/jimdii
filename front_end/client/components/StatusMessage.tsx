import useStatus from "@/hook/useStatus";
import React from "react";

export default function StatusMessage(props: { message: string }): JSX.Element {
	const { statusMessage } = useStatus();

	const { message } = props;
	return statusMessage?.status ? (
		<div className="w-[300px] h-[50px] transition delay-1000 bg-green-400">
			<div>{message}</div>
		</div>
	) : (
		<>hi</>
	);
}
