import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";

const options = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: ({
      data: {
        target: { fields },
      },
    }) => `<img src="${fields.file.url}?w=800" alt="${fields.title}"/>`,
    [INLINES.HYPERLINK]: (node) =>
      `<a href="${node.data.uri}" target="_blank">
          ${node.content[0].value}
        </a>`,
  },
};

const contentfulRichText = (content) => {
  return documentToHtmlString(content, options);
};

export default contentfulRichText;
