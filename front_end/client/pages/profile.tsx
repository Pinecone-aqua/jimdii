import { useUser } from "@/context/UserContext";
import { ProfileNavbar } from "../util/Pages";
import { useState } from "react";
import Image from "next/image";

export default function Profile() {
	const [currentBtn, setCurrentBtn] = useState(ProfileNavbar[0]);
	const { currentUser } = useUser();

	console.log(currentUser);

	return (
		<div className="bg-black min-h-screen text-black">
			<div className="container profile border-main border">
				<div className="profile-header">
					<div className="profile-header-background">
						{currentUser?.bgImage ? (
							<Image
								src={currentUser.bgImage}
								alt="profile"
								fill
								priority={true}
							/>
						) : (
							<div className="" />
						)}
					</div>
					<nav className="profile-header-navbar ">
						<ul className="profile-header-list">
							{ProfileNavbar.map((button, i: number) => (
								<li
									key={i}
									onClick={() => setCurrentBtn(button)}
									className={`hover:opacity-75 ${
										currentBtn == button
											? "profile-header-activeBtn"
											: "profile-header-inActiveBtn"
									}`}>
									{button.name}
								</li>
							))}
						</ul>
					</nav>
					<div className="profile-header-image">
						{currentUser?.image ? (
							<Image
								src={currentUser.image}
								alt={""}
								width={100}
								height={100}
								className="rounded-[100%]"
							/>
						) : (
							<div className="rounded-[100%] bg-main text-white">
								{currentUser?.username.slice(0, 1)}
							</div>
						)}
						<p>{currentUser?.username}</p>
					</div>
				</div>
				<div className="profile-body">{currentBtn.component}</div>
			</div>
		</div>
	);
}
