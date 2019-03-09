const withSass = require('@zeit/next-sass')

module.exports = withSass({
  /*cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: "[local]___[hash:base64:5]",
  },*/
  // This is what makes HMR work in the Docker container.
  webpackDevMiddleware: (config) => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300
    };
    return config;
  },
  webpack: (config) => {
    config.resolve.extensions.push('.jsx');
    return config
  }
})
