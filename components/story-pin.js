import React from "react";
import { useSpring, animated } from "react-spring";

const StoryPin = ({
  id,
  left,
  pinColor,
  pinDimensions,
  setActiveStory,
  story,
  title,
  top
}) => {
  return (
    <div
      className="absolute z-50"
      style={{
        left,
        top
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
    </div>
  );
};
export default StoryPin;
