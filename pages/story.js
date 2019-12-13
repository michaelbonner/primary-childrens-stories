import React, { useEffect, useState } from "react";
import Head from "next/head";
import Nav from "../components/nav";
import "../styles/index.css";
import Map from "../components/map";
import MiniMap from "../components/mini-map";

const client = require("contentful").createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
});

const Story = () => {
  async function fetchContentTypes() {
    const types = await client.getContentTypes();
    if (types.items) return types.items;
    console.log("Error getting Content Types.");
  }

  async function fetchEntriesForContentType(contentType) {
    const entries = await client.getEntries({
      content_type: contentType.sys.id
    });
    if (entries.items) return entries.items;
    console.log(`Error getting Entries for ${contentType.name}.`);
  }

  const [stories, setStories] = useState([]);

  useEffect(() => {
    async function getPosts() {
      const contentTypes = await fetchContentTypes();
      const allStories = await fetchEntriesForContentType(contentTypes[0]);
      console.log(allStories);
      setStories([...allStories]);
    }
    getPosts();
  }, []);

  useEffect(() => {
    async function getPosts() {
      const contentTypes = await fetchContentTypes();
      console.log(contentTypes);
      const allStories = await fetchEntriesForContentType(contentTypes[0]);
      setStories([...allStories]);
    }
    getPosts();
  }, []);

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
