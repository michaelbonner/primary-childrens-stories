import React, { useEffect, useState } from "react";
import Fish from "./animations/fish.js";
import FishColorful from "./animations/fish-colorful.js";
import Boat from "./animations/boat.js";
import useWindowSize from "../shared/hooks/useWindowSize.js";
import Croc from "./animations/croc.js";

const Animations = ({ scale, mapImage }) => {
  const bgImageDimensions = {
    width: 3200,
    height: 2400
  };

  const size = useWindowSize();
  const [multiplier, setMultiplier] = useState({
    x: size.width / bgImageDimensions.width,
    y: size.height / bgImageDimensions.height
  });
  useEffect(() => {
    setMultiplier({
      x: mapImage.current.width / bgImageDimensions.width,
      y: mapImage.current.height / bgImageDimensions.height
    });
  }, [scale, size, mapImage]);
  return (
    <>
      <Fish
        width={60 * multiplier.x}
        height={70 * multiplier.y}
        left={640 * multiplier.x}
        top={490 * multiplier.y}
      />
      <FishColorful
        width={60 * multiplier.x}
        height={70 * multiplier.y}
        left={320 * multiplier.x}
        top={785 * multiplier.y}
      />
      <Boat
        width={70 * multiplier.x}
        height={120 * multiplier.y}
        left={1150 * multiplier.x}
        top={965 * multiplier.y}
      />
      <Croc
        width={90 * multiplier.x}
        height={48 * multiplier.y}
        left={1080 * multiplier.x}
        top={1940 * multiplier.y}
      />
      <Croc
        width={90 * multiplier.x}
        height={48 * multiplier.y}
        left={1500 * multiplier.x}
        top={1855 * multiplier.y}
      />
    </>
  );
};
export default Animations;
