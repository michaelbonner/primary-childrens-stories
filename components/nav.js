import React, { useState, useRef, useEffect } from "react";
import { FacebookShareButton, TwitterShareButton } from "react-share";
import { toast } from "react-toastify";
import Facebook from "../components/facebook";
import Twitter from "../components/twitter";
import useWindowSize from "../shared/hooks/useWindowSize";
import useOnClickOutside from "../shared/hooks/useOnOutsideClick";
import contentfulRichText from "../shared/contentfulRichText";
import colorMap from "../shared/colorMap";

const Nav = ({
  aboutTabContent,
  activeCategory,
  categories,
  hostname,
  recenterMap,
  setActiveCategory,
  thankYouForSharingContent,
  submitTabContent
}) => {
  const ref = useRef();
  const [activeTab, setActiveTab] = useState("");
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [shareOpen, setShareOpen] = useState(false);
  const size = useWindowSize();
  const [navStyle, setNavStyle] = useState({ visibility: "hidden" });
  const navRef = useRef();

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

  useOnClickOutside(ref, e => {
    if (typeof e.target.className !== "string") {
      setActiveTab("");
      return;
    }
    if (e.target.className.includes("js-nav-button")) {
      return;
    }
    setActiveTab("");
  });

  const NavButton = ({ link, text }) => {
    return (
      <button
        className={`${
          activeTab === link ? "text-blue-800" : "text-blue-600"
        } w-1/3 py-3 px-8 text-base font-bold focus:outline-none h-full js-nav-button`}
        onClick={() => {
          if (activeTab === link) {
            setActiveTab("");
          } else {
            setActiveTab(link);
          }
        }}
      >
        <span className="inline-block mt-1 js-nav-button">{text}</span>
      </button>
    );
  };

  const TabContentWrapper = ({ children, tabLink }) => {
    if (activeTab !== tabLink) {
      return "";
    }

    return (
      <div
        className={`w-full h-full max-w-2xl mt-0 lg:mt-2 mx-auto px-4 lg:px-0`}
        ref={ref}
      >
        <div
          className="py-4 md:py-12 px-4 md:px-12 text-center text-gray-600 rounded-b-lg lg:rounded-lg bg-white shadow-md h-auto"
          style={{ maxHeight: "calc(-12rem + 100vh)" }}
        >
          {children}
        </div>
      </div>
    );
  };

  useEffect(() => {
    if (size.width <= 768) {
      setNavStyle({ width: "100%" });
    } else {
      setNavStyle({
        left: "50%",
        marginLeft: 0 - navRef.current.clientWidth / 2 + "px",
        transform: "translateY(4rem)"
      });
    }
  }, [size.width]);

  return (
    <>
      <div className="fixed left:0 lg:left-auto lg:right-0 top-0 flex flex-col justify-end ml-4 lg:ml-0 mr-4 md:mr-8 w-16 lg:w-20 text-center z-30 mt-16 lg:mt-0">
        <button
          className="hidden lg:inline-block py-3 md:pt-8 md:pb-2 px-2 bg-white text-gray-600 text-sm rounded-b-lg shadow-md z-30 focus:outline-none font-bold"
          onClick={() => {
            setShareOpen(!shareOpen);
          }}
        >
          Share
        </button>
        {shareOpen && (
          <FacebookShareButton
            className={`
              flex items-center justify-center -mt-1 pt-3 pb-2 px-4 bg-facebook-500 hover:bg-facebook-600 text-white text-sm rounded-b-lg shadow-md z-20 focus:outline-none
            `}
            url={`https://${hostname}`}
            resetButtonStyle={false}
            onClick={() => setWillShowThankYou(true)}
          >
            <Facebook className="w-8 fill-current" />
          </FacebookShareButton>
        )}
        {shareOpen && (
          <TwitterShareButton
            className={`flex items-center justify-center -mt-1 pt-3 pb-2 px-4 bg-twitter-500 hover:bg-twitter-600 text-white text-sm rounded-b-lg shadow-md z-10 focus:outline-none`}
            url={`https://${hostname}`}
            resetButtonStyle={false}
            onClick={() => setWillShowThankYou(true)}
          >
            <Twitter className="w-8 fill-current" />
          </TwitterShareButton>
        )}
      </div>
      <div
        className="fixed z-10 h-auto max-h-screen w-full lg:w-2/3 xl:w-1/2 lg:max-w-2xl mx-auto"
        ref={navRef}
        style={navStyle}
      >
        <div className="relative h-auto">
          <div className="relative p-0 lg:px-4 h-full w-full">
            <nav className="relative mt-0 flex flex-wrap text-blue-600 text-center z-30">
              <div
                className="relative flex w-full items-center lg:w-auto lg:rounded-lg bg-white shadow-md px-4 pb-1 lg:py-1"
                id="primaryChildrensLogo"
              >
                <div className="inline-block lg:hidden self-start">
                  <button
                    className="bg-gray-200 inline-block pt-6 pb-4 px-3 w-16 text-gray-600 text-sm rounded-b-lg shadow-md z-30 focus:outline-none font-bold"
                    onClick={() => {
                      setShareOpen(!shareOpen);
                    }}
                  >
                    Share
                  </button>
                </div>
                <img
                  alt="Primary Children's Hospital"
                  className="mx-auto"
                  src="/images/primary-childrens-hospital-logo.svg"
                  style={{ width: "180px", height: "70px" }}
                  onClick={recenterMap}
                />
                <button
                  onClick={() => {
                    if (isMobileNavOpen && activeTab) {
                      setActiveTab("");
                    }
                    setIsMobileNavOpen(!isMobileNavOpen);
                  }}
                  className="inline-block lg:hidden"
                >
                  <svg
                    className="w-10 h-10"
                    version="1.1"
                    id="hamburger"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    viewBox="0 0 34 28.5"
                    style={{ enableBackground: "new 0 0 34 28.5" }}
                    xmlSpace="preserve"
                  >
                    <g>
                      <path
                        style={{ fill: "#4E84C4" }}
                        d="M30.6,6.7H4.4c-1.1,0-2-0.9-2-2v0c0-1.1,0.9-2,2-2h26.2c1.1,0,2,0.9,2,2v0
		C32.6,5.8,31.7,6.7,30.6,6.7z"
                      />
                      <path
                        style={{ fill: "#4E84C4" }}
                        d="M30.6,16.1H4.4c-1.1,0-2-0.9-2-2v0c0-1.1,0.9-2,2-2h26.2c1.1,0,2,0.9,2,2v0
		C32.6,15.2,31.7,16.1,30.6,16.1z"
                      />
                      <path
                        style={{ fill: "#4E84C4" }}
                        d="M30.6,25.5H4.4c-1.1,0-2-0.9-2-2v0c0-1.1,0.9-2,2-2h26.2c1.1,0,2,0.9,2,2v0
		C32.6,24.7,31.7,25.5,30.6,25.5z"
                      />
                    </g>
                  </svg>
                </button>
              </div>
              <div
                className={`${
                  isMobileNavOpen ? "inline-block" : "hidden"
                } lg:block w-full md:w-auto mx-4 md:ml-2 md:mr-0 md:mt-0 lg:rounded-lg bg-white lg:shadow-md items-center flex-1`}
              >
                <NavButton text="About" link="about" />
                <NavButton text="Search" link="search" />
                <NavButton text="Submit" link="submit" />
              </div>
            </nav>
            <TabContentWrapper tabLink="about">
              <div
                className="h-full story-content overflow-y-scroll"
                dangerouslySetInnerHTML={{
                  __html: contentfulRichText(aboutTabContent)
                }}
                style={{ maxHeight: "calc(-17rem + 100vh)" }}
              ></div>
            </TabContentWrapper>
            <TabContentWrapper tabLink="search">
              <div className="flex flex-wrap">
                <div className="w-1/2 lg:w-1/3 h-16 p-1">
                  <button
                    className={`w-full h-full py-0 px-8 text-sm font-medium focus:outline-none border ${
                      activeCategory === "all" ? "text-white" : "text-gray-700"
                    }`}
                    onClick={() => {
                      setActiveCategory("all");
                      if (size.width < 768) {
                        setActiveTab(null);
                      }
                    }}
                    style={{
                      background:
                        activeCategory === "all" ? colorMap.all : "white"
                    }}
                  >
                    <span className="inline-block mt-1">All</span>
                  </button>
                </div>
                {categories.map(category => (
                  <div
                    className="w-1/2 lg:w-1/3 h-16 p-1"
                    key={category.sys.id}
                  >
                    <button
                      className={`w-full h-full py-0 px-8 text-sm font-medium focus:outline-none border ${
                        activeCategory === category.sys.id
                          ? "text-white"
                          : "text-gray-700"
                      }`}
                      onClick={() => {
                        setActiveCategory(category.sys.id);
                        if (size.width < 768) {
                          setActiveTab(null);
                        }
                      }}
                      style={{
                        background:
                          activeCategory === category.sys.id
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
                  __html: contentfulRichText(submitTabContent)
                }}
              />
              <a
                href="https://intermountainhealthcare.org/locations/primary-childrens-hospital/Hospital-Information/Here-Kids-Win-Stories/"
                target="_blank"
                className="inline-block mt-6 bg-blue-400 text-blue-100 mt-2 py-3 px-12 rounded"
              >
                Submit
              </a>
            </TabContentWrapper>
          </div>
        </div>
      </div>
    </>
  );
};
export default Nav;
