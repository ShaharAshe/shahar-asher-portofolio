module.exports = {
    webpack: {
      configure: (webpackConfig) => {
        webpackConfig.resolve.fallback = {
          ...webpackConfig.resolve.fallback,
          fs: false, // Ignore fs
          path: require.resolve("path-browserify"), // Polyfill for path
          zlib: require.resolve("browserify-zlib"), // Polyfill for zlib
          os: require.resolve("os-browserify/browser"), // Polyfill for os
          net: require.resolve("net-browserify"), // Polyfill for net
        };
        return webpackConfig;
      },
    },
  };
  