import React, { useEffect } from "react";
import Head from "next/head";
import MapSimple from "components/map-simple";

const Pin = () => {
  useEffect(() => {
    // add when mounted
    document.addEventListener("mousedown", handleClick);
    // return function to be called when unmounted
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  const handleClick = (e) => {
    alert(`x: ${e.pageX} | y: ${e.pageY} `);
  };

  return (
    <div>
      <Head>
        <title>Primary Children's Hospital Patient Stories</title>
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:url" content="https://herekidswin.com/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="You're invited to submit your child’s story or your own story as a previous patient at Primary Children's Hospital to continue to inspire others."
        />
        <meta
          property="og:description"
          content="A map showcasing some of Primary Children's Hospital's success stories"
        />
        <meta
          property="og:image"
          content="https://herekidswin.com/og-image.jpg"
        />
      </Head>

      <MapSimple />
    </div>
  );
};

export default Pin;
