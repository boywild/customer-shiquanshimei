/*
 * @Author: chentian
 * @Date: 2019-02-21 15:54:39
 * -----
 * @Modified By: chentian
 * @Last Modified: 2019-02-21 15:54:40
 */
const merge = require('webpack-merge');
const autoprefixer = require('autoprefixer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const cleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');
const webpackConfig = require('./webpack.common.config');
const SOURCE_DIR = path.resolve(__dirname, 'src');

module.exports = merge(webpackConfig, {
    performance: {
        hints: 'warning',
        maxAssetSize: 512000
    },
    optimization: {
        runtimeChunk: 'single',
        splitChunks: {
            cacheGroups: {
                vendors: {
                    test: /react|react-dom|react-router-dom|react-router-config|prop-types|classnames/,
                    chunks: 'initial',
                    name:'vendors',
                    enforce: true
                },
                redux: {
                    test: /redux|react-redux|redux-thunk/,
                    chunks: 'initial',
                    name:'redux',
                    enforce: true
                },
                jquery: {
                    test: /jquery/,
                    chunks: 'initial',
                    name:'jquery',
                    enforce: true
                },
                antd: {
                    test: /antd/,
                    chunks: 'initial',
                    name:'antd',
                    enforce: true
                },
                utils: {
                    test: /axios|path-to-regexp|history|js-cookie|lodash|moment|react-loadable/,
                    chunks: 'initial',
                    name:'utils',
                    enforce: true
                }
            }
        }
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: () => [autoprefixer({ browsers: 'last 5 versions' })],
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            includePaths: [SOURCE_DIR]
                        }
                    }
                ]
            },
            {
                test: /\.less$/,
                include: /node_modules/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: () => [autoprefixer({ browsers: 'last 5 versions' })],
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'less-loader',
                        options: {
                            javascriptEnabled: true
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                include: /node_modules/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: () => [autoprefixer({ browsers: 'last 5 versions' })],
                            sourceMap: true
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new cleanWebpackPlugin(['build']),
        new MiniCssExtractPlugin({
            filename: 'assets/style/style.[hash:8].css',
            chunkFilename: 'assets/style/[id].[hash:8].css'
        })
    ],
    devtool: 'eval-source-map'
});
