const reverseString = function (str) {
  // let revStr = "";
  // for (let i = str.length - 1; i >= 0; i--) {
  //   revStr += str.at(i);
  // }
  // return revStr;

  // let revStr = "";
  // let strArr = str.split("");
  // for (let i = strArr.length - 1; i >= 0; i--) {
  //   revStr += strArr[i];
  // }
  // return revStr;

  return str.split("").reverse().join("");
};

// Do not edit below this line
module.exports = reverseString;
