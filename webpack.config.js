const path = require('path');

const SRC_DIR = path.join(__dirname, '/client');
const OUT_DIR = path.join(__dirname, '/public');

module.exports = {
  //target: 'node',
  entry: path.join(SRC_DIR, 'index.js'),
  output: {
    path: OUT_DIR,
    filename: 'main.js'
  },
  module: {
    rules: [
      {
        test:/\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.(gif|svg|jpg|png)$/,
        loader: "file-loader",
      }
    ]
  },
  mode: 'development',
  resolve: {
    extensions: ['.js', '.jsx']
  }



  // module: {
  //   // apply loaders to files that meet given conditions
  //   loaders: [{
  //     test: /\.jsx?$/,
  //     include: path.join(__dirname, '/client'),
  //     loader: 'babel-loader',
  //     query: {
  //       presets: ["react", "es2015", "stage-1"]
  //     }
  //   },
  //   {
  //     test: /\.(gif|svg|jpg|png)$/,
  //     loader: "file-loader",
  //   }],
  // }
};