var webpack = require('webpack');
var path = require('path');

// Shared config between server and app
//
// Resolve those path when using require() in modules.
var resolveOptions = {
  modulesDirectories: ['node_modules']
};


// Parse modules with those loaders.
var moduleOptions = {
  loaders: [
    { test: /\.js$/, loader: 'babel?optional[]=runtime&stage=0', exclude: /node_modules/ },
    { test: /\.json$/, loader: 'json' }
  ]
};

// Everything is put in this directory when every thing is transpiled and merged.
var outputDirectory = 'dist/';

// Configs
var serverConfig = {
  name: 'server',
  entry: './server.js',
  target: 'node',
  output: {
    path: __dirname,
    filename: path.join(outputDirectory, 'server.js')
  },
  resolve: resolveOptions,
  module: moduleOptions
};

module.exports = [serverConfig];
