var sinon = require("sinon"),
  chai = require("chai"),
  sinonChai = require("sinon-chai"),
  expect = chai.expect;

chai.use(sinonChai);

var lineProcessor = require('../../lib/line-processor');

describe('when processing lines', function () {

  var goodLine = JSON.stringify({"event_type": "baz", "data": "dolor", "timestamp": 1460634101}),
    lineWithoutData = JSON.stringify({"event_type": "baz", "timestamp": 1460634101}),
    badLine = 'blah';

  it('total events/words should be initialized to empty object', function () {
    var totals = lineProcessor.getTotals();
    expect(totals).to.deep.equal({});
  });

  it('total events/words should be incremented upon successful event processing', function () {
    lineProcessor.processLine(goodLine);
    lineProcessor.processLine(lineWithoutData);
    var totals = lineProcessor.getTotals();
    expect(totals).to.deep.equal({
      baz: {
        events: 2,
        words: 1
      }
    });
  });

  it('bad lines should be ignored', function () {
    lineProcessor.processLine(badLine);
    var totals = lineProcessor.getTotals();
    expect(totals).to.deep.equal({
      baz: {
        events: 2,
        words: 1
      }
    });
  });

});
