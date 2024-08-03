const fibonacci = function (n) {

  let c = 0;
  let a = 0;
  let b = 1;

  if (n < 0) return "OOPS";

  if (n == 0) return 0;

  for (let i = 2; i <= n; i++) {

    c = a + b;
    a = b;
    b = c;
  }
  return b;
};

// Do not edit below this line
module.exports = fibonacci;
