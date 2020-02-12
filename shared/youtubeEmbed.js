import YouTube from "react-youtube";

const youtubeEmbed = youtubeLink => {
  const found = youtubeLink.match(/[\?\&]v\=([a-zA-Z0-9\_\-]+)/i);
  if (found && found.length > 1) {
    return (
      <YouTube
        videoId={found[1]}
        id={found[1]}
        className={`w-full my-4`}
        containerClassName={`w-full`}
      />
    );
  }

  return <p className="my-4 text-gray-400 italic">Invalid YouTube link</p>;
};
export default youtubeEmbed;
