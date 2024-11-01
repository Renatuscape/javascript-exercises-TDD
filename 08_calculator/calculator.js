const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (array) {
  let sum = 0;
  array.forEach((number) => { sum += number });
  
  return sum;
};

const multiply = function (array) {
  let sum = array[0];

  for (i = 1; i < array.length; i++) {
    sum = sum * array[i];
  }

  return sum;
};

const power = function (num, power) {
  return Math.pow(num, power);
};

const factorial = function (num) {
  if (num === 0) {
    return 1;
  }

  let sum = 1;
  for (i = 2; i <= num; i++) {
    sum *= i;
  }

  return sum;
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
