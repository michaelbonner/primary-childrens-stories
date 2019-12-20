import React, { useEffect, useState } from "react";
import useWindowSize from "../shared/hooks/useWindowSize";
import { MapInteractionCSS } from "react-map-interaction";
import useContentfulContent from "../shared/hooks/useContentfulContent";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";

const Map = ({ children }) => {
  const bgImageDimensions = {
    width: 3200,
    height: 2400
  };

  const stories = useContentfulContent();
  const [activeStory, setActiveStory] = useState(null);
  const size = useWindowSize();
  const [translation, setTranslation] = useState({ x: 0, y: 0 });
  const [scale, setScale] = useState(1.5);

  useEffect(() => {
    if (size.width < 760) {
      setScale(8);
    }
    setTranslation({
      x: size.width / 2 - bgImageDimensions.width / 2 + 40,
      y: size.height / 2 - bgImageDimensions.height / 2 + 80
    });
  }, []);

  return (
    <div>
      <div className="fixed z-10 w-full">{children}</div>
      <div className="absolute inset-0 z-0 h-screen w-full">
        <div className="relative z-0 font-bold text-2xl text-gray-600 uppercase w-full h-screen overflow-hidden">
          <MapInteractionCSS
            scale={scale}
            translation={translation}
            translationBounds={{
              xMin: 0 - bgImageDimensions.width + size.width,
              xMax: 0,
              yMin: 0 - bgImageDimensions.height + size.height,
              yMax: 0
            }}
            minScale={1}
            maxScale={10}
          >
            <div className="w-screen h-screen">
              <img
                alt="map background"
                draggable="false"
                className="absolute z-0"
                src="/pch-background.jpg"
              />
              {stories.map(story => {
                return (
                  <div
                    key={story.sys.id}
                    className="absolute"
                    style={{
                      left: story.fields.xCoordinate,
                      top: story.fields.yCoordinate
                    }}
                  >
                    <button
                      href={`/?id=${story.sys.id}`}
                      onClick={() => setActiveStory(story)}
                    >
                      <img
                        alt={story.fields.title}
                        className="w-8 h-16"
                        src="/pins/orange.svg"
                      />
                    </button>
                  </div>
                );
              })}
            </div>
          </MapInteractionCSS>
        </div>
      </div>
      <div
        className={
          activeStory ? "fixed z-20 inset-0 bg-gray-600 opacity-50" : "hidden"
        }
      />
      <div
        className={activeStory ? "fixed z-30 w-full py-8 inset-y-0" : "hidden"}
        onClick={() => {
          setActiveStory(null);
        }}
      >
        <div className="flex">
          <div
            className="bg-white w-full md:w-1/2 mx-auto py-8 px-4"
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
  );
};

export default Map;
