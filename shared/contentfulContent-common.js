const client = require("./contentful-common");
const fs = require("fs");
const path = require("path");

const contentfulContent = async () => {
  const stories = await client.getEntries({
    content_type: "story"
  });

  const categories = await client.getEntries({
    content_type: "category"
  });

  const content = await client.getEntries({
    content_type: "contentBlocks"
  });

  const contentBlocks = {};
  contentBlocks.aboutTabContent = content.items.filter(item => {
    return item.sys.id === "6xDZ66kDnvo24xY91qO7FA";
  })[0].fields.content;
  contentBlocks.submitTabContent = content.items.filter(item => {
    return item.sys.id === "1ZTYTOO0n0PIHlo1dUtD0v";
  })[0].fields.content;
  contentBlocks.thankYouForSharingContent = content.items.filter(item => {
    return item.sys.id === "2iLCrYFx5ohvaGJqmVbxi2";
  })[0].fields.content;
  contentBlocks.mainStoryContent = content.items.filter(item => {
    return item.sys.id === "2iLCrYFx5ohvaGJqmVbxi2";
  })[0].fields.content;
  contentBlocks.welcomeOverlayContent = content.items.filter(item => {
    return item.sys.id === "yssbnQyObL3b6UrNY1Ga4";
  })[0].fields.content;

  return {
    stories,
    categories,
    contentBlocks
  };
};

const ensureDirectoryExistence = filePath => {
  var dirname = path.dirname(filePath);
  if (fs.existsSync(dirname)) {
    return true;
  }
  ensureDirectoryExistence(dirname);
  fs.mkdirSync(dirname);
};

const saveContent = output => {
  ensureDirectoryExistence(
    path.join(__dirname, "..", "data", `site-content.json`)
  );
  fs.writeFile(
    path.join(__dirname, "..", "data", `site-content.json`),
    output,
    "utf8",
    function(err) {
      if (err) {
        console.log("An error occured while writing JSON Object to File.");
        return console.log(err);
      }
    }
  );
};

module.exports = {
  contentfulContent,
  saveContent
};
