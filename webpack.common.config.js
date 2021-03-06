/*
 * @Author: chentian
 * @Date: 2019-02-21 15:54:53
 * -----
 * @Modified By: chentian
 * @Last Modified: 2019-02-21 15:54:53
 */
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const webpack = require('webpack');
const path = require('path');
const pkg = require('./package.json');
const buildConfig = require('./buildConfig');

const ENV = process.env.NODE_ENV || 'development';
const BUILD_DOMAIN = process.env.BUILD_DOMAIN || 'localhost';
const ASSET_PATH = process.env.ASSET_PATH || '/';
const VERSION = `v${pkg.version}`;

const SOURCE_DIR = path.resolve(__dirname, 'src');
const OUTPUT_DIR = path.resolve(__dirname, 'build');
const CLIENT_DIR = path.join(OUTPUT_DIR, VERSION);

const config = buildConfig[BUILD_DOMAIN];
const localeMessages = require('./src/i18n/locale.json');

module.exports = {
    mode: ENV,
    target: 'web',
    context: SOURCE_DIR,
    entry: {
        client: './index.js'
    },
    output: {
        path: CLIENT_DIR,
        publicPath: ASSET_PATH,
        filename: 'assets/script/[name].[hash:8].js',
        libraryTarget: 'umd'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.css', '.less']
    },
    module: {
        rules: [
            {
                test: /\.(jsx|js)$/,
                exclude: /node_modules/,
                use: ['babel-loader', 'eslint-loader']
            },
            {
                test: /\.(woff2?|ttf|eot|otf)(\?.*)?$/i,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[hash:8].[ext]',
                        outputPath: 'assets/fonts/'
                    }
                }
            },
            {
                test: /\.(svg|jpe?g|png|gif)(\?.*)?$/i,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 8192,
                        fallback: 'file-loader',
                        name: '[name].[hash:8].[ext]',
                        outputPath: 'assets/images/'
                    }
                }
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(ENV),
            'process.env.ASSET_PATH': JSON.stringify(ASSET_PATH),
            'process.env.BUILD_CONFIG': JSON.stringify(config),
            'process.env.BUILD_LOCALE_MESSAGES': JSON.stringify(localeMessages)
        }),
        new CopyWebpackPlugin([{ from: 'favicon.ico' }]),
        new HtmlWebpackPlugin({
            title: 'React App Pro',
            filename: './index.html',
            template: './index.ejs'
        })
    ]
};
