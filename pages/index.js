import React, { useState } from "react";
import Head from "next/head";
import fs from "fs";
import path from "path";
import Map from "components/map";
import contentfulContent from "shared/contentfulContent";

const Home = ({
  aboutTabContent,
  categories,
  mainStoryContent,
  stories,
  submitTabContent,
  thankYouForSharingContent,
  welcomeOverlayContent,
}) => {
  const [activeCategory, setActiveCategory] = useState("all");
  return (
    <div>
      <Head>
        <title>Here, Kids Win | Primary Children's Hospital</title>
        <meta
          property="og:title"
          content="Share your child’s story or your own childhood story as a message of hope for others."
        />
        <meta property="og:url" content={`https://herekidswin.com/`} />
        <meta
          name="description"
          content="When a child receives a difficult diagnosis, it’s helpful to see the journey and success of others who were in similar circumstances. We hope you’ll find strength and inspiration in the countless stories of children who have won in unique ways. We invite you to share your child’s victory or your own victory as a child at Primary Children’s Hospital."
        />
        <link rel="preload" href="https://www.googletagmanager.com" />
        <link rel="preload" href="https://pubads.g.doubleclick.net" />
        <link rel="preload" href="https://www.google-analytics.com" />
        <link rel="canonical" href={`https://herekidswin.com/`} />
      </Head>

      <Map
        aboutTabContent={aboutTabContent}
        activeCategory={activeCategory}
        categories={categories}
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

export async function getStaticProps() {
  let siteContent;
  try {
    if (
      fs &&
      fs.existsSync(path.join(process.cwd(), "..", "data", `site-content.json`))
    ) {
      siteContent = JSON.parse(
        fs.readFileSync(
          path.join(process.cwd(), "..", "data", `site-content.json`),
          "utf8"
        )
      );
    } else {
      siteContent = await contentfulContent();
    }
  } catch (err) {
    siteContent = await contentfulContent();
    console.log("err", err);
  }

  const stories = siteContent.stories;
  const categories = siteContent.categories;
  const aboutTabContent = siteContent.contentBlocks.aboutTabContent;
  const submitTabContent = siteContent.contentBlocks.submitTabContent;
  const thankYouForSharingContent =
    siteContent.contentBlocks.thankYouForSharingContent;
  const mainStoryContent = siteContent.contentBlocks.mainStoryContent;
  const welcomeOverlayContent = siteContent.contentBlocks.welcomeOverlayContent;

  return {
    props: {
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
      mainStoryContent,
      submitTabContent,
      thankYouForSharingContent,
      welcomeOverlayContent,
    },
  };
}

export default Home;
