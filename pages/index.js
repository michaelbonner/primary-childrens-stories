import React, { useState } from "react";
import Head from "next/head";
import Nav from "../components/nav";
import Map from "../components/map";

import "../styles/index.css";

const Home = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  return (
    <div>
      <Head>
        <title>Primary Children's Hospital Patient Stories</title>
      </Head>

      <Map
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      >
        <div className="relative">
          <Nav
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
          />
        </div>
      </Map>
    </div>
  );
};

export default Home;
