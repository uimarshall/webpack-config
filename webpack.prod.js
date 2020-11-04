

const path = require('path');
const common = require('./webpack.common');
// webpack-merge v5 (and later)
const { merge } = require('webpack-merge')
// const merge = require('webpack-merge');//Only worked in v4.
module.exports = merge(common,{
    mode: "production",
    // devtool: "none",
    // entry: "./src/index.js",
    output:{
        filename:"main.[contentHash].js",
        path: path.resolve(__dirname, "dist")
    },
   
  
})