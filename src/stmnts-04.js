/*
 * stmnts-04.js
 * Language: javascript
 * Test: tests/stmnts-04.test.js
 * Path: src/stmnts-04.js
 * Temperature Calculator
 */

/**
 * Converts a temperature in Fahrenheit to Celsius rounded to 2 decimal places
 * @param {number} fahrenheit - temperature in Fahrenheit
 * @returns {number} - temperature in Celsius
 */
function fahrenheitToCelsius(fahrenheit) {
  const celsiusCalc = ((fahrenheit - 32) * (5 / 9));
  const celsRound = celsiusCalc.toFixed(2);
  const celsFinal = Number(celsRound);
  return celsFinal;
}

/**
 * Converts a temperature in Celsius to Fahrenheit rounded to 2 decimal places
 * @param {number} celsius - temperature in Celsius
 * @returns {number} - temperature in Fahrenheit
 */
function celsiusToFahrenheit(celsius) {
  const fahrenheitCalc = (celsius * (9 / 5)) + 32;
  const fahrenheitRound = fahrenheitCalc.toFixed(2);
  const fahrenheitRoundSt = Number(fahrenheitRound);
  return fahrenheitRoundSt;
}

module.exports = {
  fahrenheitToCelsius,
  celsiusToFahrenheit,
};