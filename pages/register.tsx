import React from "react";
import RegisterPage from "../components/Register";
import Head from "next/head";

const Register = () => {
  return (
    <>
      <Head>
        <title>Register - Mern Social Media App</title>
      </Head>
      <RegisterPage />
    </>
  );
};

export default Register;
