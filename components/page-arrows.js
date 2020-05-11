import React, { useEffect, useState } from "react";
import { useTrail, animated } from "react-spring";
import useWindowSize from "../shared/hooks/useWindowSize";

const PageArrows = ({ translation, setTranslation }) => {
  const size = useWindowSize();
  const [showArrows, setShowArrows] = useState(false);

  const arrows = [
    // left arrow
    {
      transform: `translate3d(0.5rem, ${size.height / 2 - 20}px, 0)`,
      positionClass: `left-0 top-0`,
      onClickFunction: () => {
        setTranslation({ ...translation, x: translation.x + 50 });
      },
    },
    // right arrow
    {
      transform: `translate3d(-0.5rem, ${
        size.height / 2 - 20
      }px, 0) rotate(180deg)`,
      positionClass: `right-0 top-0`,
      onClickFunction: () => {
        setTranslation({ ...translation, x: translation.x - 50 });
      },
    },
    // bottom arrow
    {
      transform: `translate3d(${
        size.width / 2 - 10
      }px, -0.5rem, 0) rotate(-90deg)`,
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
            className={`absolute ${arrows[index].positionClass} z-50 w-20 h-20 rounded-full flex items-center justify-center text-white focus:outline-none focus:text-blue-100`}
            key={index}
            onClick={() => {
              arrows[index].onClickFunction();
            }}
            type="button"
            style={{ ...props, transform: arrows[index].transform }}
          >
            <svg
              className="w-full h-full stroke-current"
              xmlns="http://www.w3.org/2000/svg"
              width="512"
              height="512"
              viewBox="0 0 512 512"
            >
              <title>arrow</title>
              <polyline
                points="328 112 184 256 328 400"
                style={{
                  fill: "none",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: "48px",
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
