var totals = {};

function processLine(line) {
  try {
    var event = JSON.parse(line);
    if (event && event.event_type) {
      totals[event.event_type] = totals[event.event_type] || {};
      totals[event.event_type].events = totals[event.event_type].events ? (totals[event.event_type].events + 1) : 1;
      if (event.data) {
        totals[event.event_type].words = totals[event.event_type].words ? (totals[event.event_type].words + 1) : 1;
      }
    }
  } catch (err) {
    console.log('Bad line:', line)
  }
}

function getTotals() {
  return totals;
}

module.exports = {
  processLine: processLine,
  getTotals: getTotals
};