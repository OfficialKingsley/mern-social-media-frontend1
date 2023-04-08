import React, { useEffect } from "react";
import Navbar from "./Navbar";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-toolkit";
import { Router, useRouter } from "next/router";
import store from "../../state";
import { verifyToken } from "../../state/requests/auth";
import { unwrapResult } from "@reduxjs/toolkit";

const Layout = ({ children }) => {
  const authState = useAppSelector((state) => state.auth);
  const user = authState.user;
  const router = useRouter();

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, []);
  return (
    user && (
      <div>
        <Navbar />
        {children}
      </div>
    )
  );
};

export const getServerSideProps = () => {
  const token = localStorage.getItem("token");
  console.log(token);

  if (!token) {
    console.log("no token");
  } else {
    store.dispatch(verifyToken(token));
  }
};

export default Layout;
