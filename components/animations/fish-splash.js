import React from "react";
import Lottie from "react-lottie";
import * as animationData from "./fish-splash.json";

const FishSplash = ({ width, height, left, top }) => {
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
      id="fish-splash"
      style={{
        width: `${width}px`,
        height: `${height}px`,
        transform: `translate3d(${left}px, ${top}px, 0)`
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
export default FishSplash;
