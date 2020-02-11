import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { BLOCKS } from "@contentful/rich-text-types";

const options = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: ({
      data: {
        target: { fields }
      }
    }) => `<img src="${fields.file.url}" alt="${fields.title}"/>`
  }
};

const contentfulRichText = content => {
  return documentToHtmlString(content, options);
};

export default contentfulRichText;
