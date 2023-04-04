import React from "react";
import Layout from "../Layout";
import Feed from "./Feed";
import Sidebar from "./Sidebar";
import Widgets from "./Widgets";

const HomePage = () => {
  return (
    <Layout>
      <main className="flex h-screen bg-gray-200">
        <Sidebar />
        <Feed />
        <Widgets />
      </main>
    </Layout>
  );
};

export default HomePage;
