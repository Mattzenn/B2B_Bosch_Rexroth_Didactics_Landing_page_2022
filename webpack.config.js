const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './pages/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, './dist'),
        publicPath: '',
    },
    module: {
        rules: [{
                test: /\.js$/,
                use: 'babel-loader',
                exclude: '/node_modules/'
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif|woff(2)?|eot|ttf|otf)$/,
                type: 'asset/resource',
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1
                        }
                    },
                    'postcss-loader'
                ]
            },
        ],
    },
    mode: 'development',
    devServer: {
        contentBase: path.join(__dirname, './dist'),
        compress: true,
        port: 8080
    },
    plugins: [
        new HtmlWebpackPlugin({ template: './src/index.html' }),
        new MiniCssExtractPlugin(),
    ]
};