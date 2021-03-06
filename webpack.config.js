var webpack = require('webpack');

module.exports = {
  entry: [
    'script!jquery/dist/jquery.min.js',
    'script!foundation-sites/dist/foundation.min.js',
    './app/app.jsx'],
  externals: {
    jquery: 'jQuery'
  },
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
    })
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    alias: {
      Main: 'app/components/main.jsx',
      Navigation: 'app/components/navigation.jsx',
      applicationStyles: 'app/styles/app.scss',
      Timer: 'app/components/timer.jsx',
      Countdown: 'app/components/countdown.jsx',
      Clock: 'app/components/clock.jsx',
      CountdownForm: 'app/components/countdownForm.jsx',
      Controls: 'app/components/controls.jsx'
    },
    extensions: [
      '', '.js', '.jsx'
    ]
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
  devtool: 'inline-source-map'
};
