import React from "react";
import contentfulRichText from "../shared/contentfulRichText";
import WelcomeMap from "./animations/welcome-map";

const WelcomeOverlay = ({ dismissOverlay, welcomeOverlayContent }) => {
  return (
    <>
      <div
        className="fixed opacity-50 bg-white inset-0 z-50"
        onClick={dismissOverlay}
      />
      <div
        className="fixed inset-0 z-50 flex items-center justify-center px-4 pt-4 pb-8"
        onClick={dismissOverlay}
      >
        <div className="relative flex flex-col justify-center w-full lg:h-auto overflow-y-scroll md:w-2/3 lg:w-1/2 xl:w-2/5 px-12 py-4 bg-white rounded-lg leading-loose text-center shadow-lg">
          <div className="absolute right-0 top-0 px-4 py-2">
            <button className="p-2 font-bold text-gray-600">X</button>
          </div>
          <WelcomeMap className="mx-auto -mb-12 max-w-full inline-block z-20 lg:w-2/3" />
          <div
            className="text-lg max-w-lg mx-auto my-8"
            dangerouslySetInnerHTML={{
              __html: contentfulRichText(welcomeOverlayContent),
            }}
          />
          <div className="w-full mt-4">
            <img
              alt={`Primary Children's Hospital`}
              className="max-w-xs mx-auto"
              src="/images/primary-childrens-hospital-logo.svg"
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default WelcomeOverlay;
