const convertToCelsius = function (farenheitIn) {
  return Math.round(((farenheitIn - 32) / 1.8) * 10) / 10;
};

const convertToFahrenheit = function (celciusIn) {
  return Math.round(((celciusIn * 1.8) + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
