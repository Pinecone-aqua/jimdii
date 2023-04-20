import Navbar from "./Navbar";
import Profile from "./Profile";

export default function Sidemenu() {
  return (
    <div className="w-1/6 h-full bg-red-300 flex flex-col items-center justify-between pt-5 pb-5">
      <div className="h-2/5 flex flex-col items-center justify-between">
        <Profile />
        <Navbar />
      </div>
      <button>Logout</button>
    </div>
  );
}
