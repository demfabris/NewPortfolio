const globImporter = require('node-sass-glob-importer')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: {
    app: path.resolve(__dirname, 'src', 'index.tsx'),
  },
  output: {
    path: path.resolve('build'),
    filename: '[name].bundle.js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      components: path.resolve(__dirname, 'src/components'),
      content: path.resolve(__dirname, 'src/content'),
      assets: path.resolve(__dirname, 'src/assets'),
    },
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './build',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: path.resolve(__dirname, 'node_modules'),
        include: path.resolve(__dirname, 'src'),
        use: [
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
            },
          },
        ],
      },
      {
        test: /\.js$/,
        use: ['source-map-loader'],
        enforce: 'pre',
      },
      {
        test: /\.s?(css|ass)$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              sassOptions: {
                importer: globImporter(),
              },
            },
          },
        ],
      },
      {
        test: /\.(ttf|svg|png)$/,
        use: ['file-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Fabricio7p',
      template: path.resolve(__dirname, 'public/index.html'),
      filename: path.resolve(__dirname, 'build/index.html'),
    }),
  ],
}
