import React, { useEffect, useState, useRef } from "react";
import useWindowSize from "../shared/hooks/useWindowSize";
import { MapInteractionCSS } from "react-map-interaction";
import { useTrail, animated } from "react-spring";
import StoryOverlay from "./story-overlay";
import Animations from "./animations";
import StoryPin from "./story-pin";
import Nav from "./nav";
import WelcomeMap from "./animations/welcome-map";
import { toDate, addYears } from "date-fns";
import ThankYouForSharingOverlay from "./thank-you-for-sharing-overlay";

const Map = ({
  aboutTabContent,
  activeCategory,
  categories,
  hostname,
  setActiveCategory,
  stories,
  submitTabContent,
  thankYouForSharingContent
}) => {
  const bgImageDimensions = {
    width: 3200,
    height: 2400
  };
  const intermountainPinLocation = {
    x: 1535,
    y: 735
  };

  const [hideWelcomeOverlay, setHideWelcomeOverlay] = useState(false);
  const [filteredStories, setFilteredStories] = useState([]);
  const [activeStory, setActiveStory] = useState(null);
  const [translation, setTranslation] = useState({ x: 0, y: 0 });
  const [initialScale, setInitialScale] = useState(1);
  const [scale, setScale] = useState(1);
  const [minScale, setMinScale] = useState(0.75);
  const [isBgLoaded, setIsBgLoaded] = useState(false);
  const [pinDimensions, setPinDimensions] = useState([45, 68]);
  const [thankYouForSharingVisible, setThankYouForSharingVisible] = useState(
    false
  );

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
    if (size.width < 768) {
      setMinScale(0.35);
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

  useEffect(() => {
    if (activeCategory === "all") {
      setFilteredStories(stories);
    } else {
      const filtered = stories.filter(story => {
        return story.fields.categories
          .map(category => category.sys.id)
          .includes(activeCategory);
      });
      setFilteredStories(filtered);
    }
  }, [activeCategory, stories]);

  const bgLoaded = () => {
    if (size.width < 768) {
      setPinDimensions([37 / scale, 57 / scale]);
    } else {
      setPinDimensions([45 / scale, 68 / scale]);
    }
    setIsBgLoaded(true);
  };

  const trail = useTrail(filteredStories.length, {
    from: { opacity: 0, transform: "translate3d(0,-80px,0)" },
    to: { opacity: 1, transform: "translate3d(0,0px,0)" }
  });

  const recenterMap = () => {
    if (size.width < 768) {
      setScale(0.5);
      setTranslation({
        x: 0 - (intermountainPinLocation.x - size.width / 2) * 0.5,
        y: 0 - (intermountainPinLocation.y - size.height / 2) * 0.5
      });
    } else {
      setScale(1);
      setTranslation({
        x: 0 - (intermountainPinLocation.x - size.width / 2),
        y: 0 - (intermountainPinLocation.y - size.height / 2)
      });
    }
  };

  const dismissOverlay = () => {
    setHideWelcomeOverlay(true);
  };

  return (
    <div>
      {!hideWelcomeOverlay && (
        <>
          <div
            className="fixed opacity-50 bg-white inset-0 z-50"
            onClick={dismissOverlay}
          />
          <div
            className="fixed inset-0 z-50 flex items-center justify-center px-4 pt-4 pb-8"
            onClick={dismissOverlay}
          >
            <div className="relative flex flex-col justify-between w-full h-full lg:h-auto overflow-y-scroll md:w-2/3 lg:w-1/2 xl:w-2/5 px-12 pb-4 bg-white rounded-lg leading-loose text-center shadow-lg">
              <div className="absolute right-0 top-0 px-4 py-2">
                <button className="p-2 font-bold text-gray-600">X</button>
              </div>
              <WelcomeMap className="mx-auto max-w-full inline-block z-20 w-2/3" />
              <p className="text-lg max-w-md m-auto -mt-2 lg:-mt-16">
                Discover newfound hope from the countless victories of children
                throughout this landscape. Better yet, add your child’s story or
                your own story as a previous patient, to uplift other families
                in the community.
              </p>
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
      )}
      <div className="fixed z-10 w-full">
        <div className="relative">
          <Nav
            aboutTabContent={aboutTabContent}
            activeCategory={activeCategory}
            categories={categories}
            hostname={hostname}
            recenterMap={recenterMap}
            setActiveCategory={setActiveCategory}
            submitTabContent={submitTabContent}
            setThankYouForSharingVisible={setThankYouForSharingVisible}
          />
        </div>
      </div>
      <div className="absolute inset-0 z-0 h-screen w-full">
        <div className="relative z-0 font-bold text-2xl text-gray-600 uppercase w-full h-screen overflow-hidden">
          <MapInteractionCSS
            onChange={props => {
              if (scale !== props.scale) {
                setScale(props.scale);
                if (size.width > 767) {
                  setPinDimensions([45 / props.scale, 68 / props.scale]);
                } else {
                  setPinDimensions([37 / props.scale, 57 / props.scale]);
                }
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
              {isBgLoaded &&
                trail.map((props, index) => {
                  let pinColor;
                  if (activeCategory !== "all") {
                    pinColor = categories.filter(
                      category => category.sys.id === activeCategory
                    )[0].fields.color;
                  } else {
                    pinColor = filteredStories[index].fields.categories
                      ? filteredStories[index].fields.categories[0].fields.color
                      : "red";
                  }
                  return (
                    <animated.div
                      className="relative z-30"
                      key={filteredStories[index].sys.id}
                      style={props}
                    >
                      <StoryPin
                        id={filteredStories[index].sys.id}
                        left={
                          multiplier.x *
                          filteredStories[index].fields.xCoordinate
                        }
                        top={
                          multiplier.y *
                          filteredStories[index].fields.yCoordinate
                        }
                        setActiveStory={setActiveStory}
                        story={filteredStories[index]}
                        title={filteredStories[index].fields.title}
                        pinColor={pinColor}
                        pinDimensions={pinDimensions}
                      />
                    </animated.div>
                  );
                })}
              {isBgLoaded && (
                <Animations scale={initialScale} mapImage={mapImage} />
              )}
              {isBgLoaded && (
                <button
                  className="w-64 h-64 z-40 absolute opacity-0"
                  style={{ left: "1430px", top: "690px" }}
                  onClick={() => setActiveStory("main")}
                  onTouchEnd={() => setActiveStory("main")}
                />
              )}
            </div>
          </MapInteractionCSS>
        </div>
      </div>
      <StoryOverlay
        activeCategory={activeCategory}
        activeStory={activeStory}
        hostname={hostname}
        setActiveStory={setActiveStory}
      />
      <ThankYouForSharingOverlay
        visible={thankYouForSharingVisible}
        setVisible={setThankYouForSharingVisible}
        content={thankYouForSharingContent}
      />
    </div>
  );
};

export default Map;
