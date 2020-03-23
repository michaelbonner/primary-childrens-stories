import React from "react";

const OrangeFish = ({ width, height, left, top }) => {
  return (
    <>
      <svg
        className="absolute z-20"
        id="orangeFish"
        style={{
          width: `${width}px`,
          height: `${height}px`,
          transform: `translate3d(${left}px, ${top}px, 0)`
        }}
        version="1.1"
        viewBox="0 0 57.9 70.6"
        x="0px"
        xmlns="http://www.w3.org/2000/svg"
        y="0px"
      >
        <g>
          <path className="orangeFish0" d="M37.9,9.2c0,0-7.8-16.5-19.6,6.2" />
          <g>
            <path
              className="orangeFish1"
              d="M14.8,19.3C14.8,19.3,14.8,19.3,14.8,19.3c-15.6-1.9-14.1,21.9,0.3,30.1c-3.2-4.2-5.2-9.5-5.2-15.2
			C10,28.6,11.8,23.5,14.8,19.3z"
            />
            <path
              className="orangeFish0"
              d="M14.8,19.3c-3.1,4.2-4.9,9.3-4.9,14.8c0,5.7,1.9,11,5.2,15.2c0.1-9,4.9-16.9,12.1-21.3
			C25.2,24,21.5,20.1,14.8,19.3z"
            />
            <path
              className="orangeFish0"
              d="M48.1,25.7c-2.5-0.8-5.1-1.2-7.8-1.2c-0.1,0-0.1,0-0.2,0c1-7.9-2.1-15.1-2.1-15.3c5.6,0.6,10.7,2.9,14.4,6.7
			c0,0,5.4,7.4-1.1,10.4c0,0-2-0.7-2.2-3.9L48.1,25.7z"
            />
            <path
              className="orangeFish0"
              d="M29.7,39.7c6.9-4,9.6-9.8,10.3-15.3c-4.7,0-9.1,1.4-12.8,3.6C30,33.7,29.7,39.7,29.7,39.7z"
            />
            <path
              className="orangeFish1"
              d="M37.9,9.2C37,9.1,36.1,9,35.1,9c-8.3,0-15.7,4-20.2,10.3c6.7,0.8,10.3,4.7,12.4,8.8c3.7-2.3,8.1-3.6,12.8-3.6
			C41.1,16.6,38,9.3,37.9,9.2z"
            />
            <path
              className="orangeFish1"
              d="M21.7,66.5c0,0-2.3-5.6,4.4-8.9c-4.4-1.7-8.1-4.5-10.9-8.2c0,0.1,0,0.1,0,0.2C15.1,56.1,17.6,62.1,21.7,66.5z
			"
            />
          </g>
          <g>
            <path
              className="orangeFish2"
              d="M47.8,15.9c1.3,0.8,1.7,2.6,0.9,3.9c-0.8,1.3-2.6,1.7-3.9,0.9c-1.3-0.8-1.7-2.6-0.9-3.9
			C44.7,15.4,46.5,15,47.8,15.9z"
            />

            <linearGradient
              id="ORANGE_FISH_1_"
              gradientUnits="userSpaceOnUse"
              x1="-2695.1511"
              y1="823.7159"
              x2="-2689.325"
              y2="825.6262"
              gradientTransform="matrix(-0.7796 0.6263 0.6263 0.7796 -2567.6335 1059.4579)"
            >
              <stop offset="0" style={{ stopColor: "#FFFFFF" }} />
              <stop
                offset="1"
                style={{ stopColor: "#FFFFFF", stopOpacity: "0" }}
              />
            </linearGradient>
            <path
              className="orangeFish3"
              d="M45.3,17.6c0,0,1.8-0.6,1.8,0.7c0,0.6,0.6,0.9,1.2,0.2c0.6-0.7-0.1-1.5-0.1-1.5s-1.4-1.7-3.1-0.3
			c0,0-0.5,0.4-0.3,0.7C44.9,17.8,45.3,17.6,45.3,17.6z"
            />
          </g>
        </g>
      </svg>
      <div
        className="absolute z-40 hidden md:inline-block"
        style={{
          width: `${width * 2.4}px`,
          height: `${height}px`,
          transform: `translate3d(${left - width / 2}px, ${top +
            height / 3}px, 0)`,
          background: "#36618E"
        }}
      />
      <style jsx>{`
        .orangeFish0 {
          fill: #f05a28;
        }
        .orangeFish1 {
          fill: #ffffff;
        }
        .orangeFish2 {
          fill: #231f20;
        }
        .orangeFish3 {
          opacity: 0.6;
          fill: url(#ORANGE_FISH_1_);
        }

        @media (min-width: 761px) {
          #orangeFish {
            animation: spinOrangeFish 4.3s ease-in-out infinite;
          }
        }

        @keyframes spinOrangeFish {
          0% {
            opacity: 1;
            transform: rotate(0deg) translateY(-30px);
          }
          25% {
            opacity: 1;
          }
          30% {
            opacity: 0;
            transform: rotate(180deg) translateY(-11px);
          }
          50% {
            opacity: 0;
            transform: rotate(250deg) translateY(0px);
          }
          65% {
            opacity: 1;
          }
          100% {
            opacity: 1;
            transform: rotate(360deg) translateY(-30px);
          }
        }
      `}</style>
    </>
  );
};
export default OrangeFish;
