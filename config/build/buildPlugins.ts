import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import { BuildOptions } from './types/config';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import CopyPlugin from 'copy-webpack-plugin';
import CircularDependencyPlugin from 'circular-dependency-plugin';

export function buildPlugins(options: BuildOptions): webpack.WebpackPluginInstance[] {
  const plugins = [
    new HtmlWebpackPlugin({
      template: options.paths.html,
    }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css',
    }),
    new webpack.DefinePlugin({
      __IS_DEV__: JSON.stringify(options.isDev),
      __API__: JSON.stringify(options.apiUrl),
      __PROJECT__: JSON.stringify(options.project),
    }),
    new webpack.HotModuleReplacementPlugin(),
    new ReactRefreshWebpackPlugin(),
    new CopyPlugin({
      patterns: [{ from: options.paths.locales, to: options.paths.buildLocales }],
    }),
    new CircularDependencyPlugin({
      exclude: /node_modules/,
      failOnError: true,
    }),
  ];

  if (options.isDev) {
    plugins.push(new ReactRefreshWebpackPlugin());
    plugins.push(new webpack.HotModuleReplacementPlugin());
    plugins.push(
      new BundleAnalyzerPlugin({
        openAnalyzer: false,
      })
    );
  }

  return plugins;
}
