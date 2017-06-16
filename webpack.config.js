var path = require('path');

module.exports = {
  entry: {
    dist: "./lib/index.ts"
  },

  output: {
    filename: "[name]/bundle.js",
    path: __dirname,
    libraryTarget: "umd"
  },

  devtool: "source-map",

  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader"
      }
    ]
  }
};
