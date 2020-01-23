import React from "react";
import Head from "next/head";
import Nav from "../components/nav";
import Map from "../components/map";

import "../styles/index.css";

const Home = () => {
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
        <link
          href="https://fonts.googleapis.com/css?family=Public+Sans:400,400i,500,500i,600,600i,700,700i&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Map>
        <div className="relative">
          <Nav />
        </div>
      </Map>
    </div>
  );
};

export default Home;
