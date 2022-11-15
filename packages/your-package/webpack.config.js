const { merge } = require('webpack-merge');
const { commonConfig } = require('../../webpack.common.config.js');

module.exports = merge(commonConfig(__dirname), {
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        ],
      },
    ],
  },
});
