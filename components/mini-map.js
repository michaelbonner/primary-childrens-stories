import React from "react";
import Image from "next/image";

const MiniMap = () => (
  <div className="fixed bottom-0 left-0 z-10 inline-block">
    <div className="ml-8 mb-8 py-2 px-2 w-32 md:w-48 bg-gray-200 font-bold text-base rounded-lg text-gray-500 uppercase shadow-md">
      <Image src="/pch-mini-map.jpg" alt="Mini Map" className="rounded-lg" />
    </div>
  </div>
);

export default MiniMap;
