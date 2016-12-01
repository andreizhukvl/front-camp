module.exports = {
    // entry: {
    //     start: "./scripts/app.js",
    //     lazy: "./scripts/feed.js"
    // },
    entry: "./scripts/app.js",
    output: {
        path: __dirname + '/build/',
        publicPath: __dirname + '/build/',
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            {
                test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader', query: {
                    presets: ['es2015']
                }
            }
        ]
    },
    watch: true,
    watchOptions: {
        aggregateTimeout: 300
    },
    cache: true,
    devtool: "eval",
    devServer: {
        inline: true,
        port: 8008
    }
};