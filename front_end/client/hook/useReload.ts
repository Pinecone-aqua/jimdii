import { useEffect, useState } from "react";
import ShowReload from "../components/common/Reload";

export default function useReload() {
	const [showLoading, setShowLoading] = useState(true);

	useEffect(() => {
		const timeout = setTimeout(() => {
			setShowLoading(false);
		}, 5000);

		return () => {
			clearTimeout(timeout);
		};
	}, []);

	return { showLoading, ShowReload };
}
