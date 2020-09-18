import React, { useState } from "react";
import { useTrail, animated } from "react-spring";
import StoryPin from "./story-pin";

const StoryPins = ({
  activeCategory,
  categories,
  multiplier,
  pinDimensions,
  filteredStories,
  setActiveStory,
}) => {
  const trail = useTrail(filteredStories.length, {
    from: { opacity: 0, transform: "translate3d(0,-80px,0)" },
    to: { opacity: 1, transform: "translate3d(0,0px,0)" },
  });

  const [hoveredPin, setHoveredPin] = useState(null);

  return trail.map((props, index) => {
    let pinColor;
    if (activeCategory !== "all") {
      pinColor = categories.filter(
        (category) => category.sys.id === activeCategory
      )[0].fields.color;
    } else {
      pinColor =
        filteredStories[index].fields.categories &&
        filteredStories[index].fields.categories[0] &&
        filteredStories[index].fields.categories[0].fields
          ? filteredStories[index].fields.categories[0].fields.color
          : "red";
    }
    return (
      <animated.div
        className={`relative ${
          hoveredPin === filteredStories[index].sys.id ? "z-40" : "z-30"
        }`}
        key={filteredStories[index].sys.id}
        style={props}
      >
        <StoryPin
          id={filteredStories[index].sys.id}
          left={multiplier.x * filteredStories[index].fields.xCoordinate}
          top={multiplier.y * filteredStories[index].fields.yCoordinate}
          setActiveStory={setActiveStory}
          story={filteredStories[index]}
          title={filteredStories[index].fields.title}
          pinColor={pinColor}
          pinDimensions={pinDimensions}
          setHoveredPin={setHoveredPin}
        />
      </animated.div>
    );
  });
};
export default StoryPins;
