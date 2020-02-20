import contentfulContent, { saveContent } from "../../shared/contentfulContent";

export default async (req, res) => {
  const content = await contentfulContent();
  const output = JSON.stringify(content);
  saveContent(output);

  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(output);
};
