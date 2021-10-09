const glob = require("glob-all");
const paths = require("react-scripts/config/paths");

const purgecss = require("@fullhuman/postcss-purgecss")({
    content: [
      paths.appHtml,
      ...glob.sync(`${paths.appSrc}/pages/**/*.{js,ts,jsx,tsx}`, { nodir: true }),
      ...glob.sync(`${paths.appSrc}/components/**/*.{js,ts,jsx,tsx}`, {
        nodir: true,
      }),
      ...glob.sync(`${paths.appNodeModules}/antd/es/**/*.css`, {
        nodir: true,
      }),
      ...glob.sync(`${paths.appSrc}/static/style/**/*.scss`, { nodir: true }),
    ],
  });
  

module.exports = {
  style: {
    postcss: {
      plugins: [
        ...(process.env.NODE_ENV === "production" ? [purgecss] : []),
        require("tailwindcss"),
        require("autoprefixer"),
      ],
    },
  },
};
