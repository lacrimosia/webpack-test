var webpack = require('webpack'),
    path = require('path');
// var json = require("json!./data/data.json");


module.exports = {
    debug: true,
    entry: {
        main: './dev/js/main.js'
    },
    output: {
        path: path.join(__dirname, 'public/js'),
        filename: '[name].js'
    },
    module: {
        loaders: [{
            test: /\.scss$/,
            loaders: ["style", "css", "sass"]
        }, {
            test: /\.json/,
            loader: "json-loader"
        }, {
            test: /\.js$/,
            exclude: /(node_modules)/,
            loader: 'babel',
            query: {
                presets: ['es2015', 'react']
            }
        },
        {
            test: /\.(png|jpg|gif)$/,
            loader: 'url-loader?limit=200000'
        }],
        sassLoader: {
            includePaths: [path.resolve(__dirname, "./public/css/")]
        }
    }
};
