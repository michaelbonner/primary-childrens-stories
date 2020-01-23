import React, { useEffect } from "react";
import Head from "next/head";
import MapSimple from "../../components/map-simple";

const Pin = () => {
  useEffect(() => {
    // add when mounted
    document.addEventListener("mousedown", handleClick);
    // return function to be called when unmounted
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  const handleClick = e => {
    alert(`x: ${e.pageX} | y: ${e.pageY} `);
    // if (node.current.contains(e.target)) {
    //   // inside click
    //   return;
    // }
  };

  return (
    <div>
      <Head>
        <title>Primary Children's Hospital Patient Stories</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          property="og:url"
          content="https://primary-childrens-stories.michaelbonner.now.sh/"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Primary Children's Hospital Stories"
        />
        <meta
          property="og:description"
          content="A map showcasing some of Primary Children's Hospital's success stories"
        />
        <meta
          property="og:image"
          content="https://primary-childrens-stories.michaelbonner.now.sh/og-image.jpg"
        />
      </Head>

      <MapSimple />
    </div>
  );
};

export default Pin;
