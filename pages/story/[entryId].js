import client from "../../shared/contentful";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import Head from "next/head";

const Story = ({ story, body, footerText, media }) => {
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
        <title>{`${story.fields.title} | Primary Children's Hospital Stories`}</title>
        <meta
          property="og:title"
          content={`${story.fields.title} | Primary Children's Hospital Stories`}
        />
        <meta
          property="og:url"
          content={`https://primary-childrens-stories.michaelbonner.now.sh/story/${story.sys.id}`}
        />
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
  const story = await client.getEntry(entryId);

  const body = documentToHtmlString(
    story && story.fields ? story.fields.story : ""
  );

  const footerText = documentToHtmlString(
    story && story.fields
      ? story.fields.categories[0].fields.storyFooterText
      : ""
  );

  let media = [];

  if (story.fields && story.fields.media && story.fields.media.length) {
    media = story.fields.media.map(media => {
      if (!media.fields) {
        return;
      }
      return {
        type: media.fields.file.contentType,
        url: media.fields.file.url,
        title: media.fields.title,
        details: media.fields.file.details
      };
    });
  }

  return {
    story,
    body,
    footerText,
    media
  };
};

export default Story;
