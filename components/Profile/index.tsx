import React from "react";
import Layout from "../Layout";
import TimelineHeader from "./TimelineHeader";
import ProfileBody from "./ProfileBody";

const ProfilePage = () => {
  return (
    <Layout>
      <main className="h-screen overflow-y-auto">
        <TimelineHeader />
        <ProfileBody />
      </main>
    </Layout>
  );
};

export default ProfilePage;
