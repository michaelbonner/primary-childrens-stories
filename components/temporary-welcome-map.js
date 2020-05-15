import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import WelcomeMap from "./animations/welcome-map";

const TemporaryWelcomeMap = () => {
  const props = useSpring({
    from: { opacity: 0, transform: `translate3d(-50px, 50px, 0) scale(0.5)` },
    to: { opacity: 1, transform: `translate3d(0, 0, 0) scale(1)` },
    config: { duration: 750 },
    delay: 3500,
  });

  return (
    <animated.div
      className="hidden lg:inline-block w-64 h-48 z-40 bg-white rounded-lg shadow-lg absolute left-0 bottom-0 mb-4 ml-4"
      style={props}
    >
      <WelcomeMap className="w-full h-full" />
    </animated.div>
  );
};
export default TemporaryWelcomeMap;
