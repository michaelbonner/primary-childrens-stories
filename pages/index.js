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
