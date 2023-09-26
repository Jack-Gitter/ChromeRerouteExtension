const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: {
  'app': './src/index.tsx',
  'service-worker': "./src/background.ts",
  },
  output: {
    path: path.join(__dirname, '/dist'),
    filename: '[name].js'
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: './public/index.html'
    })
  ],
  module: {
    rules: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react']
                }
            }
        },
        {
            test: /\.(ts|tsx)$/,
            exclude: /node_modules/,
            use: ['ts-loader']
        },
        {
            test: /\.css$/i,
            exclude: /node_modules/,
            use:  ['style-loader', 'css-loader']
                
            
        }
    ]
  },
  mode: 'production',
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js']
  }
};