var express = require('express'),
  expressApp = express();

expressApp.get('/', function (req, res) {
  res.send('Hello! The API is at /api');
});

module.exports = function (lineProcessor) {
  var stats = require('./../routes/stats')(lineProcessor);
  expressApp.use('/api', stats);
  return expressApp;
};