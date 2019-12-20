import React, { useEffect, useState } from "react";
import Head from "next/head";
import Nav from "../components/nav";
import Map from "../components/map";
import MiniMap from "../components/mini-map";

import "../styles/index.css";

const Home = () => {
  return (
    <div>
      <Head>
        <title>Primary Children's Hospital Patient Stories</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Map>
        <div className="relative">
          <Nav />
          <MiniMap />
        </div>
      </Map>
    </div>
  );
};

export default Home;
