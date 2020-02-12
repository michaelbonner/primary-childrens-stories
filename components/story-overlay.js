import React, { useState, useEffect } from "react";
import { FacebookShareButton, TwitterShareButton } from "react-share";
import { toast } from "react-toastify";
import Facebook from "./facebook";
import Twitter from "./twitter";
import LinkIcon from "./link-icon";
import contentfulRichText from "../shared/contentfulRichText";
import contentfulPrintMedia from "../shared/contentfulPrintMedia";
import youtubeEmbed from "../shared/youtubeEmbed";

const StoryOverlay = ({
  activeCategory,
  activeStory,
  mainStoryContent,
  setActiveStory,
  thankYouForSharingContent,
  hostname
}) => {
  const [shareOpen, setShareOpen] = useState(false);
  const [media, setMedia] = useState([]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [url, setUrl] = useState("");
  const [footerText, setFooterText] = useState("");
  const [willShowThankYou, setWillShowThankYou] = useState(false);

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
        contentfulRichText(
          activeStory && activeStory.fields ? activeStory.fields.story : ""
        )
      );

      if (activeCategory !== "all") {
        setFooterText(
          contentfulRichText(
            activeStory.fields.categories.filter(
              category => category.sys.id === activeCategory
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
      setUrl(`https://${hostname}/story/${activeStory && activeStory.sys.id}`);
    } else {
      setTitle(``);
      setBody(
        `
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
        ${contentfulRichText(mainStoryContent)}
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
      setUrl(hostname);
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
            className="flex h-full md:pb-32 px-3"
            onClick={e => {
              setShareOpen(false);
              setActiveStory(null);
            }}
          >
            <div
              className="relative bg-white w-full md:w-2/3 xl:w-2/5 mx-auto py-8 md:py-8 px-8 md:px-16 rounded-lg shadow-md"
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
                    <div className="story-content overflow-y-scroll flex-1">
                      <div className="text-xl font-bold leading-relaxed mb-6">
                        {title}
                      </div>
                      {activeStory &&
                        activeStory.fields &&
                        activeStory.fields.youTubeLink &&
                        youtubeEmbed(activeStory.fields.youTubeLink)}
                      {media.map(item => {
                        return contentfulPrintMedia(item);
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
    )
  );
};
export default StoryOverlay;
