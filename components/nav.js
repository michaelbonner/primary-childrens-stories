import React, { useState, useEffect } from "react";
import Facebook from "../components/facebook";
import Twitter from "../components/twitter";
import { FacebookShareButton, TwitterShareButton } from "react-share";
import useContentfulContent from "../shared/hooks/useContentfulContent";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import YoutubeEmbed from "./youtube-embed";

const colorMap = {
  all: "#14113d",
  red: "#e54446",
  orange: "#f7941d",
  yellow: "#f2cc16",
  "pale-orange": "#f3c678",
  green: "#17aa62",
  "pale-blue": "#579fd7",
  "pale-green": "#82cba9",
  blue: "#36618e",
  fuchsia: "#c51b73",
  purple: "#7a2879"
};

const Nav = () => {
  const [activeTab, setActiveTab] = useState("search");
  const [shareOpen, setShareOpen] = useState(false);
  const contentfulContent = useContentfulContent();
  const [aboutTabContent, setAboutTabContent] = useState("");
  const [submitTabContent, setSubmitTabContent] = useState("");
  const [activeCategories, setActiveCategories] = useState([]);

  useEffect(() => {
    contentfulContent.fetchByEntryId("6xDZ66kDnvo24xY91qO7FA").then(content => {
      setAboutTabContent(content.fields.content);
    });
    contentfulContent.fetchByEntryId("1ZTYTOO0n0PIHlo1dUtD0v").then(content => {
      setSubmitTabContent(content.fields.content);
    });
  }, []);

  const NavButton = ({ link, text }) => {
    return (
      <button
        className={`${
          activeTab === link ? "text-blue-800" : "text-blue-600"
        } w-1/3 py-3 px-8 text-base font-bold focus:outline-none h-full`}
        onClick={() => {
          if (activeTab === link) {
            setActiveTab("");
          } else {
            setActiveTab(link);
          }
        }}
      >
        <span className="inline-block mt-1">{text}</span>
      </button>
    );
  };

  const TabContentWrapper = ({ children, tabLink }) => {
    if (activeTab !== tabLink) {
      return "";
    }

    return (
      <div
        className={`w-full md:w-2/3 lg:w-1/2 max-w-2xl mt-2 mx-auto py-4 md:py-12 px-4 md:px-12 text-center text-gray-600 rounded-lg bg-white shadow-md`}
      >
        {children}
      </div>
    );
  };

  return (
    <div>
      <div className="fixed right-0 top-0 flex flex-col justify-end mr-4 md:mr-8 w-20 text-center z-50">
        <button
          className="inline-block py-3 md:pt-8 md:pb-2 px-2 bg-white text-gray-600 text-sm rounded-b-lg shadow-md z-30 focus:outline-none font-bold"
          onClick={() => {
            setShareOpen(!shareOpen);
          }}
        >
          Share
        </button>
        {shareOpen && (
          <FacebookShareButton
            className={`flex items-center justify-center -mt-1 pt-3 pb-2 px-4 bg-facebook-500 hover:bg-facebook-600 text-white text-sm rounded-b-lg shadow-md z-20 focus:outline-none`}
            url={
              process.browser
                ? window.location.href
                : "https://primary-childrens-stories.michaelbonner.now.sh/"
            }
          >
            <Facebook className="w-8 fill-current" />
          </FacebookShareButton>
        )}
        {shareOpen && (
          <TwitterShareButton
            className={`flex items-center justify-center -mt-1 pt-3 pb-2 px-4 bg-twitter-500 hover:bg-twitter-600 text-white text-sm rounded-b-lg shadow-md z-10 focus:outline-none`}
            url={
              process.browser
                ? window.location.href
                : "https://primary-childrens-stories.michaelbonner.now.sh/"
            }
          >
            <Twitter className="w-8 fill-current" />
          </TwitterShareButton>
        )}
      </div>
      <div className="px-4">
        <nav className="relative mt-16 flex flex-wrap w-full md:w-2/3 lg:w-1/2 max-w-2xl mx-auto text-blue-600 text-center z-30">
          <div className="w-full md:w-auto rounded-lg bg-white shadow-md px-4 py-1">
            <img
              alt="Primary Children's Hospital"
              className="mx-auto"
              src="/images/primary-childrens-hospital-logo.svg"
              style={{ width: "180px", height: "70px" }}
            />
          </div>
          <div className="w-full md:w-auto rounded-lg bg-white shadow-md md:ml-2 -mt-3 md:mt-0 items-center flex-1">
            <NavButton text="About" link="about" />
            <NavButton text="Search" link="search" />
            <NavButton text="Submit" link="submit" />
          </div>
        </nav>
        <TabContentWrapper tabLink="about">
          <YoutubeEmbed youtubeId={"Q-lhnGPj_tk"} />
          <div
            className="mt-4"
            dangerouslySetInnerHTML={{
              __html: documentToHtmlString(aboutTabContent)
            }}
          ></div>
        </TabContentWrapper>
        <TabContentWrapper tabLink="search">
          <div className="flex flex-wrap">
            <div className="w-1/3 h-16 p-1">
              <button
                className={`w-full h-full py-0 px-8 text-sm font-medium focus:outline-none border ${
                  activeCategories.includes("all")
                    ? "text-white"
                    : "text-gray-700"
                }`}
                onClick={() => {
                  activeCategories.includes("all")
                    ? setActiveCategories(
                        activeCategories.filter(
                          activeCategory => activeCategory !== "all"
                        )
                      )
                    : setActiveCategories([...activeCategories, "all"]);
                }}
                style={{
                  background: activeCategories.includes("all")
                    ? colorMap.all
                    : "white"
                }}
              >
                <span className="inline-block mt-1">All</span>
              </button>
            </div>
            {contentfulContent.categories.map(category => (
              <div className="w-1/3 h-16 p-1" key={category.sys.id}>
                <button
                  className={`w-full h-full py-0 px-8 text-sm font-medium focus:outline-none border ${
                    activeCategories.includes(category.sys.id)
                      ? "text-white"
                      : "text-gray-700"
                  }`}
                  onClick={() => {
                    activeCategories.includes(category.sys.id)
                      ? setActiveCategories(
                          activeCategories.filter(
                            activeCategory => activeCategory !== category.sys.id
                          )
                        )
                      : setActiveCategories([
                          ...activeCategories,
                          category.sys.id
                        ]);
                  }}
                  style={{
                    background: activeCategories.includes(category.sys.id)
                      ? colorMap[category.fields.color]
                      : "white"
                  }}
                >
                  <span className="inline-block mt-1">
                    {category.fields.name}
                  </span>
                </button>
              </div>
            ))}
          </div>
        </TabContentWrapper>
        <TabContentWrapper tabLink="submit">
          <div
            dangerouslySetInnerHTML={{
              __html: documentToHtmlString(submitTabContent)
            }}
          />
          <a
            href="https://intermountainhealthcare.org/"
            className="inline-block mt-6 bg-blue-400 text-blue-100 mt-2 py-3 px-12 rounded"
          >
            Submit
          </a>
        </TabContentWrapper>
      </div>
    </div>
  );
};
export default Nav;
