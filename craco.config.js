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
          tls: false, // Ignore tls
          https: require.resolve("https-browserify"), // Polyfill for https
          crypto: require.resolve("crypto-browserify"), // Polyfill for crypto
          http: require.resolve("stream-http"), // Polyfill for http
          util: require.resolve("util/"), // Polyfill for util
          assert: require.resolve("assert/"), // Polyfill for assert
        };
        return webpackConfig;
      },
    },
  };
  