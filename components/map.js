import React, { useEffect, useState, useRef } from "react";
import useWindowSize from "../shared/hooks/useWindowSize";
import { MapInteractionCSS } from "react-map-interaction";
import useContentfulContent from "../shared/hooks/useContentfulContent";
import StoryOverlay from "./StoryOverlay";
import Animations from "./animations";

const Map = ({ children }) => {
  const bgImageDimensions = {
    width: 3200,
    height: 2400
  };
  const [stories, setStories] = useState([]);
  const [activeStory, setActiveStory] = useState(null);
  const [translation, setTranslation] = useState({ x: 0, y: 0 });
  const [initialScale, setInitialScale] = useState(1.8);
  const [scale, setScale] = useState(initialScale);

  const contentfulContent = useContentfulContent();
  const size = useWindowSize();
  const mapInnerContainer = useRef(null);

  useEffect(() => {
    setStories(contentfulContent.stories);
    // @debug
    // setActiveStory(contentfulContent.stories[0]);
  }, [contentfulContent]);

  useEffect(() => {
    if (size.width < 760) {
      setScale(8);
      setInitialScale(8);
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
            disablePan={activeStory ? true : false}
            disableZoom={activeStory ? true : false}
          >
            <div className="relative" ref={mapInnerContainer}>
              <img
                alt="map background"
                draggable="false"
                className="absolute z-0"
                src="/pch-background.svg"
              />
              <Animations scale={initialScale} />
              {stories.map(story => (
                <div
                  key={story.sys.id}
                  className="absolute"
                  style={{
                    left: story.fields.xCoordinate / initialScale,
                    top: story.fields.yCoordinate / initialScale
                  }}
                >
                  <button
                    href={`/?id=${story.sys.id}`}
                    onClick={() => setActiveStory(story)}
                    onTouchEnd={() => setActiveStory(story)}
                  >
                    <img
                      alt={story.fields.title}
                      className="w-2 md:w-6"
                      src={`/pins/${story.fields.category.fields.color}.svg`}
                    />
                  </button>
                </div>
              ))}
            </div>
          </MapInteractionCSS>
        </div>
      </div>
      <StoryOverlay activeStory={activeStory} setActiveStory={setActiveStory} />
    </div>
  );
};

export default Map;
