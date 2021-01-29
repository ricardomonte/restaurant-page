const path = require('path');
// const { mainModule } = require('process');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Output Management',
      template: '!!html-loader!./src/template.html',
    }),
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    contentBase: './dist',
  },
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|cur)$/i,
        use: [ 
          { 
            loader: 'file-loader',
          }
        ]
      },
      {
        test: /\.html$/i,
        use: [ 'file-loader', 'html-loader' ]
      },
    ],
  },
};