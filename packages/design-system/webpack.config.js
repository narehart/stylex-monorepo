const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    index: './src/index.ts',
    // Tokens that are meant to be used in in stylex.create() calls must come from a file with the .stylex extension
    'tokens.stylex': './src/tokens.stylex.ts',
  },
  mode: 'production',
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
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
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'React',
      root: 'React',
    },
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
          {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
                '@babel/preset-typescript',
                ['@babel/preset-react', { runtime: 'automatic' }],
              ],
              plugins: [
                [
                  '@stylexjs/babel-plugin',
                  {
                    dev: false,
                    genConditionalClasses: true,
                    treeshakeCompensation: true,
                    unstable_moduleResolution: {
                      type: 'commonJS',
                      rootDir: path.resolve(__dirname, '../..'),
                    },
                  },
                ],
              ],
            },
          },
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
};
