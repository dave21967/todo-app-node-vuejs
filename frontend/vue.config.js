module.exports = {
  devServer: {
    proxy: {
      "/todos": {
        target: "http://localhost:3000",
      },
      "/newtodo": {
        target: "http://localhost:3000",
      },
      "/complete": {
        target: "http://localhost:3000",
      },
      "/incomplete": {
        target: "http://localhost:3000",
      },
      "/delete": {
        target: "http://localhost:3000",
      },
    },
  },
};