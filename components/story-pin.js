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
      className={`absolute ${isAnimated ? "z-40" : "z-30"} flex text-base`}
      style={{
        left,
        top,
        ...contentProps,
      }}
      onMouseEnter={() => setIsAnimated(true)}
      onMouseLeave={() => setIsAnimated(false)}
    >
      <button
        className="z-30"
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
        } shadow-lg z-20 bg-white py-3 px-6 text-right rounded-lg`}
        style={{ transform: `translate3d(-30px, 0, 0)` }}
      >
        <div
          className={`relative z-50 w-20 h-20 mx-auto mt-1 rounded-full shadow-md bg-blue-100 border-2 border-white cursor-pointer`}
          onClick={() => setActiveStory(story)}
          onTouchEnd={() => setActiveStory(story)}
          style={{
            backgroundImage: `url(${story.fields.featuredImage.fields.file.url})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
          title={story.fields.title}
        ></div>
        <p className="text-base font-normal mt-3 normal-case">
          {story.fields.title}
        </p>
      </div>
    </animated.div>
  );
};
export default StoryPin;
