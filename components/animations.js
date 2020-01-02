import React, { useEffect, useState } from "react";
import Fish from "./animations/fish.js";
import FishColorful from "./animations/fish-colorful.js";
import Boat from "./animations/boat.js";
import useWindowSize from "../shared/hooks/useWindowSize.js";
import Croc from "./animations/croc.js";
import Mouse from "./animations/mouse.js";
import Windmill from "./animations/windmill.js";
import Gopher from "./animations/gopher.js";
import Toucan from "./animations/toucan.js";
import OrangeFish from "./animations/orange-fish.js";
import MountainsBirds from "./animations/mountains-birds.js";

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
        width={70 * multiplier.x}
        height={36 * multiplier.y}
        left={1080 * multiplier.x}
        top={1960 * multiplier.y}
      />
      <Croc
        width={70 * multiplier.x}
        height={36 * multiplier.y}
        left={1500 * multiplier.x}
        top={1875 * multiplier.y}
      />
      <Mouse
        width={36 * multiplier.x}
        height={57 * multiplier.y}
        left={478 * multiplier.x}
        top={135 * multiplier.y}
      />
      <Mouse
        width={36 * multiplier.x}
        height={57 * multiplier.y}
        left={1185 * multiplier.x}
        top={300 * multiplier.y}
      />
      <Windmill
        width={122 * multiplier.x}
        height={122 * multiplier.y}
        left={1835 * multiplier.x}
        top={538 * multiplier.y}
      />
      <Gopher
        width={30 * multiplier.x}
        height={49 * multiplier.y}
        left={2187 * multiplier.x}
        top={1223 * multiplier.y}
      />
      <Gopher
        width={30 * multiplier.x}
        height={49 * multiplier.y}
        left={2141 * multiplier.x}
        top={1035 * multiplier.y}
      />
      <Toucan
        width={146 * multiplier.x}
        height={166 * multiplier.y}
        left={2057 * multiplier.x}
        top={1960 * multiplier.y}
      />
      <OrangeFish
        width={50 * multiplier.x}
        height={63 * multiplier.y}
        left={976 * multiplier.x}
        top={2110 * multiplier.y}
      />
      <OrangeFish
        width={50 * multiplier.x}
        height={63 * multiplier.y}
        left={2462 * multiplier.x}
        top={1624 * multiplier.y}
      />
      <MountainsBirds
        width={700 * multiplier.x}
        height={270 * multiplier.y}
        left={500 * multiplier.x}
        top={815 * multiplier.y}
      />
    </>
  );
};
export default Animations;
