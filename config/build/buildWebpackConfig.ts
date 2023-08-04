import webpack from 'webpack';

import { buildDevServer } from './buildDevServer';
import { buildPlugins } from './buildPlugins';
import { buildResolvers } from './buildResolvers';
import { buildRules } from './buildRules';
import { BuildOptions } from './types/config';

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
  return {
    mode: options.mode,
    entry: options.paths.entry,
    output: {
      filename: '[name].[contenthash].js',
      path: options.paths.build,
      clean: true,
      publicPath: '/',
    },
    module: {
      rules: buildRules(options),
    },
    resolve: buildResolvers(options),
    plugins: buildPlugins(options),
    devtool: options.isDev ? 'eval-cheap-module-source-map' : undefined,
    devServer: options.isDev ? buildDevServer(options) : undefined,
  };
}
