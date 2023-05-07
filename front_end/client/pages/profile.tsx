import { ProfileButton } from "./constants/pages";
import { useState } from "react";

export default function Profile() {
	const [currentBtn, setCurrentBtn] = useState(ProfileButton[0]);

	const activeBtn = "bg-white text-green-500";
	const inActiveBtn = "cursor-pointer";
	return (
		<div className="bg-gray-900 min-h-screen text-white">
			<div className="container mx-auto p-6">
				<div className="relative flex flex-col">
					<div className="w-full h-[180px] bg-blue-200">bg image</div>
					<nav>
						<ul className="flex bg-gray-700 h-[60px] items-end p-2 gap-10">
							{ProfileButton.map((button, i: number) => (
								<li
									key={i}
									onClick={() => setCurrentBtn(button)}
									className={
										currentBtn == button ? activeBtn + inActiveBtn : inActiveBtn
									}>
									{button.name}
								</li>
							))}
						</ul>
					</nav>
					<div className="absolute top-1/3 left-10 flex items-center gap-3 text-lg text-black ">
						<picture className="w-[110px] h-[110px] rounded-[100%] bg-black">
							{/* <img
                src=""
                alt=""
                className="w-full h-full object-cover rounded-2xl"
              /> */}
						</picture>
						<p>User name</p>
					</div>
				</div>
				<div className="min-h-screen bg-green-400">{currentBtn.component}</div>
			</div>
		</div>
	);
}
