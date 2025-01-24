const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const CopyWebpackPlugin = require("copy-webpack-plugin")

module.exports = {
    target: "web",
    mode: "development",

    entry: path.resolve(__dirname, "src", "main.js"),
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist")
    },

    // Configurando o server
    devServer: {
        static: {
            directory: path.join(__dirname, "dist")
        },
        port: 3000,
        open: true,
        liveReload: true,
    },

    // Configurando o plugin do HTML
    plugins: [new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "index.html"),
        favicon: path.resolve("src", "assets", "scissors.svg")
    }),
    // Copiando todos os icones de assets
    new CopyWebpackPlugin({
        patterns: [
            {
                from: path.resolve(__dirname, "src", "assets"),
                to: path.resolve(__dirname, "dist", "src", "assets")
            }
        ],
    })
    ],

    // Configurando o Css
    module: {
        rules: [
            // Importando o css para o webpack
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            // Configurando o bundle
            {
                test: /\.js$/, 
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"],
                    }
                }
            }
        ]
    }
}