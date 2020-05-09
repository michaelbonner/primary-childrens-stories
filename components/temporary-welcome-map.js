import React from "react";
import WelcomeMap from "./animations/welcome-map";

const TemporaryWelcomeMap = () => {
  return (
    <div className="hidden lg:inline-block w-64 h-48 z-40 bg-white rounded-lg shadow-lg absolute left-0 bottom-0 mb-4 ml-4">
      <WelcomeMap className="w-full h-full" />
    </div>
  );
};
export default TemporaryWelcomeMap;
