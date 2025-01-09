const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/App.tsx',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    clean: true
  },
  devtool: 'source-map',
  devServer: {
    static: {
      directory: path.join(__dirname, 'public')
    },
    port: 3000,
    hot: true,
    historyApiFallback: true
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
                '@babel/preset-typescript',
                ['@babel/preset-react', { runtime: 'automatic' }]
              ],
              plugins: [
                [
                  '@stylexjs/babel-plugin',
                  {
                    dev: true,
                    genConditionalClasses: true,
                    treeshakeCompensation: true,
                    unstable_moduleResolution: {
                      type: 'commonJS',
                      rootDir: path.resolve(__dirname, '../..')
                    }
                  }
                ]
              ]
            }
          },
          {
            loader: 'ts-loader'
          }
        ]
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css'
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ],
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  }
};