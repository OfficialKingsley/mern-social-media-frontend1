import React, { useEffect } from "react";
import Post from "./Post";

const Posts = ({ posts }) => {
  return (
    <>
      {posts?.map((post) => (
        <div key={post?._id}>
          <Post post={post} />
        </div>
      ))}
    </>
  );
};
// export async function getServerSideProps() {}

export default Posts;
