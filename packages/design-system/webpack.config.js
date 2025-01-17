import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const config = (env, argv) => ({
  mode: 'production',
  entry: {
    index: './src/index.ts',
    // Tokens that are meant to be used in in stylex.create() calls must come from a file with the .stylex extension.
    'tokens.stylex': './src/tokens.stylex.ts',
  },
  target: ['web', 'es2020'],
  output: {
    module: true,
    library: { type: 'module' },
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].mjs',
    clean: true,
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  experiments: {
    outputModule: true,
  },
  externals: {
    react: 'react',
    // Consumers of the design-system library will need to setup StyleX in their own application.
    '@stylexjs/stylex': '@stylexjs/stylex',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
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
  optimization: {
    minimize: false,
  },
});

export default config;
