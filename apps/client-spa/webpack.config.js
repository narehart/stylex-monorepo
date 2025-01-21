const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const StylexPlugin = require('@stylexjs/webpack-plugin');

const config = (env, argv) => ({
  entry: './src/index.tsx',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    clean: true,
  },
  devtool: 'source-map',
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    port: 3000,
    hot: true,
    historyApiFallback: true,
    open: true,
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|ts|tsx)$/,
        exclude: {
          and: [/node_modules/],
          // The design system is an ES module, so we need to include it in transpilation.
          not: [/@monorepo\/design-system/],
        },
        use: [
          // babel-loader is used for transpiling the code.
          {
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  '@babel/preset-env',
                  {
                    modules: false,
                    targets: { esmodules: true },
                  },
                ],
                '@babel/preset-typescript',
                ['@babel/preset-react', { runtime: 'automatic' }],
              ],
              plugins: ['@babel/plugin-transform-runtime'],
            },
          },
        ],
        type: 'javascript/auto',
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
      classNamePrefix: 'web-',
      // Required for CSS variable support
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'public', 'index.html'),
      inject: true,
    }),
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
});

module.exports = config;
