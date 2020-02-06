import React from "react";
import Lottie from "react-lottie";
import * as animationData from "./elephant.json";

const Elephant = ({ width, height, left, top }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    width: width,
    height: height,
    animationData: animationData.default,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  return (
    <div
      className="absolute inline-block z-20"
      id="elephant"
      style={{
        width: `${width}px`,
        height: `${height}px`,
        left: `${left}px`,
        top: `${top}px`
      }}
    >
      <Lottie
        ariaRole="figure"
        options={defaultOptions}
        height={height}
        width={width}
      />
    </div>
  );
};
export default Elephant;
