const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const config = {
  entry: path.resolve(__dirname, 'src/index.js'),
  devtool: 'source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src/index.html')
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.s?css$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  [
                    'postcss-preset-env',
                    {
                      /* options */
                    }
                  ]
                ]
              }
            }
          },
          'sass-loader'
        ]
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'svg-inline-loader'
          }
        ]
      }
    ]
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        test: /\.js(\?.*)?$/i,
        extractComments: false,
        terserOptions: {
          format: {
            comments: false
          }
        }
      })
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'build')
  }
};

module.exports = config;
