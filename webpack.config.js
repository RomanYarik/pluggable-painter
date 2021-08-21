// @ts-check
const { StylableWebpackPlugin } = require('@stylable/webpack-plugin');

/** @type import('webpack').Configuration */
module.exports = {
  devtool: 'source-map',
  context: __dirname,
  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: 'pre',
        loader: 'source-map-loader',
      },
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          projectReferences: true,
          configFile: require.resolve('./tsconfig.json'),
          compilerOptions: {
            // build still catches these. avoid them during bunding time for a nicer dev experience.
            noUnusedLocals: false,
            noUnusedParameters: false,
          },
        },
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        type: 'asset',
      },
      {
        test: /\.css$/,
        exclude: /\.st\.css$/,
        use: ['style-loader', 'css-loader'],
    },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },
  plugins: [
    new StylableWebpackPlugin({extractMode: 'entries', filename: '[name].css'})
  ],
};
