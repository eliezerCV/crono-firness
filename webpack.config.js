const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: "./src/app.js",
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000,
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {test: /\.html$/, loader: "html-loader"},
            {test: /\.css$/, use: ["style-loader", "css-loader"]}
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        template: path.join(__dirname, 'src/index.html')
    })]
}