module.exports = {
    webpack: {
      configure: (webpackConfig) => {
        webpackConfig.resolve.fallback = {
          ...webpackConfig.resolve.fallback,
          fs: false, // Add this line
          path: require.resolve("path-browserify"),
        };
        return webpackConfig;
      },
    },
  };
  