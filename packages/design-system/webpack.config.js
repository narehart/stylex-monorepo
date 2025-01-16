const path = require('path');
const webpack = require('webpack');
const StylexPlugin = require('@stylexjs/webpack-plugin');

const config = (env, argv) => ({
  entry: {
    index: './src/index.ts',
    // Tokens that are meant to be used in in stylex.create() calls must come from a file with the .stylex extension.
    'tokens.stylex': './src/tokens.stylex.ts',
  },
  mode: 'production',
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: '/',
    library: {
      type: 'umd',
      name: ['designSystem', '[name]'],
    },
    globalObject: 'this',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  externals: {
    // Consumers of the design-system component library will need to setup React in their own application.
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'React',
      root: 'React',
    },
    // Consumers of the design-system library will need to setup StyleX in their own application.
    '@stylexjs/stylex': {
      commonjs: '@stylexjs/stylex',
      commonjs2: '@stylexjs/stylex',
      amd: 'stylex',
      root: 'stylex',
    },
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: [
          // babel-loader is used for transpiling the code.
          {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
                '@babel/preset-typescript',
                ['@babel/preset-react', { runtime: 'automatic' }],
              ],
            },
          },
          // ts-loader performs type checking, ensuring that the TypeScript code adheres to the type definitions and constraints specified in the tsconfig.json file.
          {
            loader: 'ts-loader',
            options: {
              configFile: path.resolve(__dirname, 'tsconfig.json'),
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new StylexPlugin({
      filename: 'styles.[contenthash].css',
      // Get webpack mode and set value for dev.
      dev: argv.mode === 'development',
      // Enable runtime injection for development so we can see changes to our styles.
      // Note: it should be possible to use statically generated CSS files even in development mode and get hot reloading of styles.
      runtimeInjection: argv.mode === 'development',
      // Use a unique prefix for generated class names so we can identify them in the DOM.
      classNamePrefix: 'ds-',
      // Required for CSS variable support
      unstable_moduleResolution: {
        // type: 'commonJS' | 'haste'
        // default: 'commonJS'
        type: 'commonJS',
        // The absolute path to the root directory of the project.
        rootDir: path.resolve(__dirname, '../..'),
      },
    }),
  ],
});

module.exports = config;
