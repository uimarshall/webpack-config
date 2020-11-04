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

const path = require('path');
module.exports = {
    mode: "development",
    // devtool: "none",
    entry: "./src/index.js",
    output:{
        filename:"main.js",//create helo.js in the path below
        path: path.resolve(__dirname, "dist")
    }
};