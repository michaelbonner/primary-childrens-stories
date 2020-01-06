import React from "react";
import Lottie from "react-lottie";
import * as animationData from "./crane.json";

const Crane = ({ width, height, left, top }) => {
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
      className="absolute inline-block z-30"
      id="crane"
      style={{
        width: `${width}px`,
        height: `${height}px`,
        left: `${left}px`,
        top: `${top}px`
      }}
    >
      <Lottie options={defaultOptions} height={height} width={width} />
    </div>
  );
};
export default Crane;
