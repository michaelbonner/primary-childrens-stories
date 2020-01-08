import React, { useState, useEffect } from "react";
import Facebook from "../components/facebook";
import Twitter from "../components/twitter";
import { FacebookShareButton, TwitterShareButton } from "react-share";
import useContentfulContent from "../shared/hooks/useContentfulContent";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";

const Nav = () => {
  const [activeTab, setActiveTab] = useState("");
  const [shareOpen, setShareOpen] = useState(false);
  const contentfulContent = useContentfulContent();
  const [aboutTabContent, setAboutTabContent] = useState("");
  const [submitTabContent, setSubmitTabContent] = useState("");

  useEffect(() => {
    contentfulContent.fetchByEntryId("6xDZ66kDnvo24xY91qO7FA").then(content => {
      setAboutTabContent(content.fields.content);
    });
    contentfulContent.fetchByEntryId("1ZTYTOO0n0PIHlo1dUtD0v").then(content => {
      setSubmitTabContent(content.fields.content);
    });
  }, []);

  return (
    <div>
      <div className="fixed right-0 top-0 flex flex-col justify-end mr-4 md:mr-8 w-24 text-center z-50">
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
          } items-center justify-center -mt-1 pt-3 pb-2 px-4 bg-gray-300 hover:bg-gray-400 text-gray-600 text-sm uppercase rounded-b-lg shadow-md z-20 focus:outline-none`}
          url={
            process.browser
              ? window.location.href
              : "https://primary-childrens-stories.michaelbonner.now.sh/"
          }
        >
          <Facebook className="w-8 fill-current" />
        </FacebookShareButton>
        <TwitterShareButton
          className={`${
            shareOpen ? "flex" : "hidden"
          } items-center justify-center -mt-1 pt-3 pb-2 px-4 bg-gray-300 hover:bg-gray-400 text-gray-600 text-sm uppercase rounded-b-lg shadow-md z-10 focus:outline-none`}
          url={
            process.browser
              ? window.location.href
              : "https://primary-childrens-stories.michaelbonner.now.sh/"
          }
        >
          <Twitter className="w-8 fill-current" />
        </TwitterShareButton>
      </div>
      <div className="px-4">
        <nav className="relative mt-16 flex w-full md:w-1/3 mx-auto text-gray-600 text-center rounded-lg bg-gray-200 shadow-md z-30">
          <button
            className={`${
              activeTab === "about" ? "text-gray-900" : "text-gray-600"
            } w-1/3 py-3 px-8 text-sm font-medium uppercase focus:outline-none`}
            onClick={() => {
              if (activeTab === "about") {
                setActiveTab("");
              } else {
                setActiveTab("about");
              }
            }}
          >
            <svg
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
              className="fill-current w-4 h-4 mx-auto"
            >
              <circle cx="50" cy="50" r="50" />
            </svg>
            <span className="inline-block mt-1">About</span>
          </button>
          <button
            className={`${
              activeTab === "search" ? "text-gray-900" : "text-gray-600"
            } w-1/3 py-3 px-8 text-sm font-medium uppercase focus:outline-none`}
            onClick={() => {
              if (activeTab === "search") {
                setActiveTab("");
              } else {
                setActiveTab("search");
              }
            }}
          >
            <svg
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
              className="fill-current w-4 h-4 mx-auto"
            >
              <circle cx="50" cy="50" r="50" />
            </svg>
            <span className="inline-block mt-1">Search</span>
          </button>
          <button
            className={`${
              activeTab === "submit" ? "text-gray-900" : "text-gray-600"
            } w-1/3 py-3 px-8 text-sm font-medium uppercase focus:outline-none`}
            onClick={() => {
              if (activeTab === "submit") {
                setActiveTab("");
              } else {
                setActiveTab("submit");
              }
            }}
          >
            <svg
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
              className="fill-current w-4 h-4 mx-auto"
            >
              <circle cx="50" cy="50" r="50" />
            </svg>
            <span className="inline-block mt-1">Submit</span>
          </button>
        </nav>
        <div
          className={`${
            activeTab === "about"
              ? "w-full md:w-1/3 mx-auto text-gray-600 rounded-lg bg-gray-100 p-4"
              : "hidden"
          }`}
          dangerouslySetInnerHTML={{
            __html: documentToHtmlString(aboutTabContent)
          }}
        ></div>
        <div
          className={`${
            activeTab === "search"
              ? "w-full md:w-1/3 mx-auto text-gray-600 rounded-lg bg-gray-100 p-4"
              : "hidden"
          }`}
        >
          {contentfulContent.categories.map(category => (
            <button
              className={`w-1/3 py-3 px-8 text-sm font-medium uppercase focus:outline-none`}
              key={category.sys.id}
              onClick={() => setActiveTab("search")}
            >
              <svg
                viewBox="0 0 100 100"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-current w-6 h- mx-auto"
                style={{ color: category.fields.color }}
              >
                <circle cx="50" cy="50" r="50" />
              </svg>
              <span className="inline-block mt-1">{category.fields.name}</span>
            </button>
          ))}
        </div>
        <div
          className={`${
            activeTab === "submit"
              ? "w-full md:w-1/3 mx-auto text-gray-600 rounded-lg bg-gray-100 p-4"
              : "hidden"
          }`}
        >
          <div
            dangerouslySetInnerHTML={{
              __html: documentToHtmlString(submitTabContent)
            }}
          />
          <a
            href="https://intermountainhealthcare.org/"
            className="inline-block bg-blue-400 text-blue-100 mt-2 py-2 px-4 rounded uppercase"
          >
            Submit Your Story
          </a>
        </div>
      </div>
    </div>
  );
};
export default Nav;
