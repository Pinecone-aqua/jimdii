import axios from "axios";
import { useRouter } from "next/router";
import { FcGoogle } from "react-icons/fc";

export default function Login() {
	const router = useRouter();
	function loginHandler() {
		axios.get("http://localhost:7003/google-login").then((res) => {
			router.push(res.data);
		});
	}

	return (
		<div className="absolute top-0 left-0 w-screen h-screen flex bg-black justify-center items-center">
			<div className="min-w-[300px] min-h-[200px] border flex justify-center items-center rounded-lg flex-col">
				<p className="text-lg font-bold text-white my-3">Login</p>
				<p className="text-sm font-slim text-white my-1">with</p>
				<div
					className="flex justify-center items-center border bg-white px-10 py-2 text-xl gap-2 my-3 rounded-md"
					onClick={loginHandler}>
					<FcGoogle /> Google
				</div>
			</div>
		</div>
	);
}
