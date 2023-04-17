import React, { useRef, useState } from "react";
import { useAppDispatch } from "../../hooks/redux-toolkit";
import { login } from "../../state/requests/auth";
import { unwrapResult } from "@reduxjs/toolkit";
import { useRouter } from "next/router";
import Link from "next/link";
import LoginImage1 from "./../../public/login-image1.jpg";
import Image from "next/image";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useAppDispatch();
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const router = useRouter();
  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const loginData = {
      username: usernameRef.current.value,
      password: passwordRef.current.value,
    };
    dispatch(login(loginData))
      .then(unwrapResult)
      .then((user) => {
        alert("Login Successful");
        router.push("/");
      })
      .catch((err) => {
        console.log(err);
        alert(err.message);
      });
    usernameRef.current.value = "";
    passwordRef.current.value = "";
  };
  return (
    <div className="flex h-screen">
      <div className="flex-1 hidden lg:flex bg-blue-500 items-center justify-center lg:flex-col max-w-lg gap-4">
        <h2 className="text-4xl text-white font-bold">
          Don't Have an Account?
        </h2>
        <Link
          href={"/register"}
          className="bg-white text-black px-4 py-2 block w-fit rounded-full font-bold"
        >
          Register
        </Link>
      </div>
      <div className="flex items-center justify-center flex-1">
        <div className="flex flex-col items-center w-full h-full gap-3 px-16 py-4 justify-center">
          <h1 className="w-full text-4xl text-center font-bold">Login</h1>
          <form action="" className="self-center w-full max-w-lg mx-auto">
            <div className="my-2 bg-gray-300">
              <input
                type="text"
                placeholder="Username"
                className="p-2 text-xl bg-transparent outline-none w-full"
                required
                ref={usernameRef}
              />
            </div>
            <div className="my-2 bg-gray-300  flex items-center px-2">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="p-2 text-xl bg-transparent outline-none flex-1"
                required
                ref={passwordRef}
              />
              <span
                onClick={() => {
                  setShowPassword(!showPassword);
                }}
                className="cursor-pointer"
              >
                {showPassword ? (
                  <EyeSlashIcon width={20} />
                ) : (
                  <EyeIcon width={20} />
                )}
              </span>
            </div>
            <div className="block w-fit px-4 text-2xl text-white bg-blue-500 rounded-full cursor-pointer">
              <button
                type="submit"
                className="w-full h-full p-2 bg-transparent"
                onClick={handleSubmit}
              >
                Login
              </button>
            </div>
            <p className="w-full">
              <Link href="" className="w-full text-blue-500">
                Forgot Password?
              </Link>
            </p>
            <p className="w-full block lg:hidden">
              Don't have an account?{" "}
              <Link href="/register" className="text-blue-500">
                Register
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
