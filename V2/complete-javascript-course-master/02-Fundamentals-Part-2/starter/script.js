"use strict";
/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive? ¯/_(ツ)_/¯");

// const interface = "audio";
// const private = 534;
*/
/*
function logger() {
    console.log("My name is Jonas");
}

// calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number("23");
*/
/*
// function declaration
function calcAge1(birthYear) {
    return 2037 - birthYear;
}

const age1 = calcAge1(1991);

// function expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}
const age2 = calcAge2(1991);

console.log(age1, age2):
*/
/*
// function expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}

// arrow function
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstname) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    // return retirement
    return `${firstname} retires in ${retirement} years`
}
console.log(yearsUntilRetirement(1991, "Jonas"));
console.log(yearsUntilRetirement(1980, "Bob"));
*/
/*
function curFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = curFruitPieces(apples);
    const orangesPieces = curFruitPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apple and ${orangesPieces} pieces of orange.`;
    return juice
}
console.log(fruitProcessor(2, 3));
*/

const calcAge = function (birthYear) {
    return 2037 - birthYear;
}


const yearsUntilRetirement = function (birthYear, firstname) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstname} retires in ${retirement} years`)
        return retirement
    } else {
        console.log(`${firstname} has alrady retired 🎉`);
        return -1;
    }


}

console.log(yearsUntilRetirement(1991, "Jonas"));
console.log(yearsUntilRetirement(1950, "Mike"));