import React, { useRef } from "react";
import { useAppDispatch } from "../../hooks/redux-toolkit";
import { login, register } from "../../state/requests/auth";
import { unwrapResult } from "@reduxjs/toolkit";
import { useRouter } from "next/router";
import Link from "next/link";
import LoginImage1 from "./../../public/login-image1.jpg";
import Image from "next/image";

const RegisterPage = () => {
  const dispatch = useAppDispatch();
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const usernameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);
  const router = useRouter();
  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (
      !passwordRef.current.value ||
      !confirmPasswordRef.current.value ||
      passwordRef.current.value !== confirmPasswordRef.current.value
    ) {
      alert("Both passwords are not the same");
      return;
    }
    const registerData = {
      firstName: firstNameRef.current.value,
      lastName: lastNameRef.current.value,
      username: usernameRef.current.value,
      email: emailRef.current.value,
      password: confirmPasswordRef.current.value,
    };

    dispatch(register(registerData))
      .then(unwrapResult)
      .then((result) => {
        alert("Login successful");
        router.push("/login");
      })
      .catch((err) => {
        console.log(err);
      });
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
                ref={firstNameRef}
              />
            </div>
            <div className="my-2 bg-gray-300">
              <input
                type="text"
                placeholder="Last Name"
                className="p-2 text-xl bg-transparent outline-none"
                required
                ref={lastNameRef}
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
                ref={emailRef}
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
                ref={confirmPasswordRef}
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
