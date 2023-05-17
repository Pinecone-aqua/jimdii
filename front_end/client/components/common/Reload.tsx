import { useRouter } from "next/router";

export default function ShowReload() {
	const router = useRouter();

	return (
		<div className="text-white text-xl flex flex-col justify-center items-center gap-10">
			<p className="text-2xl">Something went wrong</p>
			<button
				onClick={() => router.reload()}
				className="border-b border-main text-white px-7 py-2 rounded-xl hover:opacity-100 bg-main opacity-50">
				Reload
			</button>
		</div>
	);
}
