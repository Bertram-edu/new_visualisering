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
/*
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
*/
/*
// my version
const calcAverage = (score_1, score_2, score_3) => (score_1 + score_2 + score_3) / 3;

const scoreDolphins = calcAverage(44, 23, 71); // test data 1: [44, 23, 71] test data 2: [85, 54, 41]
const scoreKoalas = calcAverage(65, 54, 49); // test data 1: [65, 54, 49] test data 2: [23, 34, 27]

const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log(`No team wins...`);
    }
};

// console.log(scoreDolphins)

// console.log(scoreKoalas)

checkWinner(scoreDolphins, scoreKoalas)
*/
/*
// his version
const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(3, 4, 5));

// Test 1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`)
    } else {
        console.log(`No team win...`)
    }
}


checkWinner(scoreDolphins, scoreKoalas);

checkWinner(576, 111);

// Test 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);

checkWinner(scoreDolphins, scoreKoalas);
*/
/*
const friend1 = "Micheal";
const friend2 = "Steven";
const friend3 = "Peter";

const friends = ["Micheal", "Steven", "Peter"];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "jay"
console.log(friends);
// friends = ["Bob", "Alice"] // cannot do

const firstName = "Jonas"
const jonas = [firstName, "Schmedtmann", 2037 - 1991, "teacher", friends];
console.log(jonas);
console.log(jonas.length);

// Exercise
const calcAge = function (birthYear) {
    return 2037 - birthYear;
}
const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);
*/
/*
const friends = ["Micheal", "Steven", "Peter"];

// Add elements
const newLegth = friends.push("Jay");
console.log(friends);
console.log(newLegth);

friends.unshift("John");
console.log(friends);

// Remove elements
friends.pop(); // Last
const popped = friends.pop();
console.log(friends)
console.log(popped)

friends.shift(); // First
console.log(friends);

console.log(friends.indexOf("Steven"));
console.log(friends.indexOf("Bob"));

friends.push(23);
console.log(friends.includes("Steven"));
console.log(friends.includes("Bob"));
console.log(friends.includes(23));

if (friends.includes("Steven")) {
    console.log("you have a friend called Steven")
}
*/
/*
// my version
function calcTip(bill) {
    if (bill >= 50 && bill <= 300) {
        return bill * (15 / 100);
    } else {
        return bill * (20 / 100);
    }
}

const bills = [125, 555, 44];
const tips = []

tips.push(calcTip(bills[0]))
tips.push(calcTip(bills[1]))
tips.push(calcTip(bills[2]))

const totals = []

totals.push(bills[0] + tips[0]);
totals.push(bills[1] + tips[1]);
totals.push(bills[2] + tips[2]);

console.log(totals)
*/
/*
// his verison
const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]]

console.log(bills, tips, totals);
*/
/*
const jonasArray = [
    "Jonas",
    "Schmedtmann",
    2037 - 1991,
    "teacher",
    ["Micheal", "Peter", "Steven"],
];

const jonas = {
    firstName: "Jonas",
    lastName: "Schmedtmann",
    age: 2037 - 1991,
    job: "teacher",
    friends: ["Micheal", "Peter", "Steven"]
};
*/