const path = require('path');
const webpack = require('webpack');

const config = {
    mode: 'none',
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        }
      ]
    }
  };
/*
{
    entry: ['index.js'],
    output: {
        path: path.join(__dirname,'build/'),
        filename: 'index.js',
        publicPath: '/build/'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },
    resolve: {
        modules: [__dirname]
    }
};
*/
module.exports = config;