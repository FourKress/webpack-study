const { resolve } = require("path");

module.exports = {
  entry: resolve(__dirname, "./add.js"),
  output: {
    filename: resolve(__dirname, "build.js"),
    path: resolve(__dirname, "build"),
  },
  mode: "development",
};
