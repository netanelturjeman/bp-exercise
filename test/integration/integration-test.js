var sinon = require("sinon"),
  chai = require("chai"),
  sinonChai = require("sinon-chai"),
  expect = chai.expect;

chai.use(sinonChai);

var request = require('request'),
  childProcess = require('child_process');

describe('when consuming a line', function () {

  this.timeout(5000);

  it('we should be able to get its stats via a HTTP request', function (done) {

    var line = JSON.stringify({"event_type": "foo", "data": "dolor", "timestamp": 1460634103});

    var mainProcess = childProcess.spawn('node', ['./main.js']);

    var generatorProcess = childProcess.spawn('echo', [line]);
    generatorProcess.on('close', function () {

      setTimeout(function () {
        request('http://localhost:8080/api/stats', function (error, response, body) {
          if (!error && response.statusCode == 200) {
            var totals = JSON.parse(body);
            expect(totals).to.deep.equal({
              foo: {
                events: 1,
                words: 1
              }
            });
            done();
          } else {
            done(error);
          }
        });
      }, 1000);
    });

    generatorProcess.stdout.on('data', function (data) {
      mainProcess.stdin.write(data);
    });
  });

});
