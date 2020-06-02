const fs = require("fs");

const data = JSON.parse(
  fs.readFileSync("./data/site-content.json", { encoding: "utf-8" })
);
const storiesSlugs = data.stories.items
  .map(
    (story) => `  <url>
    <loc>https://herekidswin.com/${story.fields.slug}<loc>
  </url>`
  )
  .sort((a, b) => {
    if (a.toLowerCase() > b.toLowerCase()) {
      return 1;
    }
    if (a.toLowerCase() < b.toLowerCase()) {
      return -1;
    }
    return 0;
  });
fs.writeFileSync(
  "./public/sitemap.xml",
  `<?xml version="1.0" encoding="utf-8" standalone="yes" ?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://herekidswin.com/<loc>
  </url>
${storiesSlugs.join(`
`)}
</urlset>`
);
