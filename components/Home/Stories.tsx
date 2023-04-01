import React from "react";
import Story from "./Story";
import FbLogo from "./../../public/fb-logo.webp";

const stories = [{ name: "Kingsley", src: FbLogo, profile: FbLogo }];

const Stories = () => {
  return (
    <div className="flex justify-center mx-auto space-x-3 bg-white rounded-3xl">
      {stories.map((story) => (
        <Story name={story.name} src={story.src} profile={story.profile} />
      ))}
    </div>
  );
};

export default Stories;
