var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: {
        app: './src/app.ts'
    },
    output: {
        filename: 'bundle.js'
    },
    devtool: 'source-map',
    resolve: {
        root: [path.join(__dirname, 'node_modules')],
        extensions:['', '.js', '.ts', '.tsx']
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin()
    ],
    module: {
        loaders: [
            { test: /\.tsx?$/, loader: 'ts-loader' }
        ]
    }
}
