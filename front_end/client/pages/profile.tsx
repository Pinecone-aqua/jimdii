import { useUser } from "@/context/UserContext";
import { ProfileButton } from "./constants/pages";
import { useState } from "react";
import Image from "next/image";

export default function Profile() {
  const [currentBtn, setCurrentBtn] = useState(ProfileButton[0]);
  const { currentUser } = useUser();
  console.log(currentUser);

  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <div className="container mx-auto p-6 profile">
        <div className="relative flex flex-col profile-header">
          <div className="w-full h-[180px] bg-gray-700 profile-header-background ">
            bg image
          </div>
          <nav className="profile-header-navbar w-full">
            <ul className="flex bg-gray-700 h-[60px] items-end p-2 gap-10 justify-between md:w-1/2 xl:w-1/3 profile-header-list">
              {ProfileButton.map((button, i: number) => (
                <li
                  key={i}
                  onClick={() => setCurrentBtn(button)}
                  className={
                    currentBtn == button
                      ? "transition profile-header-activeBtn"
                      : "profile-header-inActiveBtn"
                  }
                >
                  {button.name}
                </li>
              ))}
            </ul>
          </nav>
          <div className="absolute top-1/3 left-10 flex items-center gap-3 text-lg text-black profile-header-image">
            {currentUser?.image ? (
              <Image
                src={currentUser.image}
                alt={""}
                width={100}
                height={100}
                className="rounded-[100%]"
              />
            ) : (
              <div className="rounded-[100%] bg-black">a</div>
            )}
            <p>{currentUser?.name}</p>
          </div>
        </div>
        <div className="min-h-screen profile-body">{currentBtn.component}</div>
      </div>
    </div>
  );
}
