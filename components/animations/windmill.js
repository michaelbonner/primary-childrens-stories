import React from "react";

const Windmill = ({ animate, height, left, top, width }) => {
  return (
    <>
      <svg
        className={`absolute z-20 animation${animate ? " animate" : ""}`}
        id="windmill"
        style={{
          width: `${width}px`,
          height: `${height}px`,
          transform: `translate3d(${left}px, ${top}px, 0)`,
        }}
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        viewBox="0 0 110 130"
        x="0px"
        y="0px"
      >
        <g className="inline-block">
          <linearGradient
            id="WINDMILL_1_"
            gradientUnits="userSpaceOnUse"
            x1="48.9079"
            y1="38.7409"
            x2="26.1579"
            y2="125.2409"
          >
            <stop offset="7.415896e-02" style={{ stopColor: "#C565A6" }} />
            <stop offset="1" style={{ stopColor: "#005C75" }} />
          </linearGradient>
          <polygon
            style={{ fill: "url(#WINDMILL_1_)" }}
            points="33.8,126 22.2,121.7 33.8,66.4 46.9,66.4"
          />
          <linearGradient
            id="WINDMILL_2_"
            gradientUnits="userSpaceOnUse"
            x1="52.4174"
            y1="39.6639"
            x2="29.6674"
            y2="126.1639"
          >
            <stop offset="7.415896e-02" style={{ stopColor: "#C565A6" }} />
            <stop offset="1" style={{ stopColor: "#005C75" }} />
          </linearGradient>
          <rect
            x="46.9"
            y="40.6"
            style={{ fill: "url(#WINDMILL_2_)" }}
            width="8.3"
            height="8.3"
          />
          <polygon
            style={{ fill: "#D3CEAA" }}
            points="55.6,66.4 68,66.4 76.6,126 60.7,126 49.7,126 33.8,126 42.4,66.4 54.8,66.4"
          />
          <linearGradient
            id="WINDMILL_3_"
            gradientUnits="userSpaceOnUse"
            x1="53.3373"
            y1="39.9059"
            x2="30.5873"
            y2="126.4059"
          >
            <stop offset="7.415896e-02" style={{ stopColor: "#C565A6" }} />
            <stop offset="1" style={{ stopColor: "#005C75" }} />
          </linearGradient>
          <path
            style={{ fill: "url(#WINDMILL_3_)" }}
            d="M45.1,41.7L32.7,63.1c-0.8,1.4,0.2,3.2,1.9,3.2h24.8c1.7,0,2.7-1.8,1.9-3.2L48.8,41.7
		C48,40.2,45.9,40.2,45.1,41.7z"
          />
          <linearGradient
            id="WINDMILL_4_"
            gradientUnits="userSpaceOnUse"
            x1="55.219"
            y1="66.1834"
            x2="55.219"
            y2="32.4965"
          >
            <stop offset="0.2267" style={{ stopColor: "#A51E22" }} />
            <stop offset="1" style={{ stopColor: "#5D0000" }} />
          </linearGradient>
          <path
            style={{ fill: "url(#WINDMILL_4_)" }}
            d="M53.4,41.7L41,63.1c-0.8,1.4,0.2,3.2,1.9,3.2h24.8c1.7,0,2.7-1.8,1.9-3.2L57.1,41.7
		C56.3,40.2,54.2,40.2,53.4,41.7z"
          />
          <linearGradient
            id="WINDMILL_5_"
            gradientUnits="userSpaceOnUse"
            x1="50.5389"
            y1="119.2905"
            x2="60.9345"
            y2="119.2905"
          >
            <stop offset="0.2267" style={{ stopColor: "#A51E22" }} />
            <stop offset="1" style={{ stopColor: "#5D0000" }} />
          </linearGradient>
          <path
            style={{ fill: "url(#WINDMILL_5_)" }}
            d="M50.5,117.8c0-2.9,2.3-5.2,5.2-5.2s5.2,2.3,5.2,5.2v8.2H50.5V117.8z"
          />
          <g>
            <path
              className="blades"
              style={{ fill: "#F1F2F2" }}
              d="M107.4,52.3v-1.2H69.2v1.2h8.2v2.7H60.3c-0.3-2.4-2.2-4.3-4.6-4.5v-8.9h3.8V3.3h-1.2v4.1h-2.6V3.3
			h-1.2v4.1h-2.7V3.3h-1.2v38.2h3.8v8.9c-2.4,0.3-4.3,2.1-4.6,4.5v0H33v-2.7h8.2v-1.2H3v1.2h4.1v2.7H3v1.2h4.1v2.6H3V60h38.2v-1.2
			H33v-2.6h17c0.3,2.4,2.2,4.3,4.6,4.6v17.1h-2.7v-8.2h-1.2v38.2h1.2v-4.1h2.7v4.1h1.2v-4.1h2.6v4.1h1.2V69.6h-1.2v8.2h-2.6V60.7
			c2.4-0.3,4.3-2.2,4.6-4.6v0h17.1v2.7h-8.2V60h38.2v-1.2h-4.1v-2.7h4.1v-1.2h-4.1v-2.7H107.4z M55.8,8.6h2.6v7h-2.6V8.6z
			 M55.8,16.8h2.6v7h-2.6V16.8z M55.8,25.1h2.6v7h-2.6V25.1z M55.8,33.3h2.6v7h-2.6V33.3z M15.4,58.8h-7v-2.6h7V58.8z M15.4,54.9h-7
			v-2.7h7V54.9z M23.6,58.8h-7v-2.6h7V58.8z M23.6,54.9h-7v-2.7h7V54.9z M31.8,58.8h-7v-2.6h7V58.8z M31.8,54.9h-7v-2.7h7V54.9z
			 M54.6,102.4h-2.7v-7h2.7V102.4z M54.6,94.2h-2.7v-7h2.7V94.2z M54.6,86h-2.7v-7h2.7V86z M51.9,8.6h2.7v7h-2.7V8.6z M51.9,16.8
			h2.7v7h-2.7V16.8z M51.9,25.1h2.7v7h-2.7V25.1z M51.9,40.3v-7h2.7v7H51.9z M58.4,102.4h-2.6v-7h2.6V102.4z M58.4,94.2h-2.6v-7h2.6
			V94.2z M58.4,79v7h-2.6v-7H58.4z M85.7,58.8h-7v-2.7h7V58.8z M85.7,54.9h-7v-2.7h7V54.9z M93.9,58.8h-7v-2.7h7V58.8z M93.9,54.9
			h-7v-2.7h7V54.9z M102.1,58.8h-7v-2.7h7V58.8z M102.1,54.9h-7v-2.7h7V54.9z"
            />
          </g>
        </g>
      </svg>

      <style jsx>{`
        #windmill.animate .blades {
          animation: rotateBlades 8s linear infinite;
          transform-origin: 50% 42.5%;
        }

        @keyframes rotateBlades {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </>
  );
};
export default Windmill;
