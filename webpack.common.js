const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            // css loader
            {
                test: /\.css$/,
                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader"
                }]
            }
        ]
    },
    plugins: [
        // html webpack plugin
        new HTMLWebpackPlugin({
            template: "./src/template.html",
            filename: "index.html"
        })
    ]
}