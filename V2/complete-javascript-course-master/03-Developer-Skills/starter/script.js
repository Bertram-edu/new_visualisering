// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// PROBLEM:
// we work for a company building a smart home thermometer our most recent task is this: "given an array of temperature of one day calculate the temperature amplitude keep in mind that sometimes there might be a sensor error"

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
// 1) understanding the problem
// - what is temp amplitude? answer: difference between highest and lowest temp
// - how to compute max and min temperatures?
// - what's a sensor error? and what to do?

// 2) breaking up into sub-problems
// - how to ignore errors?
// - find max value in temp array
// - find min value in temp array
// - subtract min from max and return it

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);
