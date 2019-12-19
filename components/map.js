import React from "react";
import MiniMap from "./mini-map";

const Map = ({ children }) => (
  <div>
    <div className="fixed z-10 w-full">{children}</div>
    <div className="absolute inset-0 z-0 flex justify-center items-center">
      <div
        className="relative font-bold text-2xl text-gray-600 uppercase"
        style={{ width: "3200px", height: "2400px", overflow: "visible" }}
      >
        <img
          alt="map background"
          src="/pch-background.jpg"
          style={{ width: "3200px", height: "2400px", maxWidth: "none" }}
        />
      </div>
    </div>
  </div>
);

export default Map;
