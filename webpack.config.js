const path = require('path');
/* eslint-disable */
module.exports = () => {
  /* eslint-enable */
  return {
    context: __dirname,
    entry: './js/ClientApp.jsx',
    devtool: 'cheap-eval-source-map',
    output: {
      path: path.join(__dirname, 'public'),
      filename: 'bundle.js'
    },
    // file resolution priority by extension:
    resolve: {
      extensions: ['.js', '.jsx', '.json']
    },
    stats: {
      colors: true,
      reasons: true,
      chunks: false
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          loader: 'babel-loader'
        }
      ]
    }
  };
};
