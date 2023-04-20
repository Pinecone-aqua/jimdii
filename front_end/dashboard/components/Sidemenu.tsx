import Navbar from "./Navbar";
import Profile from "./Profile";
import { RxExit } from "react-icons/rx";

export default function Sidemenu() {
  return (
    <div className="w-1/6 h-full bg-red-950 flex flex-col items-center justify-between pt-5 pb-5">
      <div className="h-2/5 flex flex-col items-center justify-between">
        <Profile />
        <Navbar />
      </div>

      <button className="w-4/5 h-10 bg-white rounded-lg flex justify-center items-center gap-3">
        <RxExit size={"1.4em"} /> Logout
      </button>
    </div>
  );
}
