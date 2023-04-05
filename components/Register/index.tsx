import React, { useRef } from "react";
import { useAppDispatch } from "../../hooks/redux-toolkit";
import { login } from "../../state/requests/auth";
import { unwrapResult } from "@reduxjs/toolkit";
import { useRouter } from "next/router";

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
    <div className="flex h-screen text-center">
      <div className="flex-1 hidden max-w-md lg:block"></div>
      <div className="flex items-center justify-center flex-1">
        <div>
          <h1 className="text-6xl">Login</h1>
          <form action="">
            <div className="my-2 bg-gray-200">
              <input
                type="text"
                placeholder="Username"
                className="p-2 text-xl bg-transparent outline-none"
                required
                ref={usernameRef}
              />
            </div>
            <div className="my-2 bg-gray-200">
              <input
                type="password"
                placeholder="Password"
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
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
