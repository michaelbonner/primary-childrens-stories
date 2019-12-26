import React, { useState } from "react";
import Facebook from "../components/facebook";
import Twitter from "../components/twitter";
import { FacebookShareButton, TwitterShareButton } from "react-share";

const Nav = () => {
  const [activeTab, setActiveTab] = useState("");
  const [shareOpen, setShareOpen] = useState(false);

  return (
    <div>
      <div className="fixed right-0 top-0 flex flex-col justify-end mr-8 w-24 text-center">
        <button
          className="inline-block py-3 md:py-6 px-2 md:px-4 bg-gray-200 text-gray-600 text-sm uppercase rounded-b-lg shadow-md z-30"
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
          } items-center justify-center -mt-1 pt-3 pb-2 px-4 bg-gray-300 hover:bg-gray-400 text-gray-600 text-sm uppercase rounded-b-lg shadow-md z-10`}
          url={
            process.browser
              ? window.location.href
              : "https://primary-childrens-stories.michaelbonner.now.sh/"
          }
        >
          <Twitter className="w-8 fill-current" />
        </TwitterShareButton>
      </div>
      <div className="px-2">
        <nav className="mt-16 flex w-full md:w-1/3 mx-auto text-gray-600 text-center rounded-lg bg-gray-200 shadow-md">
          <button
            className="w-1/3 py-3 px-8 text-sm font-medium uppercase"
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
            className="w-1/3 py-3 px-8 text-sm font-medium uppercase"
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
            className="w-1/3 py-3 px-8 text-sm font-medium uppercase"
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
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
            scelerisque fringilla nibh at scelerisque. Praesent efficitur erat
            sem, in pulvinar massa pulvinar sit amet. Suspendisse potenti.
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas. Aliquam et tempor nulla, eu porta nibh. Nam
            consectetur, neque quis tincidunt euismod, nulla sapien mollis diam,
            vel posuere ligula elit vitae quam. Cras sodales magna consectetur,
            interdum augue sit amet, viverra libero. Sed sollicitudin nibh ac
            est pretium ultrices. Nulla faucibus posuere elit, quis interdum leo
            rutrum ac. Fusce consequat pellentesque neque, ut maximus mauris
            malesuada at. Donec laoreet porta est, eu rhoncus purus imperdiet
            eget.
          </p>
        </div>
        <div
          className={`${
            activeTab === "search"
              ? "w-full md:w-1/3 mx-auto text-gray-600 rounded-lg bg-gray-100 p-4"
              : "hidden"
          }`}
        >
          <button
            className="w-1/3 py-3 px-8 text-sm font-medium uppercase"
            onClick={() => setActiveTab("search")}
          >
            <svg
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
              className="fill-current w-6 h- mx-auto"
            >
              <circle cx="50" cy="50" r="50" />
            </svg>
            <span className="inline-block mt-1">Category</span>
          </button>
          <button
            className="w-1/3 py-3 px-8 text-sm font-medium uppercase"
            onClick={() => setActiveTab("search")}
          >
            <svg
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
              className="fill-current w-6 h- mx-auto"
            >
              <circle cx="50" cy="50" r="50" />
            </svg>
            <span className="inline-block mt-1">Category</span>
          </button>
          <button
            className="w-1/3 py-3 px-8 text-sm font-medium uppercase"
            onClick={() => setActiveTab("search")}
          >
            <svg
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
              className="fill-current w-6 h- mx-auto"
            >
              <circle cx="50" cy="50" r="50" />
            </svg>
            <span className="inline-block mt-1">Category</span>
          </button>
          <button
            className="w-1/3 py-3 px-8 text-sm font-medium uppercase"
            onClick={() => setActiveTab("search")}
          >
            <svg
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
              className="fill-current w-6 h- mx-auto"
            >
              <circle cx="50" cy="50" r="50" />
            </svg>
            <span className="inline-block mt-1">Category</span>
          </button>
          <button
            className="w-1/3 py-3 px-8 text-sm font-medium uppercase"
            onClick={() => setActiveTab("search")}
          >
            <svg
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
              className="fill-current w-6 h- mx-auto"
            >
              <circle cx="50" cy="50" r="50" />
            </svg>
            <span className="inline-block mt-1">Category</span>
          </button>
          <button
            className="w-1/3 py-3 px-8 text-sm font-medium uppercase"
            onClick={() => setActiveTab("search")}
          >
            <svg
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
              className="fill-current w-6 h- mx-auto"
            >
              <circle cx="50" cy="50" r="50" />
            </svg>
            <span className="inline-block mt-1">Category</span>
          </button>
        </div>
        <div
          className={`${
            activeTab === "submit"
              ? "w-full md:w-1/3 mx-auto text-gray-600 rounded-lg bg-gray-100 p-4"
              : "hidden"
          }`}
        >
          <p>We'd love to hear your story</p>
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
