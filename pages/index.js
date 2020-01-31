import React, { useState } from "react";
import Head from "next/head";
import Map from "../components/map";
import client from "../shared/contentful";

const Home = ({ stories, categories }) => {
  const [activeCategory, setActiveCategory] = useState("all");
  return (
    <div>
      <Head>
        <title>Primary Children's Hospital Patient Stories</title>
        <meta
          property="og:title"
          content="Primary Children's Hospital Stories"
        />
        <meta
          property="og:url"
          content={`https://primary-childrens-stories.michaelbonner.now.sh/`}
        />
      </Head>

      <Map
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        stories={stories}
        categories={categories}
      />
    </div>
  );
};

Home.getInitialProps = async () => {
  const stories = await client.getEntries({
    content_type: "story"
  });

  const categories = await client.getEntries({
    content_type: "category"
  });

  const fetchAboutTabContent = await client.getEntry("6xDZ66kDnvo24xY91qO7FA");
  const aboutTabContent = fetchAboutTabContent.fields.content;
  const fetchSubmitTabContent = await client.getEntry("6xDZ66kDnvo24xY91qO7FA");
  const submitTabContent = fetchSubmitTabContent.fields.content;

  return {
    stories: stories.items,
    categories: categories.items.sort((a, b) => {
      if (a.fields.order > b.fields.order) {
        return 1;
      } else if (a.fields.order < b.fields.order) {
        return -1;
      }
      return 0;
    }),
    aboutTabContent,
    submitTabContent
  };
};

export default Home;
