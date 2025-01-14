import type { StorybookConfig } from '@storybook/react-webpack5';

import { join, dirname } from 'path';
import customWebpackConfig from '../webpack.config.js';

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, 'package.json')));
}

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    getAbsolutePath('@storybook/addon-actions'),
    getAbsolutePath('@storybook/addon-essentials'),
    getAbsolutePath('@storybook/addon-interactions'),
    getAbsolutePath('@storybook/addon-links'),
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: { fastRefresh: true },
  },
  webpackFinal: async (config, { configType }) => {
    const customConfig = customWebpackConfig(config, { configType });

    // Merge custom webpack configuration with Storybook's default configuration
    return {
      ...config,
      module: {
        ...config.module,
        rules: customConfig.module.rules,
      },
      resolve: {
        ...config.resolve,
        alias: {
          ...config?.resolve?.alias,
          ...customConfig.resolve.alias,
        },
        extensions: [
          ...(config?.resolve?.extensions ?? []),
          ...customConfig.resolve.extensions,
        ],
      },
      plugins: [
        ...(config.plugins ?? []).filter(Boolean),
        ...(customConfig.plugins ?? []).filter(Boolean),
      ],
    };
  },
  previewHead: head => {
    return `
      ${head}
      <link rel="stylesheet" type="text/css" href="/styles.css">
    `;
  },
};

export default config;
