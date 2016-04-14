var split = require('split');

module.exports = function (lineProcessor) {

  function start() {
    process.stdin.pipe(split()).on('data', lineProcessor.processLine);
  }

  return {
    start: start
  };

};