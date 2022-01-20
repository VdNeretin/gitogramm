const path = require("path");
const vueSrc= "./src";
module.exports = {
  publicPath: process.env.Node_EVN === "production" ? "/gitogramm/dist/" : "/",
  css: {
    requireModuleExtension: true
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, vueSrc),

        _api: path.resolve(__dirname, "src/api/modules")
      },
      extensions: [".js", ".vue", ".json"]
    }
  }
};
