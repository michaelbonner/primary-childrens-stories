import React, { useState } from "react";
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
  const [isAnimated, setIsAnimated] = useState(false);
  const contentProps = useSpring({
    transform: isAnimated
      ? "translateY(-5px), scale(1.15)"
      : "translateY(0px) scale(1)"
  });

  return (
    <animated.div
      className="absolute z-30"
      style={{
        left,
        top,
        ...contentProps
      }}
      onMouseEnter={() => setIsAnimated(true)}
      onMouseLeave={() => setIsAnimated(false)}
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
