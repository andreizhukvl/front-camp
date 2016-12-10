var webpack  = require('webpack');

module.exports = {
    entry: "./scripts/feed.js",
    output: {
        path: __dirname,
        filename: "build/bundle.js"
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