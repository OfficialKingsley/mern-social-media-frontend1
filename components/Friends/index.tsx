import React from "react";
import Layout from "../Layout";
import { useAppSelector } from "../../hooks/redux-toolkit";
import Link from "next/link";

const FriendsPage = () => {
  const friends = useAppSelector((state) => state.auth.user).friends;
  return (
    <div>
      <Layout activePage="friends">
        <main className="p-4 bg-gray-200">
          <section>
            <h1>Friends...</h1>
            {friends.map((friend) => (
              <figure className="w-56 ">
                <Link href={`/profile/${friend._id}`}>
                  <img src={friend.profileImageUrl} alt={friend.fullName} />
                </Link>

                <figcaption>
                  <Link href={`/profile/${friend._id}`}>
                    <h2 className="text-xl">{friend.fullName}</h2>
                  </Link>
                </figcaption>
              </figure>
            ))}
          </section>
          <section></section>
        </main>
      </Layout>
    </div>
  );
};

export default FriendsPage;
