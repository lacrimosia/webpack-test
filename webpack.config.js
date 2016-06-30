var webpack = require('webpack'),
path = require('path');


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
        loaders: [
        {
            test: /\.scss$/,
            loaders: ["style", "css", "sass"]
        },
        {
            test:/\.js$/,
            exclude: /(node_modules)/,
            loader: 'babel',
            query:{
                presets: ['es2015', 'react']
            }
        }
      ]
    }
};
