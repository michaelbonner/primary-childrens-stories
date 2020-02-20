import React, { useState } from "react";
import Head from "next/head";
import Map from "../components/map";
import client from "../shared/contentful";

const Home = ({
  aboutTabContent,
  categories,
  hostname,
  mainStoryContent,
  stories,
  submitTabContent,
  thankYouForSharingContent,
  welcomeOverlayContent
}) => {
  const [activeCategory, setActiveCategory] = useState("all");
  return (
    <div>
      <Head>
        <title>Primary Children's Hospital</title>
        <meta
          property="og:title"
          content="Share your child’s story or your own childhood story as a message of hope for others."
        />
        <meta property="og:url" content={`https://herekidswin.org/`} />
      </Head>

      <Map
        aboutTabContent={aboutTabContent}
        activeCategory={activeCategory}
        categories={categories}
        hostname={hostname}
        mainStoryContent={mainStoryContent}
        setActiveCategory={setActiveCategory}
        stories={stories}
        submitTabContent={submitTabContent}
        thankYouForSharingContent={thankYouForSharingContent}
        welcomeOverlayContent={welcomeOverlayContent}
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

  const contentBlocks = await client.getEntries({
    content_type: "contentBlocks"
  });

  const aboutTabContent = contentBlocks.items.filter(item => {
    return item.sys.id === "6xDZ66kDnvo24xY91qO7FA";
  })[0].fields.content;
  const submitTabContent = contentBlocks.items.filter(item => {
    return item.sys.id === "1ZTYTOO0n0PIHlo1dUtD0v";
  })[0].fields.content;
  const thankYouForSharingContent = contentBlocks.items.filter(item => {
    return item.sys.id === "2iLCrYFx5ohvaGJqmVbxi2";
  })[0].fields.content;
  const mainStoryContent = contentBlocks.items.filter(item => {
    return item.sys.id === "2iLCrYFx5ohvaGJqmVbxi2";
  })[0].fields.content;
  const welcomeOverlayContent = contentBlocks.items.filter(item => {
    return item.sys.id === "yssbnQyObL3b6UrNY1Ga4";
  })[0].fields.content;

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
    hostname,
    mainStoryContent,
    submitTabContent,
    thankYouForSharingContent,
    welcomeOverlayContent
  };
};

export default Home;
