import { useState } from "react";

export default function Login() {
  const [registerbtn, setRegisterBtn] = useState<boolean>(false);
  const btnStyle = "m-3 w-3/6 bg-white text-black";

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="w-[300px] h-[400px] border-2 p-2">
        <div className="w-full flex p-5">
          <button className={btnStyle} onClick={() => setRegisterBtn(false)}>
            Login
          </button>
          <button className={btnStyle} onClick={() => setRegisterBtn(true)}>
            Register
          </button>
        </div>
        {!registerbtn ? (
          <form action="" className="flex flex-col gap-2">
            <p>Login</p>
            <input type="text" />
            <input type="text" />
            <button>login</button>
          </form>
        ) : (
          <div>register</div>
        )}
      </div>
    </div>
  );
}
