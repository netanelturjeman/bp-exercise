var lineProcessor = require('./lib/line-processor'),
  consumer = require('./lib/consumer')(lineProcessor),
  server = require('./lib/server')(lineProcessor);

consumer.start();
server.start();