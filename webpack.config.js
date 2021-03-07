const babel = require('./babel.config.json');

module.exports = {
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.(scss)$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: babel.presets,
          },
        },
      },
    ],
  },
  mode: 'production',
  entry: './src/index',
  output: {
    filename: 'index.js',
    libraryTarget: 'commonjs',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: ['node_modules'],
  },
};
