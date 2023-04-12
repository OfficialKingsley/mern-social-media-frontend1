import React, { useEffect } from "react";
import Navbar from "./Navbar";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-toolkit";
import { Router, useRouter } from "next/router";
import store from "../../state";
import { verifyToken } from "../../state/requests/auth";
import { unwrapResult } from "@reduxjs/toolkit";
import { refetchUser } from "../../state/requests/users";

const Layout = ({ children }) => {
  const authState = useAppSelector((state) => state.auth);
  const user = authState.user;
  const router = useRouter();

  const dispatch = useAppDispatch();

  useEffect(() => {
    const verifyUserToken = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        router.push("/login");
      } else {
        dispatch(verifyToken(token))
          .then(unwrapResult)
          .then((result) => {
            if (!result._id) {
              router.push("/login");
            }
          })
          .catch((error) => {
            router.push("/login");
          });
      }
    };
    verifyUserToken();
    dispatch(refetchUser());
  }, []);
  return (
    <>
      {authState.authState === "pending" ? (
        <div className="flex items-center justify-center w-screen h-screen text-9xl">
          Loading...
        </div>
      ) : (
        <>
          {user && (
            <div>
              <Navbar />
              {children}
            </div>
          )}
        </>
      )}
    </>
  );
};

export const getServerSideProps = () => {};

export default Layout;
