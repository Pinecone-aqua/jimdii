import { useConfirm } from "@/customHook/useConfirmer";

export default function Home() {
	const { modal } = useConfirm();
	console.log(modal);

	return <div className="w-full h-full bg-neutral-500">home</div>;
}
