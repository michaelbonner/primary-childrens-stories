const getHostName = () => {
  return typeof window !== "undefined"
    ? window.location.host
    : "https://herekidswin.com";
};
export default getHostName;
