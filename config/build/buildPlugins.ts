import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ReactRefreshPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import { BuildOptions } from './types/config';

export function buildPlugins(
    { paths, isDev, apiUrl }: BuildOptions,
): webpack.WebpackPluginInstance[] {
    const plugins = [
        new webpack.ProgressPlugin(),
        new HtmlWebpackPlugin({
            template: paths.html,
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash].css',
            chunkFilename: 'css/[name].[contenthash].css',
        }),
        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev),
            __API__: JSON.stringify(apiUrl),
        }),
    ];

    if (isDev) {
        plugins.push(new ReactRefreshPlugin());
        plugins.push(new BundleAnalyzerPlugin({
            openAnalyzer: false,
        }));
        plugins.push(new webpack.HotModuleReplacementPlugin());
    }

    return plugins;
}
