module.exports = function (lineProcessor) {

  var app = require('./app')(lineProcessor);
  app.set('port', process.env.PORT || 8080);

  function start() {
    var server = app.listen(app.get('port'), function () {
      console.log('BP server is listening on port ' + server.address().port);
    });
  }

  return {
    start: start
  };

};