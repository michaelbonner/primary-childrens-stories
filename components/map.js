import React, { useEffect, useState, useRef } from "react";
import useWindowSize from "../shared/hooks/useWindowSize";
import { MapInteractionCSS } from "react-map-interaction";
import useContentfulContent from "../shared/hooks/useContentfulContent";
import StoryOverlay from "./StoryOverlay";

const Map = ({ children }) => {
  const bgImageDimensions = {
    width: 3200,
    height: 2400
  };

  const mapInnerContainer = useRef(null);

  const stories = useContentfulContent().stories;
  const [activeStory, setActiveStory] = useState(null);
  const size = useWindowSize();
  const [translation, setTranslation] = useState({ x: 0, y: 0 });
  const [scale, setScale] = useState(1.8);

  useEffect(() => {
    if (size.width < 760) {
      setScale(8);
    }
    setTranslation({
      x: 0 - (size.width * (scale - 1)) / 2 + 40,
      y: 0 - (size.height * (scale - 1)) / 2 - 40
    });
  }, []);

  return (
    <div>
      <div className="fixed z-10 w-full">{children}</div>
      <div className="absolute inset-0 z-0 h-screen w-full">
        <div className="relative z-0 font-bold text-2xl text-gray-600 uppercase w-full h-screen overflow-hidden">
          <MapInteractionCSS
            onChange={props => {
              setScale(props.scale);
              setTranslation(props.translation);
            }}
            scale={scale}
            translation={translation}
            translationBounds={{
              xMin: scale === 1 ? 0 : 0 - size.width * (scale - 1),
              xMax: 0,
              yMin: scale === 1 ? 0 : 0 - size.height * (scale - 1),
              yMax: 0
            }}
            minScale={1}
            maxScale={4}
          >
            <div ref={mapInnerContainer}>
              <img
                alt="map background"
                draggable="false"
                className="absolute z-0"
                src="/pch-background.svg"
              />
              {stories.map(story => {
                return (
                  <div
                    key={story.sys.id}
                    className="relative"
                    style={{
                      left:
                        (size.width / bgImageDimensions.width) *
                        story.fields.xCoordinate,
                      top:
                        (size.height / bgImageDimensions.height) *
                        story.fields.yCoordinate
                    }}
                  >
                    <button
                      href={`/?id=${story.sys.id}`}
                      onClick={() => setActiveStory(story)}
                    >
                      <img
                        alt={story.fields.title}
                        className="w-6"
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
      <StoryOverlay activeStory={activeStory} setActiveStory={setActiveStory} />
    </div>
  );
};

export default Map;
