import React from "react";
import contentfulRichText from "../shared/contentfulRichText";

const ThankYouForSharingOverlay = ({ content, visible, setVisible }) => {
  return (
    visible && (
      <>
        <div
          className={"fixed z-20 inset-0 bg-white opacity-50"}
          onClick={() => {
            setVisible(false);
          }}
        />
        <div className={"fixed z-30 w-full py-8 md:py-16 inset-y-0"}>
          <div
            className="flex md:pb-32 pb-12 px-3"
            onClick={e => {
              setVisible(null);
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
                    setVisible(null);
                  }}
                >
                  X
                </button>
              </div>
              {visible && (
                <>
                  <div className="h-full py-12 flex flex-col">
                    <div className="story-content overflow-y-scroll flex-1">
                      <div
                        className="text-xl font-bold leading-relaxed mb-6"
                        dangerouslySetInnerHTML={{
                          __html: contentfulRichText(content)
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
export default ThankYouForSharingOverlay;
