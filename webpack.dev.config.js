/*
 * @Author: chentian
 * @Date: 2019-02-21 15:54:19
 * -----
 * @Modified By: chentian
 * @Last Modified: 2019-02-21 15:54:20
 */

const merge = require('webpack-merge');
const autoprefixer = require('autoprefixer');
const path = require('path');
const webpackConfig = require('./webpack.common.config');
const SOURCE_DIR = path.resolve(__dirname, 'src');

module.exports = merge(webpackConfig, {
    module: {
        rules: [
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'style-loader',
                        options: { singleton: true }
                    },
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
                    {
                        loader: 'style-loader',
                        options: { singleton: true }
                    },
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
                    {
                        loader: 'style-loader',
                        options: { singleton: true }
                    },
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
    devtool: 'source-map',
    devServer: {
        port: process.env.PORT || 8080,
        host: 'localhost',
        publicPath: '/',
        compress: true,
        contentBase: SOURCE_DIR,
        historyApiFallback: true,
        proxy: {
            '/pp/*': {
                target: 'http://fmvhcf.natappfree.cc/cc',
                changeOrigin: true
            }
        }
    }
});
