import React, { useState, useEffect } from "react";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { FacebookShareButton, TwitterShareButton } from "react-share";
import Facebook from "./facebook";
import Twitter from "./twitter";

const StoryOverlay = ({ activeStory, setActiveStory }) => {
  const [shareOpen, setShareOpen] = useState(false);
  const [hostName, setHostName] = useState("");

  useEffect(() => {
    setHostName(
      process.browser
        ? `https://${window.location.hostname}`
        : "https://primary-childrens-stories.now.sh"
    );
  });

  return (
    <>
      <div
        className={
          activeStory ? "fixed z-20 inset-0 bg-gray-600 opacity-50" : "hidden"
        }
        onClick={() => {
          setActiveStory(null);
        }}
      />
      <div
        className={activeStory ? "fixed z-30 w-full py-8 inset-y-0" : "hidden"}
      >
        <div className="flex h-screen md:pb-32">
          <div className="relative bg-white w-full md:w-2/3 xl:w-1/2 mx-auto py-8 md:py-8 px-8 md:px-16 rounded-lg shadow-md">
            <div className="absolute left:0 lg:right-0 top-0 -ml-6 lg:ml-0 mt-2 lg:mt-1 lg:-mr-12">
              <button
                className="lg:-mr-32 bg-white px-6 py-4 shadow-lg rounded-lg font-bold text-gray-600"
                onClick={() => {
                  setActiveStory(null);
                }}
              >
                X
              </button>
            </div>
            <div className="absolute right-0 top-0 flex flex-col justify-end mr-8 md:mr-16 w-24 text-center">
              <button
                className="inline-block py-6 px-4 bg-gray-200 text-gray-600 text-sm uppercase rounded-b-lg shadow-md z-30"
                onClick={() => {
                  setShareOpen(!shareOpen);
                }}
              >
                Share
              </button>
              <FacebookShareButton
                className={`${
                  shareOpen ? "flex" : "hidden"
                } items-center justify-center -mt-1 pt-3 pb-2 px-4 bg-gray-300 hover:bg-gray-400 text-gray-600 text-sm uppercase rounded-b-lg shadow-md z-20`}
                url={`${hostName}/story/${activeStory && activeStory.sys.id}`}
              >
                <Facebook className="w-8 fill-current" />
              </FacebookShareButton>
              <TwitterShareButton
                className={`${
                  shareOpen ? "flex" : "hidden"
                } items-center justify-center -mt-1 pt-3 pb-2 px-4 bg-gray-300 hover:bg-gray-400 text-gray-600 text-sm uppercase rounded-b-lg shadow-md z-10`}
                url={`${hostName}/story/${activeStory && activeStory.sys.id}`}
              >
                <Twitter className="w-8 fill-current" />
              </TwitterShareButton>
            </div>
            <div className="h-full py-12">
              <div
                className="story-content h-full overflow-y-scroll"
                dangerouslySetInnerHTML={{
                  __html: documentToHtmlString(
                    activeStory && activeStory.fields
                      ? activeStory.fields.story
                      : ""
                  )
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default StoryOverlay;
