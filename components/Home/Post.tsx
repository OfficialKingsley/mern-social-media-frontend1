import React from "react";
import { IPost } from "../../types/IPost";
import Image from "next/image";
import Link from "next/link";

const Post = ({ post }: { post: IPost }) => {
  const { user: author } = post;
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
      <div className="flex gap-1 my-2">
        <button className="bg-blue-500 opacity-80 px-2 py-1 rounded-md flex-1 text-white">
          Like
        </button>
        <button className="bg-yellow-500 opacity-80 px-2 py-1 rounded-md flex-1 text-white">
          Comment
        </button>
        <button className="bg-green-500 opacity-80 px-2 py-1 rounded-md flex-1 text-white">
          Share
        </button>
      </div>
    </div>
  );
};

export default Post;
