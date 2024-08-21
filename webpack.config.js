const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/js/index.js',  // Entry point
  output: {
    filename: 'bundle.js',     // Output bundle
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,        // CSS loader
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.js$/,         // Babel loader for JS
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,  // Image loader
        type: 'asset/resource',
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin()],
  devServer: {
    static: {
      directory: path.join(__dirname, './dist'),
    },
    compress: true,
    port: 9000,
  },
  mode: 'development',          // Set mode to development
};

