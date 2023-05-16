import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { FaGoogle } from "react-icons/fa";

export default function signUp(): JSX.Element {
  const [signBtn, setsignBtn] = useState<boolean>(false);
  const router = useRouter();
  function googleLoginHandler() {
    axios
      .get(`${process.env.NEXT_PUBLIC_BACKEND_URL}google-login`)
      .then((res) => {
        router.push(res.data);
      });
  }
  return (
    <div className="bg-black text-white w-full h-full signUpPage ">
      <div className="w-full flex justify-end">
        <button className="text-2xl mr-[20px]" onClick={() => router.back()}>
          X
        </button>
      </div>
      <div className="flex justify-center items-center h-[80vh]">
        {!signBtn ? (
          <div>
            <div className="flex justify-center items-center">
              <h2 className="text-[60px] leading-[48px] font-bold my-[10px]">
                Sign Up
              </h2>
            </div>

            <div className="flex w-full justify-center  gap-[5px]  items-center my-[10px]">
              <p>Already a member?</p>
              <button
                className="text-[#4D9799]"
                onClick={() => setsignBtn(true)}
              >
                Log In
              </button>
            </div>
            <button
              onClick={googleLoginHandler}
              className="signbutton flex items-center relative"
            >
              <FaGoogle className="absolute left-5" />
              <div className="flex justify-center w-full">
                <span>Sign Up with Google</span>
              </div>
            </button>
            <button
              onClick={googleLoginHandler}
              className="signFBbutton  flex items-center relative "
            >
              <FaGoogle className="absolute left-5" />
              <div className="flex justify-center w-full">
                <span className="text-white">Sign Up with Facebook</span>
              </div>
            </button>
            <div className="flex justify-center items-center my-[5px]">
              <span>Or</span>
            </div>
            <Link href={`/login`}>
              <button className="border w-[320px] h-[40px] flex justify-center items-center">
                <span>Sign Up with email</span>
              </button>
            </Link>
          </div>
        ) : (
          <div>
            <div className="flex justify-center items-center">
              <h2 className="text-[60px] leading-[48px] font-bold my-[10px]">
                Login
              </h2>
            </div>

            <div className="flex w-full justify-center  gap-[5px]  items-center my-[10px]">
              <p>New to this site?</p>
              <button
                className="text-[#4D9799]"
                onClick={() => setsignBtn(false)}
              >
                Sign Up
              </button>
            </div>
            <button
              onClick={googleLoginHandler}
              className="signbutton flex items-center relative"
            >
              <FaGoogle className="absolute left-5" />
              <div className="flex justify-center w-full">
                <span>Login with Google</span>
              </div>
            </button>
            <button
              onClick={googleLoginHandler}
              className="signFBbutton flex items-center relative"
            >
              <FaGoogle className="absolute left-5" />
              <div className="flex justify-center w-full">
                <span className="text-white">Login with Facebook</span>
              </div>
            </button>
            <div className="flex justify-center items-center my-[5px]">
              <span>Or </span>
            </div>

            <Link href={`/login`}>
              <button className="border w-[320px] h-[40px] flex justify-center items-center">
                <span>Login with email</span>
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
