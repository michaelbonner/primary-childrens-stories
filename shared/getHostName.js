export default () => {
  return typeof window !== "undefined"
    ? window.location.host
    : "https://herekidswin.com";
};
