

const path = require('path');
const common = require('./webpack.common');
// webpack-merge v5 (and later)
const { merge } = require('webpack-merge')
// const merge = require('webpack-merge');//Only worked in v4.
const {CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = merge(common,{
    mode: "production",
    // devtool: "none",
    // entry: "./src/index.js",
    output:{
        filename:"[name].[contentHash].bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    plugins: [new CleanWebpackPlugin()],
 
  
})