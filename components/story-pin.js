import React from "react";
import { useSpring, animated } from "react-spring";

const StoryPin = ({ id, left, pinColor, pinDimensions, title, top }) => {
  const pinAnimation = useSpring({ opacity: 1, from: { opacity: 0 } });
  return (
    <animated.div
      className="absolute z-50"
      style={{
        left,
        top,
        ...pinAnimation
      }}
    >
      <button
        href={`/?id=${id}`}
        onClick={() => setActiveStory(story)}
        onTouchEnd={() => setActiveStory(story)}
      >
        <img
          alt={title}
          style={{
            width: `${pinDimensions[0]}px`,
            height: `${pinDimensions[1]}px`
          }}
          src={`/pins/${pinColor}.svg`}
        />
      </button>
    </animated.div>
  );
};
export default StoryPin;
