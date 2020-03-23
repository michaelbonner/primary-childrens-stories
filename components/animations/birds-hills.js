import React from "react";

const BirdsHills = ({ animate, height, left, top, width }) => {
  return (
    <>
      <svg
        className="absolute z-20"
        id="BirdsHills"
        style={{
          width: `${width}px`,
          height: `${height}px`,
          transform: `translate3d(${left}px, ${top}px, 0)`
        }}
        version="1.1"
        viewBox="0 0 735.7 129.5"
        x="0px"
        xmlns="http://www.w3.org/2000/svg"
        y="0px"
      >
        <g className="frontBird">
          <g>
            <g>
              <path
                d="M317.4,72.9c2.1-1.3,3.9-3.1,5.3-5.1h-9.2h-20.2c1.4,2.1,3.2,3.8,5.3,5.1c2.7-1.7,5.9-2.7,9.3-2.7
				C311.4,70.3,314.6,71.3,317.4,72.9z"
              />
              <ellipse
                style={{ fill: "#FFFFFF" }}
                cx="308"
                cy="72.9"
                rx="9.3"
                ry="2.7"
              />
            </g>
            <path d="M281.1,65.6v2.2h12.2c0,0-3.4-6.5-12.2-6.5v2.4" />
            <g>
              <path d="M290.8,57v-3.4c16.7,3.5,19.3,14.2,19.3,14.2h-1.1c-3.9-8.5-18.2-7.1-18.2-7.1v-1.2V57z" />
              <path
                style={{ fill: "#FFFFFF" }}
                d="M299.8,67.8l10.2,0.1c-3.9-8.5-19.3-7.2-19.3-7.2S298.9,61.4,299.8,67.8z"
              />
            </g>
          </g>
          <path
            style={{ fill: "#F7941D" }}
            d="M320.7,67.8h4.2c0,0,7.6-0.6,7.6,7h-11.5"
          />
          <path d="M326.2,74.9h6.3c0-1.6-0.4-2.9-0.9-3.9L326.2,74.9" />
          <path
            style={{ fill: "#F7941D" }}
            d="M330.8,74.9c-2.2,2.5-6,2.2-6,2.2h-4.2v-2.2L330.8,74.9z"
          />
          <circle style={{ fill: "#F9ED32" }} cx="320.5" cy="71.4" r="3.5" />
          <circle cx="320.5" cy="70.9" r="1.3" />

          <linearGradient
            id="BIRD_HILLS_1_"
            gradientUnits="userSpaceOnUse"
            x1="1104.0754"
            y1="62.9496"
            x2="1107.151"
            y2="63.9579"
            gradientTransform="matrix(0.9975 7.050000e-02 -7.050000e-02 0.9975 -778.7017 -70.6738)"
          >
            <stop offset="0" style={{ stopColor: "#FFFFFF" }} />
            <stop offset="1" style={{ stopColor: "#FFFFFF", stopOpacity: 0 }} />
          </linearGradient>
          <path
            style={{ opacity: 0.6, fill: "url(#BIRD_HILLS_1_)" }}
            d="M319.7,71.2c0,0,0.1-1.3,1.3-1.2c0,0,0.5,0.2,0.2,0.5c0,0-0.8,0.2-0.6,0.9
		C320.6,71.5,319.8,72.2,319.7,71.2z"
          />
          <path
            style={{ fill: "#579FD7" }}
            d="M331.5,71c0,0-0.5-1.1-2-2l-7.4,5.9l4.1,0L331.5,71z"
          />
        </g>
        <g className="backBird">
          <g>
            <g>
              <path
                d="M230.2,72.9c2.1-1.3,3.9-3.1,5.3-5.1h-9.2h-20.2c1.4,2.1,3.2,3.8,5.3,5.1c2.7-1.7,5.9-2.7,9.3-2.7S227.4,71.3,230.2,72.9
				z"
              />
              <ellipse
                style={{ fill: "#FFFFFF" }}
                cx="220.8"
                cy="72.9"
                rx="9.3"
                ry="2.7"
              />
            </g>
            <path d="M193.9,65.6v2.2h12.2c0,0-3.4-6.5-12.2-6.5v2.4" />
            <g>
              <path d="M203.6,57v-3.4c16.7,3.5,19.3,14.2,19.3,14.2h-1.1c-3.9-8.5-18.2-7.1-18.2-7.1v-1.2V57z" />
              <path
                style={{ fill: "#FFFFFF" }}
                d="M212.6,67.8l10.2,0.1c-3.9-8.5-19.3-7.2-19.3-7.2S211.7,61.4,212.6,67.8z"
              />
            </g>
          </g>
          <path
            style={{ fill: "#F7941D" }}
            d="M233.5,67.8h4.2c0,0,7.6-0.6,7.6,7h-11.5"
          />
          <path d="M239,74.9h6.3c0-1.6-0.4-2.9-0.9-3.9L239,74.9" />
          <path
            style={{ fill: "#F7941D" }}
            d="M243.6,74.9c-2.2,2.5-6,2.2-6,2.2h-4.2v-2.2L243.6,74.9z"
          />
          <circle style={{ fill: "#F9ED32" }} cx="233.3" cy="71.4" r="3.5" />
          <circle cx="233.3" cy="70.9" r="1.3" />

          <linearGradient
            id="BIRD_HILLS_2_"
            gradientUnits="userSpaceOnUse"
            x1="1017.0804"
            y1="69.0981"
            x2="1020.1559"
            y2="70.1065"
            gradientTransform="matrix(0.9975 7.050000e-02 -7.050000e-02 0.9975 -778.7017 -70.6738)"
          >
            <stop offset="0" style={{ stopColor: "#FFFFFF" }} />
            <stop offset="1" style={{ stopColor: "#FFFFFF", stopOpacity: 0 }} />
          </linearGradient>
          <path
            style={{ opacity: 0.6, fill: "url(#BIRD_HILLS_2_)" }}
            d="M232.5,71.2c0,0,0.1-1.3,1.3-1.2c0,0,0.5,0.2,0.2,0.5c0,0-0.8,0.2-0.6,0.9
		C233.4,71.5,232.5,72.2,232.5,71.2z"
          />
          <path
            style={{ fill: "#579FD7" }}
            d="M244.3,71c0,0-0.5-1.1-2-2l-7.4,5.9l4.1,0L244.3,71z"
          />
        </g>
        <g>
          <g>
            <g>
              <linearGradient
                id="BIRD_HILLS_3_"
                gradientUnits="userSpaceOnUse"
                x1="112.5833"
                y1="49.4682"
                x2="112.5833"
                y2="63.9682"
              >
                <stop offset="7.415896e-02" style={{ stopColor: "#43B55A" }} />
                <stop offset="1" style={{ stopColor: "#263764" }} />
              </linearGradient>
              <path
                style={{ fill: "url(#BIRD_HILLS_3_)" }}
                d="M115.4,48.2h24.8c23.3,39.8,72,59.6,72,59.6H12.9c0,0,48.7-19.8,72-59.6h24.8"
              />
              <linearGradient
                id="BIRD_HILLS_4_"
                gradientUnits="userSpaceOnUse"
                x1="120.714"
                y1="58.2182"
                x2="120.714"
                y2="77.7198"
              >
                <stop offset="7.415896e-02" style={{ stopColor: "#43B55A" }} />
                <stop offset="1" style={{ stopColor: "#263764" }} />
              </linearGradient>
              <path
                style={{ fill: "url(#BIRD_HILLS_4_)" }}
                d="M173.9,82.2C167.7,79.9,160,69,160,69c-10.6-0.1-20.6-1.4-17.2-6.4
				c6.7-9.8-24.3-4.9-46.3-3.9c-11,0.5-15.4,0.4-18.6-2.3c0,0-6.5,9.7-10.1,13.3L66,78l55.2,9.4c0,0,24.2,13.9,39.2,8.7
				s15-5.1,15-5.1l-1-6"
              />
              <linearGradient
                id="BIRD_HILLS_5_"
                gradientUnits="userSpaceOnUse"
                x1="128.2357"
                y1="70.4305"
                x2="128.2357"
                y2="102.5936"
              >
                <stop offset="7.415896e-02" style={{ stopColor: "#43B55A" }} />
                <stop offset="1" style={{ stopColor: "#263764" }} />
              </linearGradient>
              <path
                style={{ fill: "url(#BIRD_HILLS_5_)" }}
                d="M56.5,78l7-8.1c0.6,0,1.2-0.3,1.8-0.1c28.4,9.9,69.8-7.8,61,5.1s49.1,7.2,49.1,7.2
				s18.6,19.3,35.3,25.7l-165-5"
              />
              <linearGradient
                id="BIRD_HILLS_6_"
                gradientUnits="userSpaceOnUse"
                x1="112.5833"
                y1="90.7182"
                x2="112.5833"
                y2="106.5177"
              >
                <stop offset="7.415896e-02" style={{ stopColor: "#43B55A" }} />
                <stop offset="1" style={{ stopColor: "#263764" }} />
              </linearGradient>
              <path
                style={{ fill: "url(#BIRD_HILLS_6_)" }}
                d="M212.3,107.8c0,0-69.6,2.5-60.6-10.8s-32.9-6.6-62.6-5.2S56.5,78,56.5,78H53
				c0,0-21.3,21.8-40.1,29.8"
              />
            </g>
            <g>
              <linearGradient
                id="BIRD_HILLS_7_"
                gradientUnits="userSpaceOnUse"
                x1="111.3607"
                y1="93.1275"
                x2="161.0247"
                y2="93.1275"
              >
                <stop offset="7.415896e-02" style={{ stopColor: "#3DB49D" }} />
                <stop offset="1" style={{ stopColor: "#00524C" }} />
              </linearGradient>
              <path
                style={{ fill: "url(#BIRD_HILLS_7_)" }}
                d="M152.6,101.5h-32.9c-4.6,0-8.4-3.8-8.4-8.4v0c0-4.6,3.8-8.4,8.4-8.4h32.9
				c4.6,0,8.4,3.8,8.4,8.4v0C161,97.7,157.3,101.5,152.6,101.5z"
              />
              <linearGradient
                id="BIRD_HILLS_8_"
                gradientUnits="userSpaceOnUse"
                x1="111.3607"
                y1="69.0815"
                x2="161.0247"
                y2="69.0815"
              >
                <stop offset="7.415896e-02" style={{ stopColor: "#3DB49D" }} />
                <stop offset="1" style={{ stopColor: "#00524C" }} />
              </linearGradient>
              <path
                style={{ fill: "url(#BIRD_HILLS_8_)" }}
                d="M152.6,77.5h-32.9c-4.6,0-8.4-3.8-8.4-8.4v0c0-4.6,3.8-8.4,8.4-8.4h32.9
				c4.6,0,8.4,3.8,8.4,8.4v0C161,73.7,157.3,77.5,152.6,77.5z"
              />
              <linearGradient
                id="BIRD_HILLS_9_"
                gradientUnits="userSpaceOnUse"
                x1="118.0881"
                y1="45.0354"
                x2="154.2973"
                y2="45.0354"
              >
                <stop offset="7.415896e-02" style={{ stopColor: "#3DB49D" }} />
                <stop offset="1" style={{ stopColor: "#00524C" }} />
              </linearGradient>
              <path
                style={{ fill: "url(#BIRD_HILLS_9_)" }}
                d="M145.9,53.4h-19.4c-4.6,0-8.4-3.8-8.4-8.4v0c0-4.6,3.8-8.4,8.4-8.4h19.4
				c4.6,0,8.4,3.8,8.4,8.4v0C154.3,49.6,150.5,53.4,145.9,53.4z"
              />
              <linearGradient
                id="BIRD_HILLS_10_"
                gradientUnits="userSpaceOnUse"
                x1="126.9573"
                y1="22.776"
                x2="145.4281"
                y2="22.776"
              >
                <stop offset="7.415896e-02" style={{ stopColor: "#3DB49D" }} />
                <stop offset="1" style={{ stopColor: "#00524C" }} />
              </linearGradient>
              <circle
                style={{ fill: "url(#BIRD_HILLS_10_)" }}
                cx="136.2"
                cy="22.8"
                r="9.2"
              />
              <path d="M134.7,73.9c-3.3,0-5.9-2.6-5.9-5.9h5.9V73.9z" />
              <path d="M137.3,48c3.3,0,5.9-2.6,5.9-5.9h-5.9V48z" />
              <path d="M137.3,97c3.3,0,5.9-2.6,5.9-5.9h-5.9V97z" />
              <ellipse cx="136.2" cy="110.5" rx="12.6" ry="1.8" />
              <g>
                <rect x="134.1" y="24.2" width="4.2" height="86.5" />
                <circle cx="136.2" cy="24.3" r="2.1" />
              </g>
            </g>
          </g>
          <g>
            <g>
              <linearGradient
                id="BIRD_HILLS_11_"
                gradientUnits="userSpaceOnUse"
                x1="619.1996"
                y1="48.9185"
                x2="619.1996"
                y2="63.4185"
              >
                <stop offset="7.415896e-02" style={{ stopColor: "#43B55A" }} />
                <stop offset="1" style={{ stopColor: "#263764" }} />
              </linearGradient>
              <path
                style={{ fill: "url(#BIRD_HILLS_11_)" }}
                d="M622.1,47.7h24.8c23.3,39.8,72,59.6,72,59.6H519.5c0,0,48.7-19.8,72-59.6h24.8"
              />
              <linearGradient
                id="BIRD_HILLS_12_"
                gradientUnits="userSpaceOnUse"
                x1="627.3304"
                y1="57.6685"
                x2="627.3304"
                y2="77.1701"
              >
                <stop offset="7.415896e-02" style={{ stopColor: "#43B55A" }} />
                <stop offset="1" style={{ stopColor: "#263764" }} />
              </linearGradient>
              <path
                style={{ fill: "url(#BIRD_HILLS_12_)" }}
                d="M680.5,81.7c-6.2-2.3-13.9-13.3-13.9-13.3c-10.6-0.1-20.6-1.4-17.2-6.4
				c6.7-9.8-24.3-4.9-46.3-3.9c-11,0.5-15.4,0.4-18.6-2.3c0,0-6.5,9.7-10.1,13.3l-1.7,8.3l55.2,9.4c0,0,24.2,13.9,39.2,8.7
				s15-5.1,15-5.1l-1-6"
              />
              <linearGradient
                id="BIRD_HILLS_13_"
                gradientUnits="userSpaceOnUse"
                x1="634.8521"
                y1="69.8808"
                x2="634.8521"
                y2="102.0439"
              >
                <stop offset="7.415896e-02" style={{ stopColor: "#43B55A" }} />
                <stop offset="1" style={{ stopColor: "#263764" }} />
              </linearGradient>
              <path
                style={{ fill: "url(#BIRD_HILLS_13_)" }}
                d="M563.1,77.5l7-8.1c0.6,0,1.2-0.3,1.8-0.1c28.4,9.9,69.8-7.8,61,5.1s49.1,7.2,49.1,7.2
				s18.6,19.3,35.3,25.7l-165-5"
              />
              <linearGradient
                id="BIRD_HILLS_14_"
                gradientUnits="userSpaceOnUse"
                x1="619.1996"
                y1="90.1685"
                x2="619.1996"
                y2="105.968"
              >
                <stop offset="7.415896e-02" style={{ stopColor: "#43B55A" }} />
                <stop offset="1" style={{ stopColor: "#263764" }} />
              </linearGradient>
              <path
                style={{ fill: "url(#BIRD_HILLS_14_)" }}
                d="M718.9,107.3c0,0-69.6,2.5-60.6-10.8s-32.9-6.6-62.6-5.2s-32.6-13.8-32.6-13.8h-3.5
				c0,0-21.3,21.8-40.1,29.8"
              />
            </g>
            <g>
              <linearGradient
                id="BIRD_HILLS_15_"
                gradientUnits="userSpaceOnUse"
                x1="581.985"
                y1="78.5448"
                x2="581.985"
                y2="111.2429"
              >
                <stop offset="3.665865e-03" style={{ stopColor: "#F089B7" }} />
                <stop offset="0.8848" style={{ stopColor: "#C9645A" }} />
              </linearGradient>
              <path
                style={{ fill: "url(#BIRD_HILLS_15_)" }}
                d="M581.4,107.2c0,0-3.7,0.6-4.3-4.3c-0.6-5-7.1-16.6-14.9-18.2c0,0-1.4-0.3-0.1-1.7
				c2-2.3,7.4-6.3,19.3-6.3h1.2c11.9,0,17.3,3.9,19.3,6.3c1.3,1.5-0.1,1.7-0.1,1.7c-7.9,1.7-14.3,13.3-14.9,18.2
				c-0.6,4.9-4.3,4.3-4.3,4.3H581.4z"
              />
              <g>
                <g>
                  <g>
                    <rect x="581.2" y="81.9" width="1.6" height="34.9" />
                    <path d="M581.2,81.8c0-0.4,0.4-0.8,0.8-0.8s0.8,0.4,0.8,0.8v0.6h-1.6V81.8z" />
                  </g>
                  <ellipse cx="582" cy="116.8" rx="5.1" ry="0.7" />
                </g>
                <g>
                  <path d="M581.2,101.7c0-0.1-1.4-14.8-9.6-14.8v-1.6c9.7,0,11.1,15.6,11.2,16.2L581.2,101.7z" />
                  <circle cx="571.6" cy="86.1" r="0.8" />
                </g>
                <g>
                  <path d="M582.7,101.7c0-0.1,1.4-14.8,9.6-14.8v-1.6c-9.7,0-11.1,15.6-11.2,16.2L582.7,101.7z" />
                  <circle cx="592.3" cy="86.1" r="0.8" />
                </g>
              </g>
            </g>
            <g>
              <linearGradient
                id="BIRD_HILLS_16_"
                gradientUnits="userSpaceOnUse"
                x1="628.3699"
                y1="78.5448"
                x2="628.3699"
                y2="111.2429"
              >
                <stop offset="3.665865e-03" style={{ stopColor: "#F089B7" }} />
                <stop offset="0.8848" style={{ stopColor: "#C9645A" }} />
              </linearGradient>
              <path
                style={{ fill: "url(#BIRD_HILLS_16_)" }}
                d="M627.8,107.2c0,0-3.7,0.6-4.3-4.3c-0.6-5-7.1-16.6-14.9-18.2c0,0-1.4-0.3-0.1-1.7
				c2-2.3,7.4-6.3,19.3-6.3h1.2c11.9,0,17.3,3.9,19.3,6.3c1.3,1.5-0.1,1.7-0.1,1.7c-7.9,1.7-14.3,13.3-14.9,18.2
				c-0.6,4.9-4.3,4.3-4.3,4.3H627.8z"
              />
              <g>
                <g>
                  <g>
                    <rect x="627.6" y="81.9" width="1.6" height="34.9" />
                    <path d="M627.6,81.8c0-0.4,0.4-0.8,0.8-0.8s0.8,0.4,0.8,0.8v0.6h-1.6V81.8z" />
                  </g>
                  <ellipse cx="628.4" cy="116.8" rx="5.1" ry="0.7" />
                </g>
                <g>
                  <path d="M627.6,101.7c0-0.1-1.4-14.8-9.6-14.8v-1.6c9.7,0,11.1,15.6,11.2,16.2L627.6,101.7z" />
                  <circle cx="618" cy="86.1" r="0.8" />
                </g>
                <g>
                  <path d="M629.1,101.7c0-0.1,1.4-14.8,9.6-14.8v-1.6c-9.7,0-11.1,15.6-11.2,16.2L629.1,101.7z" />
                  <circle cx="638.7" cy="86.1" r="0.8" />
                </g>
              </g>
            </g>
            <g>
              <linearGradient
                id="BIRD_HILLS_17_"
                gradientUnits="userSpaceOnUse"
                x1="674.7549"
                y1="78.5448"
                x2="674.7549"
                y2="111.2429"
              >
                <stop offset="3.665865e-03" style={{ stopColor: "#F089B7" }} />
                <stop offset="0.8848" style={{ stopColor: "#C9645A" }} />
              </linearGradient>
              <path
                style={{ fill: "url(#BIRD_HILLS_17_)" }}
                d="M674.1,107.2c0,0-3.7,0.6-4.3-4.3c-0.6-5-7.1-16.6-14.9-18.2c0,0-1.4-0.3-0.1-1.7
				c2-2.3,7.4-6.3,19.3-6.3h1.2c11.9,0,17.3,3.9,19.3,6.3c1.3,1.5-0.1,1.7-0.1,1.7c-7.9,1.7-14.3,13.3-14.9,18.2
				c-0.6,4.9-4.3,4.3-4.3,4.3H674.1z"
              />
              <g>
                <g>
                  <g>
                    <rect x="673.9" y="81.9" width="1.6" height="34.9" />
                    <path d="M673.9,81.8c0-0.4,0.4-0.8,0.8-0.8s0.8,0.4,0.8,0.8v0.6h-1.6V81.8z" />
                  </g>
                  <ellipse cx="674.7" cy="116.8" rx="5.1" ry="0.7" />
                </g>
                <g>
                  <path d="M674,101.7c0-0.1-1.4-14.8-9.6-14.8v-1.6c9.7,0,11.1,15.6,11.2,16.2L674,101.7z" />
                  <circle cx="664.4" cy="86.1" r="0.8" />
                </g>
                <g>
                  <path d="M675.5,101.7c0-0.1,1.4-14.8,9.6-14.8v-1.6c-9.7,0-11.1,15.6-11.2,16.2L675.5,101.7z" />
                  <circle cx="685.1" cy="86.1" r="0.8" />
                </g>
              </g>
            </g>
          </g>
        </g>
      </svg>
      {animate && (
        <style jsx="true">{`
          @media (min-width: 761px) {
            .frontBird {
              animation: frontBirdFly 5s linear infinite;
            }
            .backBird {
              animation: backBirdFly 5s linear infinite;
            }
          }

          @keyframes frontBirdFly {
            0% {
              transform: translate(-18%, 15%);
            }
            50% {
              transform: translate(15%, -15%);
            }
            100% {
              transform: translate(45%, 13%);
            }
          }

          @keyframes backBirdFly {
            0% {
              transform: translate(-12%, 15%);
            }
            50% {
              transform: translate(20%, -10%);
            }
            100% {
              transform: translate(50%, 13%);
            }
          }
        `}</style>
      )}
    </>
  );
};
export default BirdsHills;
