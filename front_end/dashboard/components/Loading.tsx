import React, { ReactNode, useEffect, useState } from "react";
import ReactLoading from "react-loading";
import { useRouter } from "next/router";

type PropType = {
	children: ReactNode;
};

export default function Loader({ children }: PropType) {
	const router = useRouter();
	const [loading, setLoading] = useState(true);

	const handleStart = () => setLoading(true);
	const handleComplete = () => setLoading(false);

	useEffect(() => {
		handleComplete();
		router.events.on("routeChangeStart", handleStart);
		router.events.on("routeChangeComplete", handleComplete);
		router.events.on("routeChangeError", handleComplete);

		return () => {
			router.events.off("routeChangeStart", handleStart);
			router.events.off("routeChangeComplete", handleComplete);
			router.events.off("routeChangeError", handleComplete);
		};
	}, [router]);

	return (
		<>
			{loading ? (
				<div className="loader-container w-screen h-screen bg-black flex justify-center items-center">
					<div className="loader">
						<ReactLoading
							color="white"
							height={50}
							width={50}
							type="spokes"
						/>
					</div>
				</div>
			) : (
				<>{children}</>
			)}
		</>
	);
}
