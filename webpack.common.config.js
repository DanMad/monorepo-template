const CopyPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
  commonConfig(__packagedirname) {
    return {
      entry: 'src',
      mode: 'production',
      output: {
        clean: true,
        filename: 'index.js',
        library: {
          type: 'umd',
        },
      },
      plugins: [
        new CopyPlugin({
          patterns: ['LICENSE', 'package.json', 'README.md'],
        }),
      ],
      resolve: {
        modules: [
          path.resolve(__packagedirname, 'node_modules'),
          'node_modules',
        ],
        preferRelative: true,
      },
    };
  },
};
