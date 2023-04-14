import { useEffect, useState } from "react";
import { UserType } from "../util/types";

export default function Login() {
  const [registerbtn, setRegisterBtn] = useState<boolean>(false);
  const [getPass, setGetPass] = useState<string>("");
  const [getSecondPass, setGetSecondPass] = useState<string>("");
  const [confirmPass, setConfirmPass] = useState<boolean>(false);

  useEffect(() => {
    getSecondPass == getPass ? setConfirmPass(true) : setConfirmPass(false);
  }, [getSecondPass, getPass]);

  const btnStyle = " w-full h-20 bg-black text-white ";
  const inputStyle = "w-full p-1 text-black border-2 rounded-lg";

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function submitHandler(e: any) {
    e.preventDefault();
    if (registerbtn) {
      const register: UserType = {
        username: {
          firstname: e.target.firstname.value,
          lastname: e.target.lastname.value,
        },
        email: e.target.email.value,
        password: e.target.password.value,
      };
      console.log(register);
    }
  }

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="w-[400px] h-[500px] border-2 p-2 bg-balck rounded-xl">
        <div className="w-full h-full bg-white rounded-xl">
          <div className="w-full flex gap-1 ">
            <button
              className={`${
                registerbtn
                  ? btnStyle
                  : "bg-white text-black w-full rounded-l-lg"
              } `}
              onClick={() => setRegisterBtn(false)}
            >
              Login
            </button>
            <button
              className={`${
                registerbtn
                  ? "bg-white text-black w-full rounded-r-lg"
                  : btnStyle
              } `}
              onClick={() => setRegisterBtn(true)}
            >
              Register
            </button>
          </div>
          <form
            onSubmit={(e) =>
              confirmPass ? submitHandler(e) : e.preventDefault()
            }
            className="flex flex-col justify-between gap-2 items-center pt-10 p-3"
          >
            {!registerbtn ? (
              <>
                <input
                  type="text"
                  placeholder="Email"
                  className={inputStyle}
                  name="email"
                />
                <input
                  type="text"
                  placeholder="Password"
                  className={inputStyle}
                  name="password"
                />
              </>
            ) : (
              <>
                <p className="flex justify-between gap-2">
                  <input
                    type="text"
                    placeholder="Firstname"
                    className={inputStyle}
                    name="firstname"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Lastname"
                    className={inputStyle}
                    name="lastname"
                    required
                  />
                </p>

                <input
                  type="text"
                  placeholder="Email"
                  className={inputStyle}
                  name="email"
                  required
                />
                <select className={`${inputStyle}`} name="gender" required>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
                <input
                  type="text"
                  placeholder="Password"
                  className={inputStyle}
                  name="password"
                  onChange={(e) => setGetPass(e.target.value)}
                  required
                />
                <input
                  type="text"
                  placeholder="Confirm password"
                  className={` ${
                    confirmPass
                      ? inputStyle
                      : "w-full p-1 text-black rounded-lg border-2 border-rose-500"
                  }`}
                  onChange={(e) => setGetSecondPass(e.target.value)}
                  name="confirm"
                  required
                />
              </>
            )}
            <button
              type="submit"
              className={`w-4/6 border-2 bg-green-300 p-2 rounded-lg text-black m-4`}
            >
              {registerbtn ? "Register" : "Login"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
