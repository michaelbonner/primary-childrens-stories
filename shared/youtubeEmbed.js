import YouTube from "react-youtube";

const youtubeEmbed = youtubeLink => {
  const found = youtubeLink.match(
    /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/i
  );
  if (found && found.length > 2) {
    return (
      <YouTube
        videoId={found[2]}
        id={found[2]}
        className={`w-full my-4`}
        containerClassName={`w-full`}
        opts={{
          playerVars: {
            rel: 0,
            showinfo: 0,
            modestbranding: 1,
            listType: "user_uploads",
            origin: "https://herekidswin.org"
          }
        }}
      />
    );
  }

  return (
    <p className="my-4 text-gray-400 italic" data-url={youtubeLink}>
      Invalid YouTube link
    </p>
  );
};
export default youtubeEmbed;
