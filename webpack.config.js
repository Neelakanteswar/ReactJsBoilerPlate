///////////////////////////////////////////
// project : React_boilerplate;
// year : 2018;
// author : Neelakanteswar Patnaik;
///////////////////////////////////////////


var webpack = require("webpack");
var path = require("path");

var isProd = process.env.NODE_ENV === 'production' // true or false

var ExtractTextPlugin = require('extract-text-webpack-plugin');
var extractPlugin = new ExtractTextPlugin({
  filename : 'master.css'
});

var DIST_DIR = path.resolve(__dirname, "dist");
var SRC_DIR = path.resolve(__dirname, "src");

var config = {
    entry: SRC_DIR + "/app/index.js",
    output: {
        path: DIST_DIR + "/app",
        filename: "bundle.js",
        publicPath: "/app/"
    },
    module: {
        loaders: [
            {
                test: /\.js?/,
                include: SRC_DIR,
                loader: "babel-loader",
                query: {
                    presets: ["react", "es2015", "stage-2"]
                }
            },
            {
                test: /\.scss$/,
                include: SRC_DIR,
                use : extractPlugin.extract({
                  use : ['css-loader?minimize','sass-loader']
                })
            },
            // {
            //   test: /\.(png|jpg)$/,
            //   loader: 'url-loader'
            // },
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                use:'file-loader?name=[name].[ext]&outputPath=assets/images/'
            }
        ]
    },

    plugins: [
      extractPlugin
    ]
};

module.exports = config;
