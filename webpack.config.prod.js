var webpack  = require('webpack');

module.exports = {
    entry: "./scripts/app.js",
    output: {
        path: __dirname,
        filename: "babeled/bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader', query: { 
                presets: ['es2015']}              
            }
        ]
    },
    cache: true,
    plugins: [
        new webpack.optimize.UglifyJsPlugin()
    ]
};