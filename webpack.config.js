module.exports = {
  entry: './src/index.js',
  output: {
    path: './dist',
    filename: 'react-activity.js',
    library: 'ReactActivity',
    libraryTarget: 'umd'
  },
  externals: [
    {
      react: {
        amd: 'react',
        commonjs: 'react',
        commonjs2: 'react',
        root: 'React'
      }
    },
    {
      'react-dom': {
        amd: 'react-dom',
        commonjs: 'react-dom',
        commonjs2: 'react-dom',
        root: 'ReactDOM'
      }
    }
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: [/(node_modules)/, /\.test\.js$/],
        loader: 'babel'
      }, {
        test: /\.scss$/,
        loader: 'raw'
      }
    ]
  }
}
