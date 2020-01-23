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
import Bear from "./animations/bear.js";
import Crab from "./animations/crab.js";
import Crane from "./animations/crane.js";
import Deer from "./animations/deer.js";
import Frog from "./animations/frog.js";
import Rams from "./animations/rams.js";
import Squirrel from "./animations/squirrel.js";

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
      {/* CSS animations */}
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
        animationLength={3.2}
        width={36 * multiplier.x}
        height={57 * multiplier.y}
        left={478 * multiplier.x}
        top={135 * multiplier.y}
      />
      <Mouse
        animationLength={3.8}
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
        animationLength={3.4}
        width={30 * multiplier.x}
        height={49 * multiplier.y}
        left={2187 * multiplier.x}
        top={1120 * multiplier.y}
      />
      <Gopher
        animationLength={3.7}
        width={30 * multiplier.x}
        height={49 * multiplier.y}
        left={2141 * multiplier.x}
        top={935 * multiplier.y}
      />
      <Toucan
        width={146 * multiplier.x}
        height={166 * multiplier.y}
        left={2057 * multiplier.x}
        top={1960 * multiplier.y}
      />
      <MountainsBirds
        width={700 * multiplier.x}
        height={270 * multiplier.y}
        left={500 * multiplier.x}
        top={815 * multiplier.y}
      />

      {/* Lottie animations */}
      <Bear
        width={72 * multiplier.x}
        height={112 * multiplier.y}
        left={1052 * multiplier.x}
        top={648 * multiplier.y}
      />
      <Crab
        width={140 * multiplier.x}
        height={100 * multiplier.y}
        left={306 * multiplier.x}
        top={1071 * multiplier.y}
      />
      <Crane
        width={184 * multiplier.x}
        height={212 * multiplier.y}
        left={1561 * multiplier.x}
        top={1541 * multiplier.y}
      />
      <Deer
        width={152 * multiplier.x}
        height={142 * multiplier.y}
        left={1800 * multiplier.x}
        top={770 * multiplier.y}
      />
      <Frog
        width={330 * multiplier.x}
        height={254 * multiplier.y}
        left={1745 * multiplier.x}
        top={1350 * multiplier.y}
      />
      <Rams
        width={263 * multiplier.x}
        height={88 * multiplier.y}
        left={1227 * multiplier.x}
        top={1315 * multiplier.y}
      />
      <Squirrel
        width={200 * multiplier.x}
        height={80 * multiplier.y}
        left={2225 * multiplier.x}
        top={580 * multiplier.y}
      />
    </>
  );
};
export default Animations;
