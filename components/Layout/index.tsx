import React, { useEffect } from "react";
import Navbar from "./Navbar";
import { useAppSelector } from "../../hooks/redux-toolkit";
import { useRouter } from "next/router";

const Layout = ({ children }) => {
  const authState = useAppSelector((state) => state.authState);
  const user = authState.user;
  const router = useRouter();
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

export default Layout;
