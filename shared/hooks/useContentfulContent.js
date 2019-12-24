import client from "../contentful";
import { useState, useEffect } from "react";

const useContentfulContent = () => {
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

  async function fetchStoryBySlug(slug) {
    const entries = await client.getEntries({
      content_type: "story",
      "fields.slug[in]": slug
    });
    if (entries.items) return entries.items;
    console.log(`Error getting Entries for story`);
  }

  async function fetchByEntryId(entryId) {
    const entry = await client.getEntry(entryId);
    if (entry) return entry;
    console.log(`Error getting Entries for story`);
  }

  const [stories, setStories] = useState([]);
  const [contentTypes, setContentTypes] = useState([]);

  useEffect(() => {
    async function getPosts() {
      const contentTypes = await fetchContentTypes();
      const allStories = await fetchEntriesForContentType(contentTypes[0]);
      setStories([...allStories]);
    }
    getPosts();
  }, []);

  return {
    contentTypes,
    fetchByEntryId,
    fetchStoryBySlug,
    stories
  };
};
export default useContentfulContent;
