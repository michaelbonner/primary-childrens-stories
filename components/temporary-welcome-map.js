import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import WelcomeMap from "./animations/welcome-map";

const TemporaryWelcomeMap = () => {
  const [toggle, setToggle] = useState(false);
  const props = useSpring({
    opacity: toggle ? 1 : 0,
    config: { duration: 1000 },
  });

  useEffect(() => {
    setTimeout(() => setToggle(true), 5000);
  }, []);

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
