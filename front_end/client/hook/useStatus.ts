import { useEffect, useState } from "react";

interface StatusType {
	status?: number;
}

export default function useStatus() {
	const [statusMessage, setStatusMessage] = useState<StatusType>();

	useEffect(() => {
		const timeout = setTimeout(() => {
			setStatusMessage({});
		}, 5000);

		return () => {
			clearTimeout(timeout);
		};
	}, []);

	return { statusMessage, setStatusMessage };
}
