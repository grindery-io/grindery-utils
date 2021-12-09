const path = require('path'),
  { CleanWebpackPlugin } = require('clean-webpack-plugin');

const config = {
  target: 'node',
  mode: 'production',
  entry: {
    index: './src/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    library: {
      type: 'commonjs2',
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  '@babel/preset-env',
                  {
                    targets: {
                      'node': 'current'
                    }
                  }
                ],
              ],
            }
          }
        ],
      },
    ]
  },
  resolve: {
    extensions: [
      '.js',
      '.json'
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
  ]
};

module.exports = config;