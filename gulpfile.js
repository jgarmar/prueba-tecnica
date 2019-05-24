var webpackConfig = require('./webpack.config.js');
var gulp = require('gulp');
var WebpackDevServer = require('webpack-dev-server');
var webpack = require('webpack');
gulp.task('webpack-dev-server', function(callback) {
  var webpackDevCfg = Object.create(webpackConfig);
  webpackDevCfg.devtool = 'eval';
  webpackDevCfg.mode = 'development';

  new WebpackDevServer(webpack(webpackDevCfg)).listen(
    3000,
    'localhost',
    function(err) {
     
    },
  );
});
