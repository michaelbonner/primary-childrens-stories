import React from "react";

const MapSimple = ({ children }) => {
  return (
    <div>
      <div className="fixed z-10 w-full">{children}</div>
      <picture>
        <source
          srcSet="/images/pch-background.webp"
          type="image/webp"
          alt="map background"
          style={{ maxWidth: "none", width: "3200px", height: "2400px" }}
        />
        <img
          alt="map background"
          src="/images/pch-background.png"
          style={{ maxWidth: "none", width: "3200px", height: "2400px" }}
        />
      </picture>
    </div>
  );
};

export default MapSimple;
