import Cookies from "js-cookie";
import Navbar from "./Navbar";
import Profile from "./Profile";
import { RxExit } from "react-icons/rx";
import { useUser } from "@/context/UserContext";

export default function Sidemenu() {
  const { logoutHandler } = useUser();
  return (
    <div className="w-1/6 h-full bg-red-950 flex flex-col items-center justify-between py-5">
      <div className="w-full flex flex-col items-center justify-between mt-4">
        <Profile />
        <Navbar />
      </div>

      <button
        className="w-4/5 h-10 bg-white rounded-lg flex justify-center items-center gap-3"
        onClick={logoutHandler}
      >
        <RxExit size={"1.4em"} /> Logout
      </button>
    </div>
  );
}
