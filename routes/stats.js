var express = require('express'),
  router = express.Router();

module.exports = function (lineProcessor) {

  router.route('/stats').get(function (req, res) {
    var totals = lineProcessor.getTotals();
    res.json(totals);
  });

  return router;
};
