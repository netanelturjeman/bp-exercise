var totals = {};

function groupStatsByEventType(event) {
  var eventType = event.event_type;
  if (eventType) {
    totals[eventType] = totals[eventType] || {};
    totals[eventType].events = totals[eventType].events ? (totals[eventType].events + 1) : 1;
    if (event.data) {
      totals[eventType].words = totals[eventType].words ? (totals[eventType].words + 1) : 1;
    }
  }
}

function processLine(line) {
  try {
    var event = JSON.parse(line);
    if (event) {
      groupStatsByEventType(event);
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