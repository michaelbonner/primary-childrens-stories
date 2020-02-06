import React from "react";

const MapSimple = ({ children }) => {
  return (
    <div>
      <div className="fixed z-10 w-full">{children}</div>
      <img
        alt="map background"
        src="/images/pch-background-w-animations.svg"
        style={{ maxWidth: "none", width: "3200px", height: "2400px" }}
      />
    </div>
  );
};

export default MapSimple;
