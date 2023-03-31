// https://github.com/michael-ciniawsky/postcss-load-config
const fs = require("fs");

module.exports = {
  syntax: 'postcss-scss',
  "plugins": {
    "postcss-import": {},
    "postcss-advanced-variables": {
      variables: JSON.parse(
        fs.readFileSync("./src/styles/variables.json", "utf-8")
      ),
    },
    "postcss-nested": {},
    // to edit target browsers: use "browserslist" field in package.json
    "autoprefixer": {}
  }
}

// module.exports = {
//   syntax: 'postcss-scss',
//   plugins: [
//     require("postcss-import"),
//     require("postcss-nested"),
//     // to edit target browsers: use "browserslist" field in package.json
//     require("autoprefixer")
//   ]
// }
