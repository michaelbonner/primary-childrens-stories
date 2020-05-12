import React from "react";
import Lottie from "react-lottie";
import * as animationData from "./welcome-map.json";

const WelcomeMap = ({ className }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    maxWidth: "100%",
    animationData: animationData.default,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
      className: "max-w-full",
    },
  };
  return (
    <div
      className={className}
      id="welcomeMap"
      style={{
        maxWidth: "100%",
      }}
    >
      <Lottie ariaRole="figure" options={defaultOptions} />
    </div>
  );
};
export default WelcomeMap;
