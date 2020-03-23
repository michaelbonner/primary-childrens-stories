import React, { useEffect, useState, useRef } from "react";
import useWindowSize from "../shared/hooks/useWindowSize";
import { MapInteractionCSS } from "react-map-interaction";
import StoryOverlay from "./story-overlay";
import Animations from "./animations";

import Nav from "./nav";
import StoryPins from "./story-pins";
import WelcomeOverlay from "./welcome-overlay";
const Map = ({
  aboutTabContent,
  activeCategory,
  categories,
  hostname,
  mainStoryContent,
  setActiveCategory,
  stories,
  submitTabContent,
  thankYouForSharingContent,
  welcomeOverlayContent
}) => {
  const bgImageDimensions = {
    width: 3200,
    height: 2400
  };
  const intermountainPinLocation = {
    x: 1535,
    y: 735
  };
  const mobilePinDimensions = {
    width: 36,
    height: 54
  };
  const desktopPinDimensions = {
    width: 45,
    height: 68
  };
  const desktopWidth = 768;

  const [hideWelcomeOverlay, setHideWelcomeOverlay] = useState(false);
  const [filteredStories, setFilteredStories] = useState([]);
  const [activeStory, setActiveStory] = useState(null);
  const [translation, setTranslation] = useState({ x: 0, y: 0 });
  const [initialScale, setInitialScale] = useState(1);
  const [scale, setScale] = useState(1);
  const [minScale, setMinScale] = useState(0.75);
  const [isBgLoaded, setIsBgLoaded] = useState(false);
  const [pinDimensions, setPinDimensions] = useState([45, 68]);

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
    if (size.width < desktopWidth) {
      const mobileScale = 0.5;
      setMinScale(0.35);
      setScale(mobileScale);
      setInitialScale(mobileScale);
      setPinDimensions([
        mobilePinDimensions.width / mobileScale,
        mobilePinDimensions.height / mobileScale
      ]);
    } else {
      setPinDimensions([
        desktopPinDimensions.width / scale,
        desktopPinDimensions.height / scale
      ]);
    }
    recenterMap();
    // catch times when the bg image loads but doesn't call bgLoaded
    setTimeout(() => bgLoaded(), 500);
  }, [size.width]);

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
    setIsBgLoaded(true);
  };

  const recenterMap = () => {
    if (size.width < desktopWidth) {
      setScale(0.5);
      setTranslation({
        x: 0 - (intermountainPinLocation.x - size.width) * 0.5,
        y: 0 - (intermountainPinLocation.y - size.height / 2) * 0.5
      });
    } else {
      setScale(1);
      setTranslation({
        x: 0 - (intermountainPinLocation.x - size.width / 2),
        y: 0 - (intermountainPinLocation.y - size.height / 3)
      });
    }
  };

  const dismissOverlay = () => {
    setHideWelcomeOverlay(true);
  };

  return (
    <div>
      {!hideWelcomeOverlay && (
        <WelcomeOverlay
          dismissOverlay={dismissOverlay}
          welcomeOverlayContent={welcomeOverlayContent}
        />
      )}

      <Nav
        aboutTabContent={aboutTabContent}
        activeCategory={activeCategory}
        categories={categories}
        hostname={hostname}
        recenterMap={recenterMap}
        setActiveCategory={setActiveCategory}
        submitTabContent={submitTabContent}
        thankYouForSharingContent={thankYouForSharingContent}
      />
      <div className="absolute inset-0 z-0 h-screen w-full pt-16 lg:pt-0">
        <div className="relative z-0 font-bold text-2xl text-gray-600 uppercase w-full h-screen overflow-hidden">
          <MapInteractionCSS
            onChange={props => {
              if (scale !== props.scale) {
                setScale(props.scale);
                if (size.width < desktopWidth) {
                  setPinDimensions([
                    mobilePinDimensions.width / props.scale,
                    mobilePinDimensions.height / props.scale
                  ]);
                } else {
                  setPinDimensions([
                    desktopPinDimensions.width / props.scale,
                    desktopPinDimensions.height / props.scale
                  ]);
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
                className="absolute z-0"
                draggable="false"
                id={`mapImage`}
                onLoad={bgLoaded}
                ref={mapImage}
                src="/images/pch-background.svg"
                style={{
                  width: bgImageDimensions.width,
                  height: bgImageDimensions.height
                }}
              />
              {isBgLoaded && hideWelcomeOverlay && (
                <StoryPins
                  activeCategory={activeCategory}
                  categories={categories}
                  multiplier={multiplier}
                  filteredStories={filteredStories}
                  setActiveStory={setActiveStory}
                  pinDimensions={pinDimensions}
                />
              )}
              {isBgLoaded && (
                <Animations scale={initialScale} mapImage={mapImage} />
              )}
              {isBgLoaded && (
                <button
                  className="w-64 h-64 z-40 absolute opacity-0"
                  style={{ transform: "translate3d(1430px, 690px, 0)" }}
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
        mainStoryContent={mainStoryContent}
        thankYouForSharingContent={thankYouForSharingContent}
      />
    </div>
  );
};

export default Map;
