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