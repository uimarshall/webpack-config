// This config will output helo.js in "TEST" folder just as dist o/p main.js
// To remove "TEST" folder type: "rm -rf TEST/" on ur CLI

// ***************************************************
// This is just recreating what we already have 
/**const path = require('path');
module.exports = {
    entry: "./src/index.js",
    output:{
        filename:"helo.js",//create helo.js in the path below
        path: path.resolve(__dirname, "TEST")
    }
};*/
// ***************************************************
// Common has entry, plugins and module

var HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
module.exports = {
    
    // devtool: "none",
    entry: "./src/index.js",
    
    plugins: [new HtmlWebpackPlugin({
        template: "./src/template.html"
    })],
    module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings and Injects into DOM
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
    ],
  },
};