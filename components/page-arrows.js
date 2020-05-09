import React, { useEffect, useState } from "react";
import { useTrail, animated } from "react-spring";
import useWindowSize from "../shared/hooks/useWindowSize";

const PageArrows = ({ translation, setTranslation }) => {
  const size = useWindowSize();
  const [showArrows, setShowArrows] = useState(false);

  const arrows = [
    {
      transform: `translate3d(0.5rem, ${
        size.height / 2 - 10
      }px, 0) rotate(180deg)`,
      positionClass: `left-0 top-0`,
      onClickFunction: () => {
        setTranslation({ ...translation, x: translation.x + 50 });
      },
    },
    {
      transform: `translate3d(-0.5rem, ${size.height / 2 - 10}px, 0)`,
      positionClass: `right-0 top-0`,
      onClickFunction: () => {
        setTranslation({ ...translation, x: translation.x - 50 });
      },
    },
    {
      transform: `translate3d(${size.width / 2 - 10}px, -0.5rem, 0)`,
      positionClass: `left-0 bottom-0`,
      onClickFunction: () => {
        setTranslation({ ...translation, y: translation.y - 50 });
      },
    },
  ];

  const trail = useTrail(arrows.length, {
    from: { opacity: 0 },
    to: [{ opacity: 1 }, { opacity: 0.5 }, { opacity: 1 }],
    config: {
      duration: 1500,
    },
  });

  useEffect(() => {
    setTimeout(() => {
      setShowArrows(true);
    }, 5000);
  }, []);

  return showArrows ? (
    <>
      {trail.map((props, index) => {
        return (
          <animated.button
            className={`absolute ${arrows[index].positionClass} z-50 w-16 h-16 bg-white rounded-full p-2 flex items-center justify-center text-blue-500 focus:outline-none focus:text-blue-700`}
            key={index}
            onClick={() => {
              arrows[index].onClickFunction();
            }}
            type="button"
            style={{ ...props, transform: arrows[index].transform }}
          >
            <svg
              className="w-full h-full stroke-current pl-2 pr-1"
              xmlns="http://www.w3.org/2000/svg"
              width="512"
              height="512"
              viewBox="0 0 512 512"
            >
              <title>arrow</title>
              <path
                d="M112,111V401c0,17.44,17,28.52,31,20.16l247.9-148.37c12.12-7.25,12.12-26.33,0-33.58L143,90.84C129,82.48,112,93.56,112,111Z"
                style={{
                  fill: "none",
                  strokeMiterlimit: "10",
                  strokeWidth: "32px",
                }}
              />
            </svg>
          </animated.button>
        );
      })}
    </>
  ) : (
    ""
  );
};
export default PageArrows;
