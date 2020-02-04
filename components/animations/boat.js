import React from "react";

const Boat = ({ width, height, left, top }) => {
  return (
    <>
      <svg
        className="absolute inline-block z-20"
        id="boat"
        style={{
          width: `${width}px`,
          height: `${height}px`,
          left: `${left}px`,
          top: `${top}px`
        }}
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 49.9 74.6"
      >
        <g>
          <g>
            <path
              className="boat0"
              d="M21.3,10.8c0,0,7.2,22.9-2.6,49.8c0,0,12-9.8,24.6-5.9C43.3,54.7,48,25.8,21.3,10.8z"
            />
            <linearGradient
              id="BOAT_1_"
              gradientUnits="userSpaceOnUse"
              x1="14.7283"
              y1="16.5462"
              x2="14.7283"
              y2="67.0551"
            >
              <stop offset="7.451954e-02" style={{ stopColor: "#EFDC5E" }} />
              <stop offset="0.1864" style={{ stopColor: "#EED65C" }} />
              <stop offset="0.3368" style={{ stopColor: "#EAC555" }} />
              <stop offset="0.5089" style={{ stopColor: "#E5A94A" }} />
              <stop offset="0.6972" style={{ stopColor: "#DD823B" }} />
              <stop offset="0.8966" style={{ stopColor: "#D45028" }} />
              <stop offset="0.9081" style={{ stopColor: "#D34D27" }} />
            </linearGradient>
            <path
              className="boat1"
              d="M20.3,13.8c0,0-2.1,35.9-12.8,49.2c0,0,7.7,1.4,9.8-7C17.4,56.1,25.2,36.3,20.3,13.8z"
            />
            <path
              className="boat2"
              d="M21.2,6.8c0,0,3.5-1.4,6.3,0.6s7.3-1.1,7.3-1.1l-0.9,2.3l0.9,1.1c0,0-4.4,3.1-7.3,1.1s-6.3-0.6-6.3-0.6V6.8z"
            />
          </g>
          <linearGradient
            id="BOAT_2_"
            gradientUnits="userSpaceOnUse"
            x1="25.1458"
            y1="56.9238"
            x2="25.1458"
            y2="84.482"
          >
            <stop offset="0" style={{ stopColor: "#ECAF61" }} />
            <stop offset="0.6856" style={{ stopColor: "#601F41" }} />
          </linearGradient>
          <path
            className="boat3"
            d="M43,57.3c0.3-0.1-10.9-3.4-24.3,6.1c0,0-4.7,3.2-11.5,1.4v2.1c0,0,12.1,5.6,31.3,0
		C38.5,66.9,36.4,60.5,43,57.3z"
          />
        </g>
      </svg>
      <style jsx>{`
        @media (min-width: 761px) {
          #boat {
            animation: bob 8s ease-in infinite;
          }
        }
        .boat0 {
          fill: #ffffff;
        }
        .boat1 {
          fill: url(#BOAT_1_);
        }
        .boat2 {
          fill: #423091;
        }
        .boat3 {
          fill: url(#BOAT_2_);
        }

        @keyframes bob {
          0% {
            transform: rotate(0deg) translate(0, 0);
          }
          25% {
            transform: rotate(0deg) translate(5px, -5px);
          }
          50% {
            transform: rotate(-5deg) translate(10px, -3px);
          }
          25% {
            transform: rotate(0deg) translate(5px, -5px);
          }
          100% {
            transform: rotate(0deg) translate(0, 0);
          }
        }
      `}</style>
    </>
  );
};
export default Boat;
