var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack');
var path = require('path');

var config = {
  devtool: 'cheap-module-eval-source-map',
  entry: {
    app: path.resolve('examples/components/index.js')
  },
  output: {
    path: path.resolve('examples/build'),
    filename: '[name].js',
    publicPath: 'examples/build'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style', 'css?sourceMap!sass')
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('style.css', {
      allChunks: true
    })
  ],
  devServer: {
    colors: true,
    contentBase: path.resolve(__dirname + '/../'),
    historyApiFallback: true,
    hot: true,
    inline: true,
    port: 8000,
    progress: true,
    stats: {
      cached: false
    }
  },
}

if (process.env.NODE_ENV === 'production') {
  config.devtool = 'source-map';
  config.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compress: {warnings: true},
      output: {comments: false},
      mangle: {
        except: ['Dots', 'Levels', 'Sentry', 'Bounce', 'Digital', 'Spinner', 'Squares', 'Windmill']
      }
    })
  );
}

module.exports = config;
