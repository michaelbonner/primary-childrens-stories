import React, { useEffect, useState, useRef } from "react";
import useWindowSize from "../shared/hooks/useWindowSize";
import { MapInteractionCSS } from "react-map-interaction";
import useContentfulContent from "../shared/hooks/useContentfulContent";
import StoryOverlay from "./story-overlay";
import Animations from "./animations";
import StoryPin from "./story-pin";

const Map = ({ children }) => {
  const bgImageDimensions = {
    width: 3200,
    height: 2400
  };
  const [stories, setStories] = useState([]);
  const [activeStory, setActiveStory] = useState(null);
  const [translation, setTranslation] = useState({ x: 0, y: 0 });
  const [initialScale, setInitialScale] = useState(1.8);
  const [scale, setScale] = useState(1.8);
  const [isBgLoaded, setIsBgLoaded] = useState(false);
  const [pinDimensions, setPinDimensions] = useState([37, 57]);

  const contentfulContent = useContentfulContent();
  const size = useWindowSize();
  const mapImage = useRef(null);

  const [multiplier, setMultiplier] = useState({
    x: size.width / bgImageDimensions.width,
    y: size.height / bgImageDimensions.height
  });

  useEffect(() => {
    setMultiplier({
      x: mapImage.current.width / bgImageDimensions.width,
      y: mapImage.current.height / bgImageDimensions.height
    });
  }, [scale, size, mapImage]);

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

  const bgLoaded = () => {
    setMultiplier({
      x: mapImage.current.width / bgImageDimensions.width,
      y: mapImage.current.height / bgImageDimensions.height
    });
    setPinDimensions([37 / scale, 57 / scale]);
    setIsBgLoaded(true);
  };
  return (
    <div>
      <div className="fixed z-10 w-full">{children}</div>
      <div className="absolute inset-0 z-0 h-screen w-full">
        <div className="relative z-0 font-bold text-2xl text-gray-600 uppercase w-full h-screen overflow-hidden">
          <MapInteractionCSS
            onChange={props => {
              setScale(props.scale);
              setTranslation(props.translation);
              setPinDimensions([37 / scale, 57 / scale]);
            }}
            scale={scale}
            translation={translation}
            translationBounds={{
              xMin: 0 - size.width * (scale - 1),
              xMax: 0,
              yMin:
                0 -
                bgImageDimensions.height * multiplier.y * scale +
                size.height,
              yMax: 0
            }}
            minScale={1.8}
            maxScale={4}
            disablePan={activeStory ? true : false}
            disableZoom={activeStory ? true : false}
          >
            <div className="relative">
              <img
                alt="map background"
                draggable="false"
                className="absolute z-0"
                src="/pch-background.svg"
                ref={mapImage}
                onLoad={bgLoaded}
              />
              {isBgLoaded && (
                <Animations scale={initialScale} mapImage={mapImage} />
              )}
              {isBgLoaded &&
                stories.map(story => {
                  return (
                    <StoryPin
                      key={story.sys.id}
                      id={story.sys.id}
                      left={multiplier.x * story.fields.xCoordinate}
                      top={multiplier.y * story.fields.yCoordinate}
                      setActiveStory={setActiveStory}
                      story={story}
                      title={story.fields.title}
                      pinColor={story.fields.category.fields.color}
                      pinDimensions={pinDimensions}
                    />
                  );
                })}
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
