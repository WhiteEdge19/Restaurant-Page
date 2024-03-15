const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [

       {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
       },
       
       /* {
        test: /\.(jpe?g|png|gif|svg|jpg)$/i, 
        loader: 'file-loader',
        options: {
        name: '/images/[name].[ext]'
          }
        
        }, */

        {
          test: /\.(jpg|png|svg|gif)$/,
          type: 'asset/resource',
        },
        
   ],
},
  plugins: [
    new HtmlWebpackPlugin({
        template: './src/index.html',
        filename:'index.html',
        inject:'body',
    }),
],
};