const sumAll = function (start, end) {
  if (isNaN(start) || !Number.isInteger(start) || start < 0) return "ERROR";
  if (isNaN(end) || !Number.isInteger(end) || end < 0) return "ERROR";

  let sum = 0;
  if (start < end) {
    for (let i = start; i <= end; i++) {
      sum += i;
    }
  }
  else {
    for (let i = start; i >= end; i--) {
      sum += i;
    }
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
