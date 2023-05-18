import { useEffect, useState } from "react";
import { UserType } from "../util/types";
import axios from "axios";
import { FaGoogle } from "react-icons/fa";
import { useRouter } from "next/router";

export default function Login() {
	const [registerbtn, setRegisterBtn] = useState<boolean>(false);
	const [getFirstPass, setFirstPass] = useState<string>("");
	const [getSecondPass, setSecondPass] = useState<string>("");
	const [confirmPass, setConfirmPass] = useState<boolean>(false);
	const [signBtn, setsignBtn] = useState<boolean>(false);
	const router = useRouter();
	useEffect(() => {
		setRegisterBtn(false);
		getSecondPass == getFirstPass
			? setConfirmPass(true)
			: setConfirmPass(false);
	}, [getSecondPass, getFirstPass]);

	const inputStyle = "w-full p-1 text-white bg-black  mb-[10px]";

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	function submitHandler(e: any) {
		e.preventDefault();
		if (registerbtn) {
			const register: UserType = {
				username: e.target.name.value,
				gender: e.target.gender.value,
				email: e.target.email.value,
				password: e.target.password.value,
				id: "",
			};
			console.log(register);
			axios
				.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}user/register`, register)
				.then((res) => console.log(res))
				.catch((err) => console.log(err));
		} else {
			const login = {
				email: e.target.email.value,
				password: e.target.password.value,
			};
			console.log(login);
			axios
				.get(
					`${
						process.env.NEXT_PUBLIC_BACKEND_URL
					}user/login?user=${JSON.stringify(login)}`
				)
				.then((res) => console.log(res))
				.catch((err) => console.log(err));
		}
	}

	function googleLoginHandler() {
		axios
			.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}google-login`)
			.then((res) => {
				router.push(res.data);
			});
	}

	return (
		<div className="h-full loginPage">
			{/* start new design */}
			<div className="w-full flex justify-end flex-row">
				<button
					className="text-2xl text-white mr-[20px]"
					onClick={() => router.back()}>
					X
				</button>
			</div>

			<div className="flex justify-center items-center h-[80vh]">
				<form
					onSubmit={(e) =>
						confirmPass ? submitHandler(e) : e.preventDefault()
					}
					className="flex flex-col justify-between gap-2 items-center pt-10 p-3 w-[400px]">
					{!signBtn ? (
						<div>
							<div className="flex justify-center items-center">
								<h2 className="text-[60px] leading-[48px] font-bold my-[10px] text-white">
									Login
								</h2>
							</div>

							<div className="flex w-full justify-center  gap-[5px]  items-center my-[10px] text-white ">
								<p>New to this site?</p>
								<button
									className="text-[#4D9799]"
									onClick={() => setsignBtn(true)}>
									Sign Up
								</button>
							</div>
							<>
								<input
									type="text"
									placeholder="Email"
									className={inputStyle}
									name="email"
									id="inputStyle"
								/>
								<input
									type="text"
									placeholder="Password"
									className={inputStyle}
									name="password"
									id="inputStyle"
								/>
							</>
							<button
								type="submit"
								className={`w-full h-[48px] p-2  text-white mt-4 bg-[#4D9799]`}>
								{registerbtn ? "Register" : "Login"}
							</button>
							<div className="flex justify-center items-center my-[5px] text-white">
								<span>Or </span>
							</div>
							<div className="w-full flex justify-center">
								<button
									onClick={googleLoginHandler}
									className="signbutton flex items-center relative">
									<FaGoogle className="absolute " />
									<div className="flex justify-center w-full">
										<span>Login with Google</span>
									</div>
								</button>
							</div>
						</div>
					) : (
						<div>
							<div className="flex justify-center items-center">
								<h2 className="text-[60px] leading-[48px] font-bold my-[10px] text-white">
									Sign Up
								</h2>
							</div>

							<div className="flex w-full justify-center  gap-[5px]  items-center my-[10px] text-white">
								<p>Already a member?</p>
								<button
									className="text-[#4D9799]"
									onClick={() => setsignBtn(false)}>
									Log In
								</button>
							</div>
							{/* start here */}

							<>
								<p className="flex justify-between gap-2">
									<input
										type="text"
										placeholder="Firstname"
										className={inputStyle}
										name="name"
										required
										id="inputStyle"
									/>
								</p>

								<input
									type="text"
									placeholder="Email"
									className={inputStyle}
									name="email"
									required
									id="inputStyle"
								/>
								<select
									className={`${inputStyle}`}
									name="gender"
									required>
									<option value="male">Male</option>
									<option value="female">Female</option>
									<option value="other">Other</option>
								</select>
								<input
									type="text"
									placeholder="Password"
									className={inputStyle}
									name="password"
									onChange={(e) => setFirstPass(e.target.value)}
									required
									id="inputStyle"
								/>
								<input
									type="text"
									placeholder="Confirm password"
									className={` ${
										confirmPass
											? inputStyle
											: "w-full p-1 text-black rounded-lg border-2 border-rose-500"
									}`}
									onChange={(e) => setSecondPass(e.target.value)}
									name="confirm"
									required
									id="inputStyle"
								/>
							</>
							<div className="w-full flex justify-center">
								<button
									type="submit"
									className={`w-full h-[48px] p-2  text-white mt-4 bg-[#4D9799]`}>
									{!registerbtn ? "Register" : "Login"}
								</button>
							</div>

							<div className="flex justify-center items-center my-[5px] text-white">
								<span>Or</span>
							</div>
							<div className="w-full flex justify-center">
								<button
									onClick={googleLoginHandler}
									className="signbutton flex items-center relative">
									<FaGoogle className="absolute " />
									<div className="flex justify-center w-full">
										<span>Sign Up with Google</span>
									</div>
								</button>
							</div>
						</div>
					)}
				</form>
			</div>
		</div>
	);
}
