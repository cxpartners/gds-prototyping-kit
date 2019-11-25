/* eslint-disable import/no-extraneous-dependencies */
const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const config = require('../../webpack.config.base.js');

const app = express();
const compiler = webpack(config);

const port = 5000;
const apiRoutes = require('./api/v1/api.js');

app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
}));

app.use('/api/v1', apiRoutes);

/* eslint-disable */
app.use((err, req, res, next) => {
  const status = err.status || 500;
  console.log(err);
  const msg = err.message || err.stack || err.name || 'General error';
  res.status(status)
    .json({
      error: msg,
    });
});


app.listen(port, () => console.log(`API listening on port ${port}!`));
/* eslint-enable */
