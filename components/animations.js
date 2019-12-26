import React from "react";
import Fish from "./animations/fish.js";
import FishColorful from "./animations/fish-colorful.js";

const Animations = ({ scale }) => {
  return (
    <>
      <Fish
        width={60 / scale}
        height={70 / scale}
        left={850 / scale}
        top={660 / scale}
      />
      <FishColorful
        width={60 / scale}
        height={70 / scale}
        left={230 / scale}
        top={1050 / scale}
      />
    </>
  );
};
export default Animations;
