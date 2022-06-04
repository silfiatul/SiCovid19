const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');

const ServiceWorkerWebpackPlugin = require('serviceworker-webpack-plugin');
const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src/scripts/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/templates/index.html'),
      filename: 'index.html',
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/public'),
          to: path.resolve(__dirname, 'dist/'),
        },
      ],
    }),
    new WebpackPwaManifest({
      filename: 'manifest.json',
      name: 'SiCovid19',
      short_name: 'SiCovid19',
      orientation: 'portrait',
      display: 'standalone',
      inject: true,
      id: '/index.html',
      start_url: '/index.html',
      description: 'Sistem Informasi Covid 19',
      theme_color: '#ea4559',
      background_color: '#fff',
      crossorigin: 'use-credentials',
      includeDirectory: true,
      icons: [
        {
          src: path.resolve('src/public/assets/icons/icon.png'),
          sizes: [96, 128, 144, 192, 256, 384, 512],
          purpose: 'any',
          destination: path.join('assets/icons'),
        },
      ],
    }),
    new ServiceWorkerWebpackPlugin({
      entry: path.resolve(__dirname, 'src/scripts/sw.js'),
    }),
  ],
};
