import React, { useEffect, useState, useRef } from "react";
import useWindowSize from "../shared/hooks/useWindowSize";
import { MapInteractionCSS } from "react-map-interaction";
import useContentfulContent from "../shared/hooks/useContentfulContent";
import StoryOverlay from "./story-overlay";
import Animations from "./animations";
import StoryPin from "./story-pin";
import { useTrail, animated } from "react-spring";

const Map = ({ children }) => {
  const bgImageDimensions = {
    width: 3200,
    height: 2400
  };
  const intermountainPinLocation = {
    x: 1535,
    y: 735
  };
  const [stories, setStories] = useState([]);
  const [activeStory, setActiveStory] = useState(null);
  const [translation, setTranslation] = useState({ x: 0, y: 0 });
  const [initialScale, setInitialScale] = useState(1);
  const [scale, setScale] = useState(1);
  const [minScale, setMinScale] = useState(0.75);
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
    if (size.width < 768) {
      setMinScale(0.5);
      setScale(0.5);
      setInitialScale(0.5);
    } else {
      setTranslation({
        x: 0 - (intermountainPinLocation.x - size.width / 2) * scale,
        y: 0 - (intermountainPinLocation.y - size.height / 2) * scale
      });
    }
  }, []);

  useEffect(() => {
    if (size.width < 768) {
      setTranslation({
        x: 0 - (intermountainPinLocation.x - size.width) * scale,
        y: 0 - (intermountainPinLocation.y - size.height) * scale
      });
    }
  }, [minScale]);

  const bgLoaded = () => {
    setPinDimensions([37 / scale, 57 / scale]);
    setIsBgLoaded(true);
  };

  const trail = useTrail(stories.length, {
    from: { opacity: 0, transform: "translate3d(0,-50px,0)" },
    to: { opacity: 1, transform: "translate3d(0,0px,0)" }
  });

  return (
    <div>
      <div className="fixed z-10 w-full">{children}</div>
      <div className="absolute inset-0 z-0 h-screen w-full">
        <div className="relative z-0 font-bold text-2xl text-gray-600 uppercase w-full h-screen overflow-hidden">
          <MapInteractionCSS
            onChange={props => {
              if (scale !== props.scale) {
                setScale(props.scale);
                setPinDimensions([37 / props.scale, 57 / props.scale]);
              }
              if (translation !== props.translation) {
                setTranslation(props.translation);
              }
            }}
            scale={scale}
            translation={translation}
            translationBounds={{
              xMin:
                0 - bgImageDimensions.width * multiplier.x * scale + size.width,
              xMax: 0,
              yMin:
                0 -
                bgImageDimensions.height * multiplier.y * scale +
                size.height,
              yMax: 0
            }}
            minScale={minScale}
            maxScale={4}
            disablePan={activeStory ? true : false}
            disableZoom={activeStory ? true : false}
            showControls={true}
            controlsClass={`absolute z-50 right-0 bottom-0 mr-3 mb-3 bg-white rounded-lg`}
            btnClass={`hidden lg:inline-block relative w-12 p-3 hover:bg-gray-200 rounded-lg`}
          >
            <div
              className="relative"
              style={{
                width: bgImageDimensions.width,
                height: bgImageDimensions.height
              }}
            >
              <img
                alt="map background"
                draggable="false"
                className="absolute z-0"
                src="/images/pch-background.svg"
                ref={mapImage}
                id={`mapImage`}
                onLoad={bgLoaded}
                style={{
                  width: bgImageDimensions.width,
                  height: bgImageDimensions.height
                }}
              />
              {isBgLoaded && (
                <Animations scale={initialScale} mapImage={mapImage} />
              )}
              {isBgLoaded &&
                trail.map((props, index) => {
                  const pinColor = stories[index].fields.categories
                    ? stories[index].fields.categories[0].fields.color
                    : "red";
                  return (
                    <animated.div key={stories[index].sys.id} style={props}>
                      <StoryPin
                        id={stories[index].sys.id}
                        left={multiplier.x * stories[index].fields.xCoordinate}
                        top={multiplier.y * stories[index].fields.yCoordinate}
                        setActiveStory={setActiveStory}
                        story={stories[index]}
                        title={stories[index].fields.title}
                        pinColor={pinColor}
                        pinDimensions={pinDimensions}
                      />
                    </animated.div>
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
