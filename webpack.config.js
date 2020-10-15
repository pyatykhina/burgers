const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    mode: 'development',
    output: {
        filename: 'main.js'
    },
    plugins: [
        new UglifyJSPlugin({
            sourceMap: true
        })
    ]
};
