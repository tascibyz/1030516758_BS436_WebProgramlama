const path = require("path");

module.exports = {

    entry: './src/index.js',
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname,'public'),
        libraryTarget: "var",
        library: "Game"
    },
    devServer: {
        contentBase: './public',
        injectClient: false
    },
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                extractComments: false
            })
        ]
    }
}