import React, { useState, useEffect } from "react";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { FacebookShareButton, TwitterShareButton } from "react-share";
import Facebook from "./facebook";
import Twitter from "./twitter";

const StoryOverlay = ({ activeStory, setActiveStory, hostname }) => {
  const [shareOpen, setShareOpen] = useState(false);
  const [media, setMedia] = useState([]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [url, setUrl] = useState("");
  const [footerText, setFooterText] = useState("");

  useEffect(() => {
    if (
      activeStory &&
      activeStory.fields &&
      activeStory.fields.media &&
      activeStory.fields.media.length
    ) {
      setMedia(
        activeStory.fields.media.map(media => {
          if (!media.fields) {
            return;
          }
          return {
            type: media.fields.file.contentType,
            url: media.fields.file.url,
            title: media.fields.title,
            details: media.fields.file.details
          };
        })
      );
    } else {
      setMedia([]);
    }

    if (activeStory && activeStory !== "main") {
      setTitle(
        activeStory && activeStory.fields ? activeStory.fields.title : ""
      );
      setBody(
        documentToHtmlString(
          activeStory && activeStory.fields ? activeStory.fields.story : ""
        )
      );
      setFooterText(
        documentToHtmlString(
          activeStory && activeStory.fields
            ? activeStory.fields.categories[0].fields.storyFooterText
            : ""
        )
      );
      setUrl(`https://${hostname}/story/${activeStory && activeStory.sys.id}`);
    } else {
      setTitle(``);
      setBody(
        `
        <div>
        <img
          alt="Primary Children's Hospital"
          class="max-w-xs mx-auto"
          src="/images/primary-childrens-hospital-logo.svg"
        />
        </div>
        <p>
          Primary Children’s Hospital is recognized as one of the nation’s best 
          children’s hospitals. For nearly a century, we’ve helped countless kids 
          win. Located in Salt Lake City, Utah, we provide more than 60 medical 
          and surgical pediatric specialties and offer care to more than 1 million 
          children living in a 400,000 square-mile service area—one of the largest 
          geographic areas of any children’s hospital.
        </p>`
      );
      setFooterText(
        `<p>
          <a
            href="https://intermountainhealthcare.org/locations/primary-childrens-hospital/"
            title="Primary Children's Website"
          >
            Learn how our services can help your child here.
          </a>
        </p>`
      );
      setUrl(hostname);
    }
  }, [activeStory]);

  const printMedia = media => {
    console.log(media);
    if (!media) {
      return;
    }
    if (media.type.startsWith("image")) {
      return <img key={media.url} src={media.url} title={media.title} />;
    }
    if (media.type.startsWith("video")) {
      return (
        <video
          width="100%"
          key={media.url}
          controls
          controlsList="nodownload"
          onContextMenu={e => e.preventDefault()}
        >
          <source src={media.url} />
        </video>
      );
    }
    return media.url;
  };

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
        className={
          activeStory ? "fixed z-30 w-full py-8 md:py-16 inset-y-0" : "hidden"
        }
      >
        <div
          className="flex h-screen md:pb-32 pb-12 px-3"
          onClick={e => {
            setActiveStory(null);
          }}
        >
          <div
            className="relative bg-white w-full md:w-2/3 xl:w-1/2 mx-auto py-8 md:py-8 px-8 md:px-16 rounded-lg shadow-md"
            onClick={e => {
              e.stopPropagation();
            }}
          >
            <div className="absolute left:0 lg:right-0 top-0 -ml-6 lg:ml-0 mt-2 lg:mt-1 lg:-mr-12">
              <button
                className="lg:-mr-32 bg-white px-6 py-4 shadow-lg rounded-lg font-bold text-gray-600"
                onClick={() => {
                  setShareOpen(false);
                  setActiveStory(null);
                }}
              >
                X
              </button>
            </div>
            {activeStory && (
              <>
                <div className="absolute right-0 top-0 flex flex-col justify-end mr-8 md:mr-16 w-24 text-center">
                  <button
                    className="inline-block py-3 md:py-6 px-2 md:px-4 bg-gray-200 text-gray-600 text-sm uppercase rounded-b-lg shadow-md z-30 focus:outline-none"
                    onClick={() => {
                      setShareOpen(!shareOpen);
                    }}
                  >
                    Share
                  </button>
                  <FacebookShareButton
                    className={`${
                      shareOpen ? "flex" : "hidden"
                    } items-center justify-center -mt-1 pt-3 pb-2 px-4 bg-facebook-500 hover:bg-facebook-600 text-white text-sm uppercase rounded-b-lg shadow-md z-20 focus:outline-none`}
                    url={url}
                    resetButtonStyle={false}
                  >
                    <Facebook className="w-8 fill-current" />
                  </FacebookShareButton>
                  <TwitterShareButton
                    className={`${
                      shareOpen ? "flex" : "hidden"
                    } items-center justify-center -mt-1 pt-3 pb-2 px-4 bg-twitter-500 hover:bg-twitter-600 text-white text-sm uppercase rounded-b-lg shadow-md z-20 focus:outline-none`}
                    url={url}
                    resetButtonStyle={false}
                  >
                    <Twitter className="w-8 fill-current" />
                  </TwitterShareButton>
                </div>
                <div className="h-full pt-12 flex flex-col">
                  <div className="story-content overflow-y-scroll flex-1">
                    <div className="text-xl font-bold leading-relaxed mb-6">
                      {title}
                    </div>
                    {media.map(item => {
                      return printMedia(item);
                    })}
                    <div
                      className="text-base leading-relaxed mt-4"
                      dangerouslySetInnerHTML={{
                        __html: body
                      }}
                    />
                  </div>
                  <div className="mt-6">
                    <div
                      className="story-content"
                      dangerouslySetInnerHTML={{
                        __html: footerText
                      }}
                    />
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default StoryOverlay;
