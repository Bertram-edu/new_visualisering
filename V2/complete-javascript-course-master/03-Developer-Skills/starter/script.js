// Remember, we're gonna use strict mode in all scripts now!
'use strict';

/*
// PROBLEM 1:
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

// PROBLEM 2:
// function should now receive 2 arrays of temps

// 1) understanding the problem
// - with 2 arrays should we impletment functionality twice NO! just merge two arrays

// 2) breaking up into subproblems
// - merge 2 arrays

const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);

const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2)
  console.log(temps);

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
const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
console.log(amplitudeNew);
*/
/*
const mesureKelvin = function () {
  const measurement = {
    type: "temp",
    unit: "celsius",

    // C) FIX
    // value: Number(prompt("Degrees celsius"))
    value: 10,
  }

  // B) FIND
  console.table(measurement)

  // console.log(measurement.value);
  // console.warn(measurement.value);
  // console.error(measurement.value);

  const kelvin = measurement.value + 273
  return kelvin;
}
// A) IDENTIFY
console.log(mesureKelvin())


const calcTempAmplitudeBug = function (t1, t2) {
  const temps = t1.concat(t2)
  console.log(temps);

  let max = 0;  // temps[0];
  let min = 0;  // temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);
// A) IDENTIFY
console.log(amplitudeBug);
*/


/////////////////////////////
// Coding Challenge #1

/*
Given an array of forecased maximum temperatures, the therometer displays a string with there temperature.

Example: [17, 21, 23] will print "... 17°C in 1 days ... 21°C in 2 days ... 23°C in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console

Use the problem-sovling framework: Understand the problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/
/*
// my version
function printForecast(arr) {
  let final_string;
  for (let i = 0; i < arr.length; i++) {
    //console.log(`... ${arr[i]}°C in ${i + 1} days `);
    if (final_string) {
      final_string = final_string + `${arr[i]}°C in ${i + 1} days ... `
    } else {
      final_string = `... ${arr[i]}°C in ${i + 1} days `
    }
  }
  console.log(final_string)
}

const TEST_DATA_1 = [17, 21, 23]
const TEST_DATA_2 = [12, 5, -5, 0, 4]

printForecast(TEST_DATA_2);

*/
/*
// his version

// 1) Understanding the problem
// - Array transformed to string, seperated by ...
// - What is the x days? Answer: index + 1

// 2) Breaking up into sub-problems
// - Transform array into string
// - Transfrom each element to string with °C
// - String needs to contain day (index + 1)
// - Add ... between elemtns and start and end of string
// - Log string to console

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];



const printForecast = function (arr) {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]}°C in ${i + 1} days ... `
  }
  console.log("... " + str)
};
printForecast(data1);

// 2+3=5+4=9
// [2,3,4]
*/