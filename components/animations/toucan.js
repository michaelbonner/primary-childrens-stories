import React, { useState } from "react";
import useInterval from "shared/hooks/useInterval";

const Toucan = ({ animate, height, left, top, width }) => {
  const [flipped, setFlipped] = useState(false);

  if (animate) {
    useInterval(() => {
      setFlipped(!flipped);
    }, 3200);
  }

  return (
    <>
      <svg
        className="absolute inline-block z-20 animation"
        id="toucan"
        style={{
          width: `${width}px`,
          height: `${height}px`,
          transform: `translate3d(${left}px, ${top}px, 0)`,
          transform: `translate3d(0,${height / 2}px,0)`,
        }}
        version="1.1"
        viewBox="0 0 178.9 208.6"
        x="0px"
        xmlns="http://www.w3.org/2000/svg"
        y="0px"
      >
        <g>
          <linearGradient
            id="TOUCAN_1_"
            gradientUnits="userSpaceOnUse"
            x1="90.1115"
            y1="55.8478"
            x2="90.1115"
            y2="118.6014"
          >
            <stop offset="7.415896e-02" style={{ stopColor: "#00BCF0" }} />
            <stop offset="0.896" style={{ stopColor: "#00599E" }} />
          </linearGradient>
          <path
            className="toucan0"
            d="M24.6,78.1c-4.4,2.7-8,6.6-11.4,10.7c-0.8,1-1.6,2-1.9,3.2c-0.5,1.7,0.1,3.6,0.9,5.1c2.5,4.5,7.5,6.4,12.2,7.1
		c9.3,1.5,18.9-0.4,28.3,0.5c17.1,1.5,33.7,11.8,50.4,8c8.4-1.9,15.9-7.3,24.3-8.7c8.9-1.6,18.1,1.4,27.1,0.4
		c5-0.6,10.3-2.7,12.9-7.5c2.6-4.9,1.7-11.5-1.3-16.1s-7.8-7.4-12.6-9.1c-10.5-3.7-21.9-2.6-32.6-5.3c-6.4-1.6-12.6-4.5-19.1-5.9
		c-6.7-1.4-13.5-0.9-19,3.7c-5.4,4.4-10,6.7-16.7,7.7C52.3,73.7,37.2,70.3,24.6,78.1z"
          />
          <g>
            <g>
              <g>
                <g>
                  <rect
                    x="90.1"
                    y="92.2"
                    className="toucan1"
                    width="4.8"
                    height="104.6"
                  />
                  <path
                    className="toucan1"
                    d="M90.1,92.1c0-1.3,1.1-2.4,2.4-2.4c1.3,0,2.4,1.1,2.4,2.4v1.8h-4.9V92.1z"
                  />
                </g>
                <ellipse
                  className="toucan1"
                  cx="92.5"
                  cy="196.8"
                  rx="15.3"
                  ry="2.1"
                />
              </g>
            </g>
            <path
              className="toucan1"
              d="M92.5,129.8v-4.7c4.7,0,8.5-1.6,11.7-4.8c8.8-9.1,8.4-27.9,8.4-28.1l4.7-0.1c0,0.9,0.5,21-9.7,31.5
			C103.6,127.7,98.5,129.8,92.5,129.8z"
            />
            <path
              className="toucan1"
              d="M92.5,152.2c-4.4,0-8.4-1.7-11.7-5.1c-13.5-13.8-13-51.7-12.9-53.3l4.7,0.1c0,0.4-0.5,37.5,11.6,49.9
			c2.5,2.5,5.2,3.7,8.4,3.7V152.2z"
            />
            <circle className="toucan1" cx="114.9" cy="92.4" r="2.3" />
            <circle className="toucan1" cx="70.2" cy="93.7" r="2.3" />
          </g>
        </g>
        <g id="toucanOnTree" className={flipped ? "flipped" : ""}>
          <linearGradient
            id="TOUCAN_2_"
            gradientUnits="userSpaceOnUse"
            x1="55.2493"
            y1="66.4185"
            x2="88.1297"
            y2="66.4185"
          >
            <stop offset="7.415896e-02" style={{ stopColor: "#00BCF0" }} />
            <stop offset="0.896" style={{ stopColor: "#00599E" }} />
          </linearGradient>
          <path
            className="toucan2"
            d="M55.2,81.4l5.1,4.2l27.1-32.9c1.1-1.4,0.9-3.5-0.4-4.6c-1.4-1.1-3.5-0.9-4.6,0.4L55.2,81.4z"
          />
          <linearGradient
            id="TOUCAN_3_"
            gradientUnits="userSpaceOnUse"
            x1="54.6291"
            y1="56.4671"
            x2="87.5094"
            y2="56.4671"
          >
            <stop offset="7.451954e-02" style={{ stopColor: "#FFE100" }} />
            <stop offset="0.1671" style={{ stopColor: "#FEDB01" }} />
            <stop offset="0.2914" style={{ stopColor: "#F9CA05" }} />
            <stop offset="0.4339" style={{ stopColor: "#F3AE0A" }} />
            <stop offset="0.5897" style={{ stopColor: "#E98712" }} />
            <stop offset="0.7545" style={{ stopColor: "#DE551C" }} />
            <stop offset="0.9081" style={{ stopColor: "#D12027" }} />
          </linearGradient>
          <path
            className="toucan3"
            d="M54.6,71.4l5.1,4.2l27.1-32.9c1.1-1.4,0.9-3.5-0.4-4.6c-1.4-1.1-3.5-0.9-4.6,0.4L54.6,71.4z"
          />
          <linearGradient
            id="TOUCAN_4_"
            gradientUnits="userSpaceOnUse"
            x1="45.5263"
            y1="57.5361"
            x2="78.4067"
            y2="57.5361"
          >
            <stop offset="7.415896e-02" style={{ stopColor: "#00BCF0" }} />
            <stop offset="0.896" style={{ stopColor: "#00599E" }} />
          </linearGradient>
          <path
            className="toucan4"
            d="M45.5,72.5l5.1,4.2l27.1-32.9c1.1-1.4,0.9-3.5-0.4-4.6c-1.4-1.1-3.5-0.9-4.6,0.4L45.5,72.5z"
          />
          <circle className="toucan1" cx="45.3" cy="25.6" r="15.4" />
          <path
            className="toucan1"
            d="M46,48.2c0-8.5-6.9-15.4-15.4-15.4s-15.4,6.9-15.4,15.4c0,0-2,27.1,21.6,27.3"
          />
          <linearGradient
            id="TOUCAN_5_"
            gradientUnits="userSpaceOnUse"
            x1="45.0578"
            y1="28.3496"
            x2="45.0578"
            y2="77.0165"
          >
            <stop offset="0.1602" style={{ stopColor: "#F9EC31" }} />
            <stop offset="0.8931" style={{ stopColor: "#C9943E" }} />
          </linearGradient>
          <polyline
            className="toucan5"
            points="36.9,20.9 36.9,75.6 41.1,75.6 53.2,21.8 	"
          />
          <path
            className="toucan1"
            d="M40.2,48.4c0-7.8,6.3-14.1,14.1-14.1s14.1,6.3,14.1,14.1c0,0,7.4,44.6-28.2,44.6V48.4z"
          />
          <g>
            <linearGradient
              id="TOUCAN_6_"
              gradientUnits="userSpaceOnUse"
              x1="49.2807"
              y1="18.6292"
              x2="69.1141"
              y2="24.9626"
            >
              <stop offset="9.192708e-02" style={{ stopColor: "#D12027" }} />
              <stop offset="0.2455" style={{ stopColor: "#DE551C" }} />
              <stop offset="0.4103" style={{ stopColor: "#E98712" }} />
              <stop offset="0.5661" style={{ stopColor: "#F3AE0A" }} />
              <stop offset="0.7086" style={{ stopColor: "#F9CA05" }} />
              <stop offset="0.8329" style={{ stopColor: "#FEDB01" }} />
              <stop offset="0.9255" style={{ stopColor: "#FFE100" }} />
            </linearGradient>
            <path
              className="toucan6"
              d="M45.2,12.7h17.6c0,0,17.8-1.3,17.8,16.4H45.8"
            />
            <path
              className="toucan1"
              d="M65.9,29.1h14.6c0-3.8-0.8-6.7-2.1-9L65.9,29.1"
            />
            <linearGradient
              id="TOUCAN_7_"
              gradientUnits="userSpaceOnUse"
              x1="45.5045"
              y1="31.686"
              x2="69.2276"
              y2="31.686"
            >
              <stop offset="9.192708e-02" style={{ stopColor: "#D12027" }} />
              <stop offset="0.2455" style={{ stopColor: "#DE551C" }} />
              <stop offset="0.4103" style={{ stopColor: "#E98712" }} />
              <stop offset="0.5661" style={{ stopColor: "#F3AE0A" }} />
              <stop offset="0.7086" style={{ stopColor: "#F9CA05" }} />
              <stop offset="0.8329" style={{ stopColor: "#FEDB01" }} />
              <stop offset="0.9255" style={{ stopColor: "#FFE100" }} />
            </linearGradient>
            <path
              className="toucan7"
              d="M69.2,29.1c-5.2,5.8-14,5.1-14,5.1h-9.7v-5.1L69.2,29.1z"
            />
            <linearGradient
              id="TOUCAN_8_"
              gradientUnits="userSpaceOnUse"
              x1="56.383"
              y1="22.2189"
              x2="78.4479"
              y2="22.2189"
            >
              <stop offset="7.415896e-02" style={{ stopColor: "#00BCF0" }} />
              <stop offset="0.896" style={{ stopColor: "#00599E" }} />
            </linearGradient>
            <path
              className="toucan8"
              d="M78.4,20.1c0,0-1.2-2.5-4.7-4.8L56.4,29.1l9.6,0L78.4,20.1z"
            />
          </g>
          <circle className="toucan9" cx="45.1" cy="20.9" r="8.2" />
          <linearGradient
            id="TOUCAN_9_"
            gradientUnits="userSpaceOnUse"
            x1="38.6953"
            y1="20.7309"
            x2="51.7249"
            y2="20.7309"
          >
            <stop offset="7.415896e-02" style={{ stopColor: "#00BCF0" }} />
            <stop offset="0.896" style={{ stopColor: "#00599E" }} />
          </linearGradient>
          <circle className="toucan10" cx="45.2" cy="20.7" r="6.5" />
          <circle className="toucan1" cx="45.5" cy="20.5" r="4.4" />

          <linearGradient
            id="TOUCAN_10_"
            gradientUnits="userSpaceOnUse"
            x1="816.8846"
            y1="11.6964"
            x2="827.5346"
            y2="15.1882"
            gradientTransform="matrix(0.9975 7.050000e-02 -7.050000e-02 0.9975 -776.5453 -51.9849)"
          >
            <stop offset="0" style={{ stopColor: "#FFFFFF" }} />
            <stop offset="1" style={{ stopColor: "#FFFFFF", stopOpacity: 0 }} />
          </linearGradient>
          <path
            className="toucan11"
            d="M42.7,21.7c0,0,0.3-4.4,4.7-4c0,0,1.7,0.6,0.7,1.8c0,0-2.8,0.7-2.2,3.2C45.9,22.6,42.9,25.2,42.7,21.7z"
          />
          <linearGradient
            id="TOUCAN_11_"
            gradientUnits="userSpaceOnUse"
            x1="40.2206"
            y1="78.5815"
            x2="46.7831"
            y2="78.5815"
          >
            <stop offset="7.451954e-02" style={{ stopColor: "#FFE100" }} />
            <stop offset="0.1671" style={{ stopColor: "#FEDB01" }} />
            <stop offset="0.2914" style={{ stopColor: "#F9CA05" }} />
            <stop offset="0.4339" style={{ stopColor: "#F3AE0A" }} />
            <stop offset="0.5897" style={{ stopColor: "#E98712" }} />
            <stop offset="0.7545" style={{ stopColor: "#DE551C" }} />
            <stop offset="0.9081" style={{ stopColor: "#D12027" }} />
          </linearGradient>
          <circle className="toucan12" cx="43.5" cy="78.6" r="3.3" />
          <linearGradient
            id="TOUCAN_12_"
            gradientUnits="userSpaceOnUse"
            x1="46.6283"
            y1="78.5815"
            x2="53.1908"
            y2="78.5815"
          >
            <stop offset="7.451954e-02" style={{ stopColor: "#FFE100" }} />
            <stop offset="0.1671" style={{ stopColor: "#FEDB01" }} />
            <stop offset="0.2914" style={{ stopColor: "#F9CA05" }} />
            <stop offset="0.4339" style={{ stopColor: "#F3AE0A" }} />
            <stop offset="0.5897" style={{ stopColor: "#E98712" }} />
            <stop offset="0.7545" style={{ stopColor: "#DE551C" }} />
            <stop offset="0.9081" style={{ stopColor: "#D12027" }} />
          </linearGradient>
          <circle className="toucan13" cx="49.9" cy="78.6" r="3.3" />
          <linearGradient
            id="TOUCAN_13_"
            gradientUnits="userSpaceOnUse"
            x1="53.0361"
            y1="78.5815"
            x2="59.5986"
            y2="78.5815"
          >
            <stop offset="7.451954e-02" style={{ stopColor: "#FFE100" }} />
            <stop offset="0.1671" style={{ stopColor: "#FEDB01" }} />
            <stop offset="0.2914" style={{ stopColor: "#F9CA05" }} />
            <stop offset="0.4339" style={{ stopColor: "#F3AE0A" }} />
            <stop offset="0.5897" style={{ stopColor: "#E98712" }} />
            <stop offset="0.7545" style={{ stopColor: "#DE551C" }} />
            <stop offset="0.9081" style={{ stopColor: "#D12027" }} />
          </linearGradient>
          <circle className="toucan14" cx="56.3" cy="78.6" r="3.3" />
          <linearGradient
            id="TOUCAN_14_"
            gradientUnits="userSpaceOnUse"
            x1="17.5073"
            y1="78.5815"
            x2="24.0698"
            y2="78.5815"
          >
            <stop offset="7.451954e-02" style={{ stopColor: "#FFE100" }} />
            <stop offset="0.1671" style={{ stopColor: "#FEDB01" }} />
            <stop offset="0.2914" style={{ stopColor: "#F9CA05" }} />
            <stop offset="0.4339" style={{ stopColor: "#F3AE0A" }} />
            <stop offset="0.5897" style={{ stopColor: "#E98712" }} />
            <stop offset="0.7545" style={{ stopColor: "#DE551C" }} />
            <stop offset="0.9081" style={{ stopColor: "#D12027" }} />
          </linearGradient>
          <circle className="toucan15" cx="20.8" cy="78.6" r="3.3" />
          <linearGradient
            id="TOUCAN_15_"
            gradientUnits="userSpaceOnUse"
            x1="23.9151"
            y1="78.5815"
            x2="30.4776"
            y2="78.5815"
          >
            <stop offset="7.451954e-02" style={{ stopColor: "#FFE100" }} />
            <stop offset="0.1671" style={{ stopColor: "#FEDB01" }} />
            <stop offset="0.2914" style={{ stopColor: "#F9CA05" }} />
            <stop offset="0.4339" style={{ stopColor: "#F3AE0A" }} />
            <stop offset="0.5897" style={{ stopColor: "#E98712" }} />
            <stop offset="0.7545" style={{ stopColor: "#DE551C" }} />
            <stop offset="0.9081" style={{ stopColor: "#D12027" }} />
          </linearGradient>
          <circle className="toucan16" cx="27.2" cy="78.6" r="3.3" />
          <linearGradient
            id="TOUCAN_16_"
            gradientUnits="userSpaceOnUse"
            x1="30.3228"
            y1="78.5815"
            x2="36.8853"
            y2="78.5815"
          >
            <stop offset="7.451954e-02" style={{ stopColor: "#FFE100" }} />
            <stop offset="0.1671" style={{ stopColor: "#FEDB01" }} />
            <stop offset="0.2914" style={{ stopColor: "#F9CA05" }} />
            <stop offset="0.4339" style={{ stopColor: "#F3AE0A" }} />
            <stop offset="0.5897" style={{ stopColor: "#E98712" }} />
            <stop offset="0.7545" style={{ stopColor: "#DE551C" }} />
            <stop offset="0.9081" style={{ stopColor: "#D12027" }} />
          </linearGradient>
          <circle className="toucan17" cx="33.6" cy="78.6" r="3.3" />
        </g>
      </svg>
      <style jsx>{`
        .toucan0 {
          fill: url(#TOUCAN_1_);
        }
        .toucan1 {
          fill: #231f20;
        }
        .toucan2 {
          fill: url(#TOUCAN_2_);
        }
        .toucan3 {
          fill: url(#TOUCAN_3_);
        }
        .toucan4 {
          fill: url(#TOUCAN_4_);
        }
        .toucan5 {
          fill: url(#TOUCAN_5_);
        }
        .toucan6 {
          fill: url(#TOUCAN_6_);
        }
        .toucan7 {
          fill: url(#TOUCAN_7_);
        }
        .toucan8 {
          fill: url(#TOUCAN_8_);
        }
        .toucan9 {
          fill: #f9ec31;
        }
        .toucan10 {
          fill: url(#TOUCAN_9_);
        }
        .toucan11 {
          opacity: 0.6;
          fill: url(#TOUCAN_10_);
        }
        .toucan12 {
          fill: url(#TOUCAN_11_);
        }
        .toucan13 {
          fill: url(#TOUCAN_12_);
        }
        .toucan14 {
          fill: url(#TOUCAN_13_);
        }
        .toucan15 {
          fill: url(#TOUCAN_14_);
        }
        .toucan16 {
          fill: url(#TOUCAN_15_);
        }
        .toucan17 {
          fill: url(#TOUCAN_16_);
        }

        #toucanOnTree.flipped {
          transform: scaleX(-1) translate3d(-50%, 0, 0);
        }
      `}</style>
    </>
  );
};
export default Toucan;
