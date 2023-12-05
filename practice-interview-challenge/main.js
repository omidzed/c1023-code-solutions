function getRangeReport(start, end) {
  const rangeReport = {
    average: average(start, end),
    evens: evens(start, end),
    odds: odds(start, end),
    range: range(start, end),
    total: total(start, end)
  };
  return rangeReport;
}

function total(start, end) {
  let total = start;
  while (start < end) {
    total += start + 1;
    start++;
  }
  return total;
}

function odds(start, end) {
  const odds = [];
  while (start <= end) {
    if (start % 2 === 1) {
      odds.push(start);
    }
    start++;
  }
  return odds;
}

function evens(start, end) {
  const evens = [];
  while (start <= end) {
    if (start % 2 === 0) {
      evens.push(start);
    }
    start++;
  }
  return evens;
}

function range(start, end) {
  const range = [];
  while (start <= end) {
    range.push(start);
    start++;
  }
  return range;
}

function average(start, end) {
  let count = 1;

  let total = start;
  while (start < end) {
    total += start + 1;
    start++;
    count++;
  }
  const average = total / count;
  return average;
}
