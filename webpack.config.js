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
        loaders: [{
            test: /\.scss$/,
            loaders: ["style", "css", "sass"]
        }]
    }
};
