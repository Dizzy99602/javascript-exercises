const palindromes = function (str) {
  const alphaNumArr = toAlphaNumericArr(str).toLowerCase();

  let l = 0;
  let r = alphaNumArr.length - 1;
  while (l < r) {
    if (alphaNumArr[l] != alphaNumArr[r]) {
      return false;
    }
    l++;
    r--;
  }
  return true;
};

function toAlphaNumericArr(str) {
  return str.split('').filter(char => /[a-zA-Z0-9]/.test(char)).join('');
}

// Do not edit below this line
module.exports = palindromes;
