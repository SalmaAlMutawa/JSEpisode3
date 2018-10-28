/*************************************
 * logger(array)
 *
 * - Accepts an array
 * - Logs every element of the array
 ************************************/
const logger = array => {
  array.forEach(function(element) {
    console.log(element);
  });
};
// Your code here

/*************************************
 * toCelsius(temperatures)
 *
 * - Accepts an array of temperatures
 *   in degrees Fahrenheit
 * - Returns an array of temperatures
 *   in degrees Celsius
 *
 * The conversion is:
 *   C = (F - 32) * (5/9)
 ************************************/
const toCelsius = temperatures =>
  temperatures.map(temp => {
    temp = (temp - 32) * (5 / 9);
    return temp;
  });
// Your code here

/**************************************
 * hottestDays(temperatures, threshhold)
 *
 * - Accepts an array of temperatures
 * - Accepts a threshhold temperature
 * - Returns an array of temperatures
 *   that exceed the threshhold
 ***************************************/
const hottestDays = (temperatures, threshhold) =>
  temperatures.filter(temp => temp > threshhold);

/******************************************
 * logHottestDays(temperatures, threshhold)
 *
 * - Accepts an array of temperatures
 *   IN DEGREES FAHRENHEINT
 * - Accepts a threshhold temperature
 *   IN DEGREES FAHRENHEINT
 * - Logs temperatures that exceed the
 *   threshhold to the console
 *   IN DEGREES CELSIUS
 *
 * hint: you can combine
 *       all previous functions
 *******************************************/
const logHottestDays = (temperatures, threshhold) => {
  hotLog = toCelsius(hottestDays(temperatures, threshhold));
  logger(hotLog);
};

export { logger, toCelsius, hottestDays, logHottestDays };
