import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-toolkit";
import Post from "./Post";
import { getPosts } from "../../state/requests/posts";

const Posts = () => {
  const dispatch = useAppDispatch();
  const posts = useAppSelector((state) => state.posts).posts;

  useEffect(() => {
    dispatch(getPosts());
  }, []);
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
