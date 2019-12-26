import React from "react";
import Fish from "./animations/fish.js";
import FishColorful from "./animations/fish-colorful.js";
import Boat from "./animations/boat.js";

const Animations = ({ scale }) => {
  return (
    <>
      <Fish
        width={60 / scale}
        height={70 / scale}
        left={870 / scale}
        top={690 / scale}
      />
      <FishColorful
        width={60 / scale}
        height={70 / scale}
        left={300 / scale}
        top={1100 / scale}
      />
      <Boat
        width={70 / scale}
        height={120 / scale}
        left={1600 / scale}
        top={1385 / scale}
      />
    </>
  );
};
export default Animations;
