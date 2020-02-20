require("dotenv").config();
const {
  contentfulContent,
  saveContent
} = require("./shared/contentfulContent-common");

const fetchAndSaveContent = async () => {
  const content = await contentfulContent();
  const output = JSON.stringify(content);
  saveContent(output);
};
fetchAndSaveContent();
