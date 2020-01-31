import StoryOverlay from "../../components/story-overlay";
import client from "../../shared/contentful";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { useState, useEffect } from "react";
import Head from "next/head";

import "../../styles/index.css";

const Story = ({ story }) => {
  const [media, setMedia] = useState([]);

  useEffect(() => {
    if (story.fields && story.fields.media && story.fields.media.length) {
      setMedia(
        story.fields.media.map(media => {
          if (!media.fields) {
            return;
          }
          return {
            type: media.fields.file.contentType,
            url: media.fields.file.url,
            title: media.fields.title,
            details: media.fields.file.details
          };
        })
      );
    } else {
      setMedia([]);
    }
  }, []);

  const body = documentToHtmlString(
    story && story.fields ? story.fields.story : ""
  );

  const footerText = documentToHtmlString(
    story && story.fields
      ? story.fields.categories[0].fields.storyFooterText
      : ""
  );

  const printMedia = media => {
    if (!media) {
      return;
    }
    if (media.type.startsWith("image")) {
      return (
        <img
          className="max-w-full"
          key={media.url}
          src={media.url}
          title={media.title}
        />
      );
    }
    return media.url;
  };

  return (
    <div>
      <Head>
        <title>{story.fields.title || "Primary Children's Hospital"}</title>
      </Head>
      <div className="story-content container mx-auto my-4">
        {media.map(item => {
          return printMedia(item);
        })}
        <div dangerouslySetInnerHTML={{ __html: body }} />
        <div dangerouslySetInnerHTML={{ __html: footerText }} />
      </div>
    </div>
  );
};

Story.getInitialProps = async function(context) {
  const { entryId } = context.query;
  const storyData = await client.getEntry(entryId);

  return {
    story: storyData
  };
};

export default Story;
