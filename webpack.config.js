var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'res/build');
var APP_DIR = path.resolve(__dirname, 'res/js');

var config = {
    entry: APP_DIR + '/global.js',
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
    },
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.jsx?/,
                include: APP_DIR,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'es2017']
                }
            }
        ]
    }
};

module.exports = config;
