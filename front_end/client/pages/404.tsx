import { useRouter } from "next/router";
import React, { useEffect } from "react";

export default function Index() {
	const router = useRouter();

	useEffect(() => {
		setTimeout(() => {
			router.back();
		}, 1500);
	}, [router]);

	return (
		<div className="absolute top-0 left-0 w-screen h-screen flex justify-center items-center bg-gray-900">
			<p className="text-white text-2xl">Page not found</p>
		</div>
	);
}
