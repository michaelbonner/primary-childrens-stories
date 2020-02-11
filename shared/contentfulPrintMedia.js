const contentfulPrintMedia = media => {
  if (!media) {
    return;
  }
  if (media.type.startsWith("image")) {
    return <img key={media.url} src={media.url} title={media.title} />;
  }
  if (media.type.startsWith("video")) {
    return (
      <video
        className="w-full"
        key={media.url}
        controls
        controlsList="nodownload"
        onContextMenu={e => e.preventDefault()}
      >
        <source src={media.url} />
      </video>
    );
  }
  if (media.type.startsWith("audio")) {
    return (
      <audio
        className="w-full"
        width="100%"
        key={media.url}
        controls
        controlsList="nodownload"
        onContextMenu={e => e.preventDefault()}
      >
        <source src={media.url} />
      </audio>
    );
  }
  return media.url;
};
export default contentfulPrintMedia;
