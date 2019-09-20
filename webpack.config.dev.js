const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.base');

module.exports = merge(baseConfig, {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    publicPath: '/',
    historyApiFallback: true,
    host: '0.0.0.0',
    port: 3000,
    proxy: {
      'server/api/*': {
        target: 'http://localhost:5000/api/',
        secure: false,
      },
    },
  },
});
