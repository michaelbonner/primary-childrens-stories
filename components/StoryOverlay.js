import React from "react";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";

const StoryOverlay = ({ activeStory, setActiveStory }) => {
  return (
    <>
      <div
        className={
          activeStory ? "fixed z-20 inset-0 bg-gray-600 opacity-50" : "hidden"
        }
      />
      <div
        className={activeStory ? "fixed z-30 w-full py-8 inset-y-0" : "hidden"}
        onClick={() => {
          setActiveStory(null);
        }}
      >
        <div className="flex">
          <div
            className="bg-white w-full md:w-1/2 mx-auto py-8 px-4"
            dangerouslySetInnerHTML={{
              __html: documentToHtmlString(
                activeStory && activeStory.fields
                  ? activeStory.fields.story
                  : ""
              )
            }}
          />
          <a href={`/story/${activeStory && activeStory.sys.id}`}>Share</a>
        </div>
      </div>
    </>
  );
};
export default StoryOverlay;
