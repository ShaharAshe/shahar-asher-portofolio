module.exports = {
    resolve: {
      fallback: {
        "vm": require.resolve("vm-browserify"),
        "async_hooks": false
      }
    }
  };
  