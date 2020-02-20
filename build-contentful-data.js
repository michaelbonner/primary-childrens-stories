require("dotenv").config();
const fs = require("fs");
const path = require("path");
const {
  contentfulContent,
  saveContent
} = require("./shared/contentfulContent-common");

const fetchAndSaveContent = async () => {
  console.log("deleting site-content");
  try {
    fs.unlinkSync(path.join(__dirname, ".", "data", `site-content.json`));
    console.log("deleted site-content");
  } catch (e) {
    console.log("nothing to delete");
  }
  const content = await contentfulContent();
  const output = JSON.stringify(content);
  saveContent(output);
  console.log("generated site-content");
  console.log("saved site-content");
};
fetchAndSaveContent();
