import React, { useEffect, useState } from "react";
import Head from "next/head";
import Nav from "../components/nav";
import "../styles/index.css";
import Map from "../components/map";
import MiniMap from "../components/mini-map";
import client from "../shared/contentful";

const Story = () => {
  return (
    <div>
      <Head>
        <title>Primary Children's Hospital Patient Stories</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Map>
        <div className="container mx-auto relative h-screen">
          <Nav />
          <MiniMap />
        </div>
      </Map>
    </div>
  );
};

export default Story;
