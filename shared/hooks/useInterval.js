import React, { useRef, useEffect } from "react";

function useInterval(callback, duration) {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }

    let id = setInterval(tick, duration);
    return () => clearInterval(id);
  }, []);
}
export default useInterval;
