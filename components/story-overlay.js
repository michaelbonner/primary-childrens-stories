import React, { useState, useEffect, useRef } from "react";
import { FacebookShareButton, TwitterShareButton } from "react-share";
import { toast } from "react-toastify";
import Facebook from "./facebook";
import Twitter from "./twitter";
import LinkIcon from "./link-icon";
import contentfulRichText from "shared/contentfulRichText";
import contentfulPrintMedia from "shared/contentfulPrintMedia";
import youtubeEmbed from "shared/youtubeEmbed";
import getHostName from "shared/getHostName";

const StoryOverlay = ({
  activeCategory,
  activeStory,
  mainStoryContent,
  setActiveStory,
  stories,
  thankYouForSharingContent,
}) => {
  const [shareOpen, setShareOpen] = useState(false);
  const [media, setMedia] = useState([]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [url, setUrl] = useState("");
  const [footerText, setFooterText] = useState("");
  const [willShowThankYou, setWillShowThankYou] = useState(false);
  const scrollDiv = useRef(null);

  const scrollToTop = (ref) => (ref.current.scrollTop = 0);

  const thankYouMessage = thankYouForSharingContent.content[0].content[0].value;

  const onFocus = () => {
    if (willShowThankYou) {
      toast.success(thankYouMessage, {});
      setWillShowThankYou(false);
    }
  };

  useEffect(() => {
    window.addEventListener("focus", onFocus);

    return () => {
      window.removeEventListener("focus", onFocus);
    };
  });

  const nextStory = () => {
    const currentIndex = stories.findIndex(
      (story) => story.fields.title === activeStory.fields.title
    );
    if (currentIndex === stories.length - 1) {
      setActiveStory(stories[0]);
    } else {
      setActiveStory(stories[currentIndex + 1]);
    }
    scrollToTop(scrollDiv);
  };

  const prevStory = () => {
    const currentIndex = stories.findIndex(
      (story) => story.fields.title === activeStory.fields.title
    );
    if (currentIndex) {
      setActiveStory(stories[currentIndex - 1]);
    } else {
      setActiveStory(stories[stories.length - 1]);
    }
    scrollToTop(scrollDiv);
  };

  useEffect(() => {
    if (
      activeStory &&
      activeStory.fields &&
      activeStory.fields.media &&
      activeStory.fields.media.length
    ) {
      setMedia(
        activeStory.fields.media.map((media) => {
          if (!media.fields) {
            return;
          }
          return {
            type: media.fields.file.contentType,
            url: media.fields.file.url,
            title: media.fields.title,
            details: media.fields.file.details,
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
        contentfulRichText(
          activeStory && activeStory.fields ? activeStory.fields.story : ""
        )
      );

      if (activeCategory !== "all") {
        setFooterText(
          contentfulRichText(
            activeStory.fields.categories.filter(
              (category) => category.sys.id === activeCategory
            )[0].fields.storyFooterText
          )
        );
      } else {
        setFooterText(
          contentfulRichText(
            activeStory && activeStory.fields
              ? activeStory.fields.categories[0].fields.storyFooterText
              : ""
          )
        );
      }
      setUrl(
        `https://${getHostName()}/${activeStory && activeStory.fields.slug}`
      );
    } else {
      setTitle(``);
      setBody(
        `
        ${contentfulRichText(mainStoryContent)}
        <div>
        <a
            href="https://intermountainhealthcare.org/locations/primary-childrens-hospital/"
            title="Primary Children's Website"
            target="_blank"
          >
            <img
              alt="Primary Children's Hospital"
              class="max-w-xs mx-auto"
              src="/images/primary-childrens-hospital-logo.svg"
            />
          </a>
        </div>
        `
      );
      setFooterText(
        `<p>
          <a
            href="https://intermountainhealthcare.org/locations/primary-childrens-hospital/"
            title="Primary Children's Website"
            target="_blank"
          >
            Learn how our services can help your child here.
          </a>
        </p>`
      );
      setUrl(getHostName());
    }
  }, [activeStory]);

  return (
    activeStory && (
      <>
        <div
          className={`fixed z-20 inset-0 bg-white opacity-50`}
          onClick={() => {
            setShareOpen(false);
            setActiveStory(null);
          }}
        />
        <div className={"fixed z-30 w-full py-8 md:py-16 inset-y-0"}>
          <div
            className="flex h-full px-3"
            onClick={(e) => {
              setShareOpen(false);
              setActiveStory(null);
            }}
          >
            <div
              className="relative bg-white w-full md:w-2/3 xl:w-2/5 mx-auto py-8 md:py-8 px-8 md:px-16 rounded-lg shadow-md"
              onClick={(e) => {
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
                      className="inline-block py-3 md:pt-8 md:pb-3 px-2 md:px-4 bg-blue-500 text-blue-100 text-sm font-bold rounded-b-lg shadow-md z-50 focus:outline-none"
                      onClick={() => {
                        setShareOpen(!shareOpen);
                      }}
                    >
                      Share
                    </button>
                    <FacebookShareButton
                      className={`${
                        shareOpen ? "flex" : "hidden"
                      } items-center justify-center -mt-1 pt-3 pb-2 px-4 bg-facebook-500 hover:bg-facebook-600 text-white text-sm uppercase rounded-b-lg shadow-md z-40 focus:outline-none`}
                      url={url}
                      resetButtonStyle={false}
                      onClick={() => setWillShowThankYou(true)}
                    >
                      <Facebook className="w-8 fill-current" />
                    </FacebookShareButton>
                    <TwitterShareButton
                      className={`${
                        shareOpen ? "flex" : "hidden"
                      } items-center justify-center -mt-1 pt-3 pb-2 px-4 bg-twitter-500 hover:bg-twitter-600 text-white text-sm uppercase rounded-b-lg shadow-md z-30 focus:outline-none`}
                      url={url}
                      resetButtonStyle={false}
                      onClick={() => setWillShowThankYou(true)}
                    >
                      <Twitter className="w-8 fill-current" />
                    </TwitterShareButton>
                    <button
                      className={`${
                        shareOpen ? "flex" : "hidden"
                      } flex items-center justify-center -mt-1 pt-3 pb-2 px-4 bg-gray-400 hover:bg-gray-500 text-gray-600 text-sm uppercase rounded-b-lg shadow-md z-20 focus:outline-none`}
                      onClick={() => {
                        setWillShowThankYou(true);
                        window.open(url);
                      }}
                    >
                      <LinkIcon className="w-8 p-1 fill-current" />
                    </button>
                  </div>
                  <div className="h-full pt-12 flex flex-col">
                    <div className="overflow-y-scroll flex-1" ref={scrollDiv}>
                      <div className="text-xl font-bold leading-relaxed mb-6">
                        {title}
                      </div>
                      {activeStory &&
                        activeStory.fields &&
                        activeStory.fields.youTubeLink &&
                        youtubeEmbed(activeStory.fields.youTubeLink)}
                      {media.map((item) => {
                        return contentfulPrintMedia(item);
                      })}
                      {activeStory && activeStory === "main" && (
                        <div className="pb-2">
                          {youtubeEmbed("https://youtu.be/25KtzDQIFxA")}
                        </div>
                      )}
                      <div
                        className="story-content text-base leading-relaxed mt-4"
                        dangerouslySetInnerHTML={{
                          __html: body,
                        }}
                      />
                      <div className="flex justify-center text-center mb-8">
                        <a
                          href="https://intermountainhealthcare.org/locations/primary-childrens-hospital/here-kids-win-stories/"
                          target="_blank"
                          className="inline-block mt-6 bg-blue-500 text-blue-100 mt-2 py-3 px-12 rounded"
                        >
                          Share Your Story
                        </a>
                      </div>
                    </div>
                    <div>
                      <div
                        className="story-content"
                        dangerouslySetInnerHTML={{
                          __html: footerText,
                        }}
                      />
                    </div>
                    {activeStory && activeStory !== "main" && (
                      <div className="w-full flex justify-between items-center mt-4 text-blue-400 text-sm">
                        <button
                          onClick={prevStory}
                          className="inline-block flex items-center stroke-current justify-start focus:outline-none focus:text-blue-900"
                        >
                          <svg
                            className="w-5 h-5"
                            xmlns="http://www.w3.org/2000/svg"
                            width="512"
                            height="512"
                            viewBox="0 0 512 512"
                          >
                            <title>Previous Story</title>
                            <polyline
                              points="244 400 100 256 244 112"
                              style={{
                                fill: "none",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: "48px",
                              }}
                            />
                            <line
                              x1="120"
                              y1="256"
                              x2="412"
                              y2="256"
                              style={{
                                fill: "none",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: "48px",
                              }}
                            />
                          </svg>
                          <span>Previous Story</span>
                        </button>
                        <button
                          onClick={nextStory}
                          className="inline-block flex items-center stroke-current justify-end focus:outline-none focus:text-blue-900"
                        >
                          <span>Next Story</span>
                          <svg
                            className="w-5 h-5"
                            xmlns="http://www.w3.org/2000/svg"
                            width="512"
                            height="512"
                            viewBox="0 0 512 512"
                          >
                            <title>Next Story</title>
                            <polyline
                              points="268 112 412 256 268 400"
                              style={{
                                fill: "none",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: "48px",
                              }}
                            />
                            <line
                              x1="392"
                              y1="256"
                              x2="100"
                              y2="256"
                              style={{
                                fill: "none",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: "48px",
                              }}
                            />
                          </svg>
                        </button>
                      </div>
                    )}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </>
    )
  );
};
export default StoryOverlay;
