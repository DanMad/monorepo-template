const CopyPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
  commonConfig(__packagedirname) {
    return {
      entry: path.resolve(__packagedirname, 'src'),
      mode: 'production',
      output: {
        clean: true,
        filename: 'index.js',
        library: {
          type: 'umd',
        },
        path: path.resolve(__packagedirname, 'dist'),
      },
      plugins: [
        new CopyPlugin({
          patterns: [
            path.resolve(__packagedirname, 'LICENSE'),
            path.resolve(__packagedirname, 'package.json'),
            path.resolve(__packagedirname, 'README.md'),
          ],
        }),
      ],
      resolve: {
        modules: [
          path.resolve(__packagedirname, 'node_modules'),
          path.resolve(__dirname, 'node_modules'),
        ],
        preferRelative: true,
      },
    };
  },
};
