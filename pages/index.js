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
        <meta
          property="og:url"
          content={`https://primary-childrens-stories.michaelbonner.now.sh/`}
        />
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

  const fetchAboutTabContent = await client.getEntry("6xDZ66kDnvo24xY91qO7FA");
  const aboutTabContent = fetchAboutTabContent.fields.content;
  console.log(aboutTabContent);
  const fetchSubmitTabContent = await client.getEntry("1ZTYTOO0n0PIHlo1dUtD0v");
  const submitTabContent = fetchSubmitTabContent.fields.content;
  const fetchThankYouForSharingContent = await client.getEntry(
    "6Dd6zTG7pogLpeEkvteHu0"
  );
  const thankYouForSharingContent =
    fetchThankYouForSharingContent.fields.content;
  const fetchMainStoryContent = await client.getEntry("2iLCrYFx5ohvaGJqmVbxi2");
  const mainStoryContent = fetchMainStoryContent.fields.content;
  const fetchWelcomeOverlayContent = await client.getEntry(
    "yssbnQyObL3b6UrNY1Ga4"
  );
  const welcomeOverlayContent = fetchWelcomeOverlayContent.fields.content;

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
