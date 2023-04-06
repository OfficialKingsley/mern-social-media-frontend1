import React, { useRef } from "react";
import { useAppDispatch } from "../../hooks/redux-toolkit";
import { login } from "../../state/requests/auth";
import { unwrapResult } from "@reduxjs/toolkit";
import { useRouter } from "next/router";
import Link from "next/link";
import LoginImage1 from "./../../public/login-image1.jpg";
import Image from "next/image";

const RegisterPage = () => {
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
    console.log(loginData);
    dispatch(login(loginData))
      .then(unwrapResult)
      .then((user) => {
        router.push("/");
      })
      .catch((err) => {
        console.log(err);
      });
    // usernameRef.current.value = "";
    // passwordRef.current.value = "";
  };
  return (
    <div className="flex h-screen">
      <div className="flex-1 hidden lg:block">
        <Image src={LoginImage1} alt="login" className="h-full" />
      </div>
      <div className="flex items-center justify-center flex-1">
        <div className="flex flex-col items-center w-full h-full gap-3 px-16 py-4 justify-evenly">
          <h1 className="w-full text-4xl">Register</h1>
          <form action="" className="flex flex-col w-full max-w-lg">
            <div className="my-2 bg-gray-300">
              <input
                type="text"
                placeholder="First Name"
                className="p-2 text-xl bg-transparent outline-none"
                required
                // ref={usernameRef}
              />
            </div>
            <div className="my-2 bg-gray-300">
              <input
                type="text"
                placeholder="Last Name"
                className="p-2 text-xl bg-transparent outline-none"
                required
                ref={usernameRef}
              />
            </div>
            <div className="my-2 bg-gray-300">
              <input
                type="text"
                placeholder="Username"
                className="p-2 text-xl bg-transparent outline-none"
                required
                ref={usernameRef}
              />
            </div>
            <div className="my-2 bg-gray-300">
              <input
                type="email"
                placeholder="Email"
                className="p-2 text-xl bg-transparent outline-none"
                required
                ref={usernameRef}
              />
            </div>

            <div className="my-2 bg-gray-300">
              <input
                type="password"
                placeholder="Password"
                className="p-2 text-xl bg-transparent outline-none"
                required
                ref={passwordRef}
              />
            </div>
            <div className="my-2 bg-gray-300">
              <input
                type="password"
                placeholder="Confirm Password"
                className="p-2 text-xl bg-transparent outline-none"
                required
                ref={passwordRef}
              />
            </div>
            <div className="block w-full text-2xl text-white bg-green-500 rounded-sm cursor-pointer">
              <button
                type="submit"
                className="w-full h-full p-2 bg-transparent"
                onClick={handleSubmit}
              >
                Register
              </button>
            </div>

            <p className="w-full ">
              Already have an account?{" "}
              <Link href="/login" className="text-blue-500">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
