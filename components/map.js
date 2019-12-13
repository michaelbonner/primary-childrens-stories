import React from 'react'
import MiniMap from './mini-map'

const Map = ({ children }) => (
  <div>
    <div className="relative z-10">
      {children}
    </div>
    <div className="absolute inset-0 z-0 flex justify-center items-center">
      <div className="font-bold text-2xl text-gray-600 uppercase">
        Map
      </div>
    </div>
  </div>
)

export default Map
