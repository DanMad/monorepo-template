const CopyPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
  commonConfig(__contextualdirname) {
    return {
      entry: path.join(__contextualdirname, 'src', 'index'),
      mode: 'production',
      output: {
        clean: true,
        path: path.join(__contextualdirname, 'dist'),
        filename: 'index.js',
        library: {
          type: 'commonjs2',
        },
      },
      plugins: [
        new CopyPlugin({
          patterns: [
            path.join(__dirname, 'LICENSE'),
            path.join(__contextualdirname, 'package.json'),
            path.join(__contextualdirname, 'README.md'),
          ],
        }),
      ],
    };
  },
};
