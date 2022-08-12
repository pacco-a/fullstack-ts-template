const path = require("path");

module.exports = {
    devtool: "inline-source-map",
    mode: "development",
    entry: {
        index: "./src/index.ts",
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: "ts-loader",
                include: [path.resolve(__dirname, "src")],
            },
        ],
    },
    resolve: {
        extensions: [".ts", ".js"],
    },
    watch: true,
    output: {
        publicPath: "public",
        filename: "[name].js",
        path: path.resolve(__dirname, "..", "public", "js"),
    },
};