import client from "../../shared/contentful";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import Head from "next/head";
import Router from "next/router";
import { useState } from "react";
import { FacebookShareButton, TwitterShareButton } from "react-share";
import Facebook from "../../components/facebook";
import Twitter from "../../components/twitter";

const Story = ({ story, title, body, footerText, media, url }) => {
  const [shareOpen, setShareOpen] = useState(false);
  const printMedia = media => {
    if (!media) {
      return;
    }
    if (media.type.startsWith("image")) {
      return <img key={media.url} src={media.url} title={media.title} />;
    }
    if (media.type.startsWith("video")) {
      return (
        <video
          width="100%"
          key={media.url}
          controls
          controlsList="nodownload"
          onContextMenu={e => e.preventDefault()}
        >
          <source src={media.url} />
        </video>
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
      <div
        className="py-12 relative"
        style={{
          backgroundImage: "url(/images/pch-background.svg)",
          backgroundAttachment: "fixed",
          backgroundSize: "cover"
        }}
      >
        <div
          className="relative z-30 story-content max-w-3xl my-4 bg-white px-4 mx-4 lg:mx-auto lg:px-16 py-10 rounded-lg"
          onClick={e => {
            e.stopPropagation();
          }}
        >
          <div className="absolute left:0 lg:right-0 top-0 -ml-2 lg:ml-0 mt-2 lg:mt-1 lg:-mr-12">
            <button
              className="lg:-mr-32 bg-white px-6 py-4 shadow-lg rounded-lg font-bold text-gray-600"
              onClick={() => {
                Router.push("/");
              }}
            >
              X
            </button>
          </div>
          <div className="absolute right-0 top-0 flex flex-col justify-end mr-8 md:mr-16 w-24 text-center">
            <button
              className="inline-block py-3 md:py-6 px-2 md:px-4 bg-gray-200 text-gray-600 text-sm uppercase rounded-b-lg shadow-md z-30 focus:outline-none"
              onClick={() => {
                setShareOpen(!shareOpen);
              }}
            >
              Share
            </button>
            <FacebookShareButton
              className={`${
                shareOpen ? "flex" : "hidden"
              } items-center justify-center -mt-1 pt-3 pb-2 px-4 bg-facebook-500 hover:bg-facebook-600 text-white text-sm uppercase rounded-b-lg shadow-md z-20 focus:outline-none`}
              url={url}
              resetButtonStyle={false}
            >
              <Facebook className="w-8 fill-current" />
            </FacebookShareButton>
            <TwitterShareButton
              className={`${
                shareOpen ? "flex" : "hidden"
              } items-center justify-center -mt-1 pt-3 pb-2 px-4 bg-twitter-500 hover:bg-twitter-600 text-white text-sm uppercase rounded-b-lg shadow-md z-20 focus:outline-none`}
              url={url}
              resetButtonStyle={false}
            >
              <Twitter className="w-8 fill-current" />
            </TwitterShareButton>
          </div>
          <div className="text-xl font-bold leading-relaxed mb-6 mt-16">
            {title}
          </div>
          {media.map(item => {
            return printMedia(item);
          })}
          <div className="mt-4" dangerouslySetInnerHTML={{ __html: body }} />
          <div dangerouslySetInnerHTML={{ __html: footerText }} />
        </div>
      </div>
      <div
        className="fixed inset-0 bg-gray-600 opacity-50"
        onClick={() => {
          Router.push("/");
        }}
      />
    </div>
  );
};

Story.getInitialProps = async function(context) {
  const { entryId } = context.query;
  const story = await client.getEntry(entryId);

  const title = story && story.fields ? story.fields.title : "";
  const body = documentToHtmlString(
    story && story.fields ? story.fields.story : ""
  );

  const footerText = documentToHtmlString(
    story && story.fields
      ? story.fields.categories[0].fields.storyFooterText
      : ""
  );

  let media = [];

  const hostname = context.req
    ? context.req.headers.host
    : window.location.hostname;
  const url = `${hostname}/story/${story && story.sys.id}`;

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
    body,
    footerText,
    media,
    story,
    title,
    url
  };
};

export default Story;
