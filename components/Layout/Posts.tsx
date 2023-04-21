import React, { useEffect } from "react";
import Post from "./Post";

const Posts = ({ posts }) => {
  return (
    <div className="w-full">
      {posts?.map((post) => (
        <div key={post?._id}>
          <Post post={post} />
        </div>
      ))}
    </div>
  );
};
// export async function getServerSideProps() {}

export default Posts;
