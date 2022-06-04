const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const router = require('./src/scripts/routes/server-routes');
const { HOSTNAME, PORT } = require('./src/scripts/global/config');

const app = express();
const config = require('./webpack.dev.js');

const compiler = webpack(config);

app.use(
  webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
  })
);

// * Inisialisasi router
app.use(router);

app.listen(PORT, HOSTNAME, () => {
  console.log(`App running at http://localhost:${PORT}`);
});
