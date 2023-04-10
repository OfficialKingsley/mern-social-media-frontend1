import React, { useEffect, useState } from "react";
import Layout from "../Layout";
import TimelineHeader from "./TimelineHeader";
import ProfileBody from "./ProfileBody";
import { backendUrl } from "../../variables/environment-variables";

import { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";
import { IUser } from "../../types/IUser";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-toolkit";
import { getProfileUser } from "../../state/requests/users";

const ProfilePage = () => {
  const router = useRouter();
  const { id } = router.query;
  const dispatch = useAppDispatch();
  const foundUser = useAppSelector((state) => state.users.profileUser);
  useEffect(() => {
    dispatch(getProfileUser(String(id)));
  }, []);

  return (
    <Layout>
      {foundUser && (
        <main className="h-screen overflow-y-auto">
          <TimelineHeader foundUser={foundUser} />
          <ProfileBody foundUser={foundUser} />
        </main>
      )}
    </Layout>
  );
};

export default ProfilePage;
