import React, { useEffect, useState } from "react";
import Head from "next/head";
import Nav from "../components/nav";
import Map from "../components/map";
import MiniMap from "../components/mini-map";
import client from "../shared/contentful";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";

import "../styles/index.css";

const Home = () => {
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

  async function fetchEntriesForContentType(contentType) {
    const entries = await client.getEntries({
      content_type: contentType.sys.id
    });
    if (entries.items) return entries.items;
    console.log(`Error getting Entries for ${contentType.name}.`);
  }

  const [stories, setStories] = useState([]);
  const [activeStory, setActiveStory] = useState(null);

  useEffect(() => {
    async function getPosts() {
      const contentTypes = await fetchContentTypes();
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
          <div className="relative z-10">
            {stories.map(story => {
              return (
                <div
                  key={story.sys.id}
                  className="inline-block bg-white border-green-500 mr-2 px-4 py-2 rounded-full"
                >
                  <button
                    href={`/?id=${story.sys.id}`}
                    onClick={() => setActiveStory(story)}
                  >
                    View {story.fields.title}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
        <div
          className={
            activeStory
              ? "absolute z-20 inset-0 bg-gray-600 opacity-50"
              : "hidden"
          }
        />
        <div
          className={
            activeStory ? "absolute z-30 w-full py-8 inset-y-0" : "hidden"
          }
          onClick={() => {
            setActiveStory(null);
          }}
        >
          <div className="flex">
            <div
              className="bg-white w-full md:w-1/2 mx-auto py-8 px-4"
              dangerouslySetInnerHTML={{
                __html: documentToHtmlString(
                  activeStory && activeStory.fields
                    ? activeStory.fields.story
                    : ""
                )
              }}
            />
          </div>
        </div>
      </Map>
    </div>
  );
};

export default Home;
