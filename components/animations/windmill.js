import React from "react";
import "./windmill.css";

const Windmill = ({ width, height, left, top }) => {
  return (
    <>
      <svg
        className="absolute z-30"
        id="windmill"
        style={{
          width: `${width}px`,
          height: `${height}px`,
          left: `${left}px`,
          top: `${top}px`
        }}
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        viewBox="0 0 118 136"
        x="0px"
        y="0px"
      >
        <linearGradient
          id="WINDMILL_SVGID_1_"
          gradientUnits="userSpaceOnUse"
          x1="52.2233"
          y1="42.3671"
          x2="29.4733"
          y2="128.8671"
        >
          <stop offset="7.415896e-02" style={{ stopColor: "#C465A6" }} />
          <stop offset="1" style={{ stopColor: "#005C75" }} />
        </linearGradient>
        <polyline
          className="windmill0"
          points="37.1,129.6 25.5,125.3 37.1,70 50.3,70 "
        />
        <polyline
          className="windmill1"
          points="59,70 71.3,70 79.9,129.6 64,129.6 53,129.6 37.1,129.6 45.8,70 58.1,70 "
        />
        <linearGradient
          id="WINDMILL_SVGID_2_"
          gradientUnits="userSpaceOnUse"
          x1="57.2103"
          y1="41.412"
          x2="32.8211"
          y2="134.1448"
        >
          <stop offset="7.415896e-02" style={{ stopColor: "#C465A6" }} />
          <stop offset="1" style={{ stopColor: "#005C75" }} />
        </linearGradient>
        <path
          className="windmill2"
          d="M64.5,66.8l-8.2-14.3h2.3v-8.3h-8.3l0,0c-0.7,0-1.4,0.4-1.9,1.1L36,66.8c-0.8,1.4,0.2,3.2,1.9,3.2h24.8
	C64.3,70,65.3,68.2,64.5,66.8z"
        />
        <linearGradient
          id="WINDMILL_SVGID_3_"
          gradientUnits="userSpaceOnUse"
          x1="58.5343"
          y1="69.8096"
          x2="58.5343"
          y2="36.1227"
        >
          <stop offset="0.2267" style={{ stopColor: "#A41E22" }} />
          <stop offset="1" style={{ stopColor: "#5D0000" }} />
        </linearGradient>
        <path
          className="windmill3"
          d="M56.7,45.3L44.3,66.8c-0.8,1.4,0.2,3.2,1.9,3.2h24.8c1.7,0,2.7-1.8,1.9-3.2L60.4,45.3
	C59.6,43.9,57.5,43.9,56.7,45.3z"
        />
        <linearGradient
          id="WINDMILL_SVGID_4_"
          gradientUnits="userSpaceOnUse"
          x1="53.8543"
          y1="122.9167"
          x2="64.2499"
          y2="122.9167"
        >
          <stop offset="0.2267" style={{ stopColor: "#A41E22" }} />
          <stop offset="1" style={{ stopColor: "#5D0000" }} />
        </linearGradient>
        <path
          className="windmill4"
          d="M53.9,121.4c0-2.9,2.3-5.2,5.2-5.2s5.2,2.3,5.2,5.2v8.2H53.9V121.4z"
        />
        <path
          className="windmill5"
          d="M110.8,56.2V55h-4.1h-1.2h-7h-1.2h-7h-1.2h-7h-1.2h-8.2v1.2h8.2v2.6h-17c-0.5-2.2-2.3-3.8-4.6-4v-9.4H62h1.2
	v-1.2v-7v-1.2v-7v-1.2v-7v-1.2v-7v-1.2V7.4H62v4.1h-2.6V7.4h-1.2v4.1h-2.6V7.4h-1.2v4.1v1.2v7v1.2v7v1.2v7v1.2v7v1.2h1.2h2.6v9.4
	c-2.1,0.3-3.8,1.9-4.3,3.9H36.7v-2.6h8.2v-1.2h-8.2h-1.2h-7h-1.2h-7h-1.2h-7h-1.2H6.8v1.2h4.1v2.6H6.8V60h4.1v2.6H6.8v1.2h4.1h1.2h7
	h1.2h7h1.2h7h1.2h8.2v-1.2h-8.2V60h17c0,2.6,2,4.8,4.5,5.1v16.5h-2.6v-8.2h-1.2v8.2v1.2v7v1.2v7v1.2v7v1.2v4.1h1.2v-4.1h2.6v4.1h1.2
	v-4.1H62v4.1h1.2v-4.1v-1.2v-7v-1.2v-7v-1.2v-7v-1.2v-8.2H62v8.2h-2.6V65.1c2.6-0.2,4.7-2.4,4.7-5.1h16.9v2.6h-8.2v1.2h8.2h1.2h7
	h1.2h7h1.2h7h1.2h4.1v-1.2h-4.1V60h4.1v-1.2h-4.1v-2.6H110.8z M62,44.2h-2.6v-7H62V44.2z M62,36.1h-2.6v-7H62V36.1z M62,27.9h-2.6
	v-7H62V27.9z M62,12.7v7h-2.6v-7H62z M55.5,12.7h2.6v7h-2.6V12.7z M55.5,20.9h2.6v7h-2.6V20.9z M55.5,29.1h2.6v7h-2.6V29.1z
	 M55.5,44.2v-7h2.6v7H55.5z M35.5,56.1v2.6h-7v-2.6H35.5z M27.3,56.1v2.6h-7v-2.6H27.3z M12.1,56.1h7v2.6h-7V56.1z M12.1,62.6V60h7
	v2.6H12.1z M20.3,62.6V60h7v2.6H20.3z M35.5,62.6h-7V60h7V62.6z M55.5,82.7h2.6v7h-2.6V82.7z M55.5,90.9h2.6v7h-2.6V90.9z
	 M55.5,106.1v-7h2.6v7H55.5z M62,106.1h-2.6v-7H62V106.1z M62,97.9h-2.6v-7H62V97.9z M62,82.7v7h-2.6v-7H62z M97.3,56.2v2.6h-7v-2.6
	H97.3z M82.1,56.2h7v2.6h-7V56.2z M82.1,62.7V60h7v2.6H82.1z M90.3,62.7V60h7v2.6H90.3z M105.5,62.7h-7V60h7V62.7z M105.5,58.8h-7
	v-2.6h7V58.8z"
        />
      </svg>
    </>
  );
};
export default Windmill;
