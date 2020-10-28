import Error from "next/error";
import Head from "next/head";
import Router from "next/router";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { FacebookShareButton, TwitterShareButton } from "react-share";
import { toast } from "react-toastify";
import { useState } from "react";
import Facebook from "components/facebook";
import client from "shared/contentful";
import Twitter from "components/twitter";
import contentfulRichText from "shared/contentfulRichText";
import contentfulPrintMedia from "shared/contentfulPrintMedia";
import youtubeEmbed from "shared/youtubeEmbed";
import LinkIcon from "components/link-icon";
import getHostName from "shared/getHostName";

const Story = ({ story, title, body, footerText, media }) => {
  const [shareOpen, setShareOpen] = useState(false);

  const url = `https://${getHostName()}/${
    story && story.fields.slug.toLowerCase()
  }`;

  const onCopyLink = () => {
    toast.success("A link has been copied to your clipboard", {});
    setShareOpen(false);
  };

  if (!story) {
    return <Error statusCode={404} />;
  }

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
          content={`https://herekidswin.com/${story.fields.slug.toLowerCase()}`}
        />
        <link
          rel="canonical"
          href={`https://herekidswin.com/${story.fields.slug.toLowerCase()}`}
        />
      </Head>
      <div
        className="py-12 relative h-screen overflow-y-scroll"
        style={{
          backgroundImage: "url(/images/pch-background-2000.jpg)",
          backgroundImage: "url(/images/pch-background-2000.webp)",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
        }}
      >
        <div
          className="relative z-30 story-content max-w-3xl mt-4 mb-12 bg-white px-4 mx-4 lg:mx-auto lg:px-16 py-10 rounded-lg"
          onClick={(e) => {
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
              className="inline-block py-3 md:pt-8 md:pb-3 px-2 md:px-4 bg-blue-500 text-blue-100 text-sm font-bold rounded-b-lg shadow-md z-50 focus:outline-none"
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
            <CopyToClipboard onCopy={onCopyLink} text={url}>
              <button
                className={`${
                  shareOpen ? "flex" : "hidden"
                } flex items-center justify-center -mt-1 pt-3 pb-2 px-4 bg-gray-400 hover:bg-gray-500 text-gray-600 text-sm uppercase rounded-b-lg shadow-md z-20 focus:outline-none`}
              >
                <LinkIcon className="w-8 p-1 fill-current" />
              </button>
            </CopyToClipboard>
          </div>
          <div className="text-xl font-bold leading-relaxed mb-6 mt-16">
            {title}
          </div>
          {story &&
            story.fields.youTubeLink &&
            youtubeEmbed(story.fields.youTubeLink)}
          {media.map((item) => {
            return contentfulPrintMedia(item);
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

export async function getStaticPaths() {
  const stories = await client.getEntries({
    content_type: "story",
  });

  const paths = stories.items.map((story) => ({
    params: { storySlug: story.fields.slug.toLowerCase() },
  }));

  // stories.items.forEach((story) => {
  //   paths.push({
  //     params: {
  //       storySlug: story.fields.slug
  //         .split("-")
  //         .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
  //         .join("-"),
  //     },
  //   });
  // });

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const stories = await client.getEntries({
    content_type: "story",
    "fields.slug": params.storySlug.toLowerCase(),
  });

  if (!stories.items.length) {
    return {
      props: {
        body: "",
        footerText: "",
        media: "",
        story: false,
        title: "",
      },
    };
  }

  const story = stories.items[0];

  const title = story && story.fields ? story.fields.title : "";
  const body = contentfulRichText(
    story && story.fields ? story.fields.story : ""
  );

  const footerText = contentfulRichText(
    story && story.fields
      ? story.fields.categories[0].fields.storyFooterText
      : ""
  );

  let media = [];

  if (
    story &&
    story.fields &&
    story.fields.media &&
    story.fields.media.length
  ) {
    media = story.fields.media.map((media) => {
      if (!media.fields) {
        return;
      }
      return {
        type: media.fields.file.contentType,
        url: media.fields.file.url,
        title: media.fields.title,
        details: media.fields.file.details,
      };
    });
  }

  return {
    props: {
      body,
      footerText,
      media,
      story,
      title,
    },
  };
}

export default Story;
