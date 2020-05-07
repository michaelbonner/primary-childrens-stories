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
  top,
}) => {
  const [isAnimated, setIsAnimated] = useState(false);
  const contentProps = useSpring({
    transform: isAnimated
      ? "translate3d(0,-5px,0) scale(1.15)"
      : "translate3d(0,0px,0) scale(1)",
  });

  return (
    <animated.div
      className="absolute z-30 flex text-base"
      style={{
        left,
        top,
        ...contentProps,
      }}
      onMouseEnter={() => setIsAnimated(true)}
      onMouseLeave={() => setIsAnimated(false)}
    >
      <button
        href={`/?id=${id}`}
        onClick={() => setActiveStory(story)}
        onTouchEnd={() => setActiveStory(story)}
        style={{
          width: `${pinDimensions[0]}px`,
          height: `${pinDimensions[1]}px`,
        }}
      >
        <img
          alt={title}
          style={{
            width: `${pinDimensions[0]}px`,
            height: `${pinDimensions[1]}px`,
          }}
          src={`/pins/${pinColor}.svg`}
        />
      </button>
      <div
        className={`${
          isAnimated ? "" : "hidden"
        } relative z-50 w-16 h-16 rounded-full shadow bg-blue-100 border-2 border-white cursor-pointer`}
        onClick={() => setActiveStory(story)}
        onTouchEnd={() => setActiveStory(story)}
        style={{
          backgroundImage: `url(${story.fields.featuredImage.fields.file.url})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        title={story.fields.title}
      ></div>
    </animated.div>
  );
};
export default StoryPin;
