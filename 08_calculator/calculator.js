const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arr) {
  if (arr.length == 0) return 0;
  return arr.reduce((total, curr) => total + curr, 0)
};

const multiply = function (arr) {
  if (arr.length == 0) return 0;
  return arr.reduce((total, curr) => total * curr, 1)
};

const power = function (a, b) {
  return a ** b;
};

const factorial = function (n) {
  if (n == 0) return 1;
  let prod = 1;
  for (let i = 1; i <= n; i++) {
    prod *= i;
  }
  return prod;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
