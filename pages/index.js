import React, { useState } from "react";
import Head from "next/head";
import Map from "../components/map";
import client from "../shared/contentful";

const Home = ({
  aboutTabContent,
  categories,
  hostname,
  stories,
  submitTabContent,
  thankYouForSharingContent
}) => {
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
        aboutTabContent={aboutTabContent}
        submitTabContent={submitTabContent}
        hostname={hostname}
        thankYouForSharingContent={thankYouForSharingContent}
      />
    </div>
  );
};

Home.getInitialProps = async ({ req }) => {
  const stories = await client.getEntries({
    content_type: "story"
  });

  const categories = await client.getEntries({
    content_type: "category"
  });

  const fetchAboutTabContent = await client.getEntry("6xDZ66kDnvo24xY91qO7FA");
  const aboutTabContent = fetchAboutTabContent.fields.content;
  const fetchSubmitTabContent = await client.getEntry("1ZTYTOO0n0PIHlo1dUtD0v");
  const submitTabContent = fetchSubmitTabContent.fields.content;
  const fetchThankYouForSharingContent = await client.getEntry(
    "6Dd6zTG7pogLpeEkvteHu0"
  );
  const thankYouForSharingContent =
    fetchThankYouForSharingContent.fields.content;

  const hostname = req ? req.headers.host : window.location.hostname;

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
    submitTabContent,
    thankYouForSharingContent,
    hostname
  };
};

export default Home;
