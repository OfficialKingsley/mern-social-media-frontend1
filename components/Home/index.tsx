import React, { useEffect } from "react";
import Layout from "../Layout";
import Feed from "./Feed";
import Sidebar from "./Sidebar";
import Widgets from "./Widgets";

const HomePage = () => {
  return (
    <Layout>
      <main className="flex bg-gray-200 h-screen">
        <Sidebar />
        <Feed />
        <Widgets />
      </main>
    </Layout>
  );
};

export default HomePage;
