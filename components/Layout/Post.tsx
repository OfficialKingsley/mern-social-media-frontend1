import React, { useEffect, useState } from "react";
import { IPost } from "../../types/IPost";
import Image from "next/image";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-toolkit";
import { likePost } from "../../state/requests/posts";
import { unwrapResult } from "@reduxjs/toolkit";

const Post = ({ post }: { post: IPost }) => {
  const { user: author } = post;
  const user = useAppSelector((state) => state.auth).user;
  const dispatch = useAppDispatch();
  const [likeCount, setLikeCount] = useState(0);
  console.log(post.imageUrl);
  useEffect(() => {
    setLikeCount(post.likes.length);
  }, [post.likes]);
  return (
    <div className="p-2 my-2 bg-white rounded-2xl">
      {/* Top */}
      <div className="flex gap-2 pb-2 mb-2 border-b">
        <Link href={`/profile/${author?._id}`}>
          <Image
            src={author.profileImageUrl}
            alt=""
            width={40}
            height={40}
            className="w-10 h-10 rounded-full"
          />
        </Link>
        <div className="flex flex-col">
          <cite>{author?.fullName}</cite>
          <small>{post.updatedAt}</small>
        </div>
      </div>

      <p>{post.text}</p>
      {post.imageUrl && (
        <div>
          <img src={post.imageUrl} alt={""} className="w-full h-full" />
        </div>
      )}
      <div>
        <small>{likeCount} likes</small>
      </div>
      <div className="flex gap-1 my-2">
        <button
          className="flex-1 px-2 py-1 text-white bg-blue-500 rounded-md opacity-80"
          onClick={() => {
            dispatch(likePost({ userId: user?._id, postId: post._id }))
              .then(unwrapResult)
              .then((result) => {
                setLikeCount(result);
              });
          }}
        >
          Like
        </button>
        <button
          className="flex-1 px-2 py-1 text-white bg-yellow-500 rounded-md opacity-80"
          onClick={() => {
            alert("Comment functionality not working yet");
          }}
        >
          Comment
        </button>
        <button
          className="flex-1 px-2 py-1 text-white bg-green-500 rounded-md opacity-80"
          onClick={() => {
            alert("Share functionality not working yet");
          }}
        >
          Share
        </button>
      </div>
    </div>
  );
};

export default Post;
