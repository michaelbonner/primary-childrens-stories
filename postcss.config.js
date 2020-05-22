const purgecss = [
  "@fullhuman/postcss-purgecss",
  {
    content: ["./pages/**/*.js", "./components/**/*.js"],
    whitelist: ["html", "body"],
    whitelistPatterns: [/^Toastify/],

    // Include any special characters you're using in this regular expression
    defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
  },
];
module.exports = {
  plugins: [
    "postcss-import",
    "tailwindcss",
    "autoprefixer",
    ...(process.env.NODE_ENV === "production" ? [purgecss] : []),
  ],
};
