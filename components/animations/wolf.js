import React from "react";
import Lottie from "react-lottie";
import * as animationData from "./wolf.json";

const Wolf = ({ width, height, left, top }) => {
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
      id="wolf"
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
export default Wolf;
