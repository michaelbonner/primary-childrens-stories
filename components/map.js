import React, { useEffect, useState, useRef } from "react";
import { MapInteractionCSS } from "react-map-interaction";
import useWindowSize from "../shared/hooks/useWindowSize";
import StoryOverlay from "./story-overlay";
import Animations from "./animations";
import Nav from "./nav";
import StoryPins from "./story-pins";
import WelcomeOverlay from "./welcome-overlay";
import TemporaryWelcomeMap from "./temporary-welcome-map";
import PageArrows from "./page-arrows";

const Map = ({
  aboutTabContent,
  activeCategory,
  categories,
  mainStoryContent,
  setActiveCategory,
  stories,
  submitTabContent,
  thankYouForSharingContent,
  welcomeOverlayContent,
}) => {
  const bgImageDimensions = {
    width: 3200,
    height: 2400,
  };
  const intermountainPinLocation = {
    x: 1535,
    y: 735,
  };
  const mobilePinDimensions = {
    width: 38,
    height: 57,
  };
  const desktopPinDimensions = {
    width: 58,
    height: 88,
  };
  const desktopWidth = 768;

  const [hideWelcomeOverlay, setHideWelcomeOverlay] = useState(false);
  const [initialZoomFinished, setInitialZoomFinished] = useState(false);
  const [welcomeFinished, setWelcomeFinished] = useState(false);
  const [filteredStories, setFilteredStories] = useState([]);
  const [activeStory, setActiveStory] = useState(null);
  const [translation, setTranslation] = useState({ x: 0, y: 0 });
  const [initialScale, setInitialScale] = useState(1);
  const [scale, setScale] = useState(0.8);
  const [minScale, setMinScale] = useState(0.8);
  const [isBgLoaded, setIsBgLoaded] = useState(false);
  const [pinDimensions, setPinDimensions] = useState([45, 68]);
  const [userHasMovedMap, setUserHasMovedMap] = useState(false);

  const size = useWindowSize();
  const mapImage = useRef(null);

  const [multiplier, setMultiplier] = useState({
    x: size.width / bgImageDimensions.width,
    y: size.height / bgImageDimensions.height,
  });

  useEffect(() => {
    setMultiplier({
      x: mapImage.current.width / bgImageDimensions.width,
      y: mapImage.current.height / bgImageDimensions.height,
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
        mobilePinDimensions.height / mobileScale,
      ]);
    } else {
      setPinDimensions([
        desktopPinDimensions.width,
        desktopPinDimensions.height,
      ]);
    }
    recenterMap();
    // catch times when the bg image loads but doesn't call bgLoaded
    setTimeout(() => bgLoaded(), 5000);
  }, [size.width]);

  useEffect(() => {
    if (activeCategory === "all") {
      setFilteredStories(stories);
    } else {
      const filtered = stories.filter((story) => {
        return story.fields.categories
          .map((category) => category.sys.id)
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
        y: 0 - (intermountainPinLocation.y - size.height / 2) * 0.5,
      });
    } else {
      if (welcomeFinished) {
        setScale(1);
      }
      setTranslation({
        x: 0 - (intermountainPinLocation.x - size.width / 2),
        y: 0 - (intermountainPinLocation.y - size.height / 3),
      });
    }
  };

  const dismissOverlay = () => {
    setHideWelcomeOverlay(true);
  };

  // initial zoom and pan
  useEffect(() => {
    if (!hideWelcomeOverlay) {
      return;
    }
    if (!welcomeFinished) {
      if (!initialZoomFinished) {
        if (scale < 1) {
          setTimeout(() => {
            setScale(scale + 0.025);
          }, 100 + scale);
        } else {
          setInitialZoomFinished(true);
        }
      } else {
        setWelcomeFinished(true);
      }
    }
  }, [initialZoomFinished, hideWelcomeOverlay, scale, translation]);

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
        recenterMap={recenterMap}
        setActiveCategory={setActiveCategory}
        submitTabContent={submitTabContent}
        thankYouForSharingContent={thankYouForSharingContent}
      />
      <div className="absolute inset-0 z-0 h-screen w-full pt-16 lg:pt-0">
        {welcomeFinished && !userHasMovedMap && (
          <>
            <TemporaryWelcomeMap />
            <PageArrows
              translation={translation}
              setTranslation={setTranslation}
            />
          </>
        )}
        <div className="relative z-0 font-bold text-2xl text-gray-600 uppercase w-full h-screen overflow-hidden">
          <MapInteractionCSS
            onChange={(props) => {
              if (scale !== props.scale) {
                setScale(props.scale);
                if (size.width < desktopWidth) {
                  setPinDimensions([
                    mobilePinDimensions.width / props.scale,
                    mobilePinDimensions.height / props.scale,
                  ]);
                } else {
                  setPinDimensions([
                    desktopPinDimensions.width / props.scale,
                    desktopPinDimensions.height / props.scale,
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
              yMax: 0,
            }}
            minScale={minScale}
            maxScale={4}
            disablePan={!welcomeFinished || activeStory ? true : false}
            disableZoom={!welcomeFinished || activeStory ? true : false}
            showControls={true}
            controlsClass={`absolute z-50 right-0 bottom-0 mr-3 mb-3 bg-white rounded-lg`}
            btnClass={`hidden lg:inline-block relative w-12 p-3 hover:bg-gray-200 rounded-lg`}
          >
            <div
              className="relative"
              onMouseUp={() => {
                if (!userHasMovedMap) {
                  setUserHasMovedMap(true);
                }
              }}
              onTouchEnd={() => {
                if (!userHasMovedMap) {
                  setUserHasMovedMap(true);
                }
              }}
              style={{
                width: bgImageDimensions.width,
                height: bgImageDimensions.height,
              }}
            >
              <picture>
                <source
                  srcset="/images/pch-background.webp"
                  type="image/webp"
                  alt="map background"
                  className="absolute z-0 map-picture"
                  draggable="false"
                  id={`mapImage`}
                  onLoad={bgLoaded}
                  ref={mapImage}
                  style={{
                    width: bgImageDimensions.width,
                    height: bgImageDimensions.height,
                  }}
                />
                <img
                  alt="map background"
                  className="absolute z-0 map-picture"
                  draggable="false"
                  id={`mapImage`}
                  onLoad={bgLoaded}
                  ref={mapImage}
                  src="/images/pch-background.png"
                  style={{
                    width: bgImageDimensions.width,
                    height: bgImageDimensions.height,
                  }}
                />
              </picture>
              {isBgLoaded && welcomeFinished && (
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
                  aria-label="Primary Children's Hospital"
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
        setActiveStory={setActiveStory}
        mainStoryContent={mainStoryContent}
        thankYouForSharingContent={thankYouForSharingContent}
        stories={filteredStories}
      />
    </div>
  );
};

export default Map;
