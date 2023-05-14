const path = require('path')


module.exports = {
    entry: './src/web/index.js',
    output: {
      path: __dirname + '/public/js',
      publicPath: '/',
      filename: 'bundle.js'
    },
    devServer: {
      contentBase: './dist',
    },
    module: {
      rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.(css)$/,
        use: ['css-loader','style-loader','sass-loader']
      }
      ]
    },
    devtool: 'eval-cheap-module-source-map',
    devServer :{
        contentBase: path.join(__dirname, 'public')
    }
  };