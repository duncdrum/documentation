const path = require('path');

module.exports = {
  entry: './src/main/xar-resources/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};
