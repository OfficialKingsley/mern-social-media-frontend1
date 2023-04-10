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
  useEffect(() => {
    setLikeCount(post.likes.length);
  }, [post.likes]);
  return (
    <div className="bg-white rounded-2xl my-2 p-2">
      {/* Top */}
      <div className="flex gap-2 pb-2 border-b mb-2">
        <Link href={`/profile/${author?._id}`}>
          <Image src={author.profileImageUrl} alt="" width={40} height={40} />
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
          className="bg-blue-500 opacity-80 px-2 py-1 rounded-md flex-1 text-white"
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
          className="bg-yellow-500 opacity-80 px-2 py-1 rounded-md flex-1 text-white"
          onClick={() => {
            alert("Comment functionality not working yet");
          }}
        >
          Comment
        </button>
        <button
          className="bg-green-500 opacity-80 px-2 py-1 rounded-md flex-1 text-white"
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
