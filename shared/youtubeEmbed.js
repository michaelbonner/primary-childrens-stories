import YouTube from "react-youtube";

const youtubePlayer = videoId => {
  return (
    <YouTube
      videoId={videoId}
      id={videoId}
      className={`w-full my-4`}
      containerClassName={`w-full`}
    />
  );
};

const youtubeEmbed = youtubeLink => {
  const found = youtubeLink.match(/[\?\&]v\=([a-zA-Z0-9\_\-]+)/i);
  if (found && found.length > 1) {
    return youtubePlayer(found[1]);
  }

  const found2 = youtubeLink.match(/youtu\.be\/([a-zA-Z0-9\_\-]+)/i);
  if (found2 && found2.length > 1) {
    return youtubePlayer(found2[1]);
  }

  return <p className="my-4 text-gray-400 italic">Invalid YouTube link</p>;
};
export default youtubeEmbed;
