import client from "../contentful";
import { useState, useEffect } from "react";

const useContentfulContent = () => {
  const [stories, setStories] = useState([]);
  const [contentTypes, setContentTypes] = useState([]);
  const [categories, setCategories] = useState([]);

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

  useEffect(() => {
    async function getPosts() {
      const contentTypes = await fetchContentTypes();
      setContentTypes(contentTypes);
      const allStories = await fetchEntriesForContentType(
        contentTypes.filter(contentType => contentType.name === "Story")[0]
      );
      setStories([...allStories]);
      const allCategories = await fetchEntriesForContentType(
        contentTypes.filter(contentType => contentType.name === "Category")[0]
      );
      setCategories([...allCategories]);
    }
    getPosts();
  }, []);

  return {
    categories,
    contentTypes,
    fetchByEntryId,
    fetchStoryBySlug,
    stories
  };
};
export default useContentfulContent;
