/*
let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log(23);

let firstName = "Matilda";

console.log(firstName);
console.log(firstName);
console.log(firstName);

// Variable name conventions
let jonas_matilda = "JM";
let $function = 27;

let person = "jonas"
let PI = 3.1415;

let myFirstJob = "Coder";
let myCurrentJob = "Teacher";

let job1 = "programmer";
let job2 = "teacher";

console.log(myFirstJob)
true;
let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof "Jonas");

javascriptIsFun = "YES!";
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);


let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990;
// const job;

var job = "programmer"
job = "teacher";

lastName = "schmedtmann";
console.log(lastName);
*/
/*
// math operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = "Jonas";
const lastName = "Schmedtmann";
console.log(firstName + " " + lastName);

// Assignment operators
let x = 10 + 5;
x += 10; // x = x + 10 = 25
x *= 4 // x = x * 4 = 100
x++; // x = x + 1
x--; // x = x - 1
x--;
console.log(x);

// Comparison operators
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);
*/
/*
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y);
const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);
*/
/*
const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn)
const markHigherBMI = BMIMark > BMIJohn;
console.log(BMIMark, BMIJohn, markHigherBMI)
*/
/*
const firstName = "Jonas"
const job = "teacher";
const birthYear = 1991;
const year = 2037;

const jonas = "i'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!"
console.log(jonas)

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);

console.log(`just a regular string...`);

console.log("string with \n\
multiple \n\
lines");

console.log(`String
multiple
lines`);
*/
/*
const age = 15;

if (age >= 18) {
    console.log("sarah can start driving license 🚗");
} else {
    const yearsLeft = 18 - age;
    console.log(`sarah is too young wait another ${yearsLeft} years :)`);
}

const birthYear = 2012;

let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);
*/
/*
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

// Write your code below. Good luck! 🙂

if (BMIMark > BMIJohn) {
    console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`)
} else {
    console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`)
}
*/
/*
// type conversion
const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("Jonas"));
console.log(typeof NaN);

console.log(String(23), 23);

// type coercion
console.log("i am " + 23 + " years old");
console.log("23" - "10" - 3);
console.log("23" / "2");


let n = "1" + 1; // "1"
n = n - 1; // 11 - 1 = 10
console.log(n) // 10
*/
/*
// 5 falsy value: 0, "", undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Jonas"));
console.log(Boolean({}));
console.log(Boolean(""));

const money = 100;
if (money) {
    console.log("Don't spend it all ;)");
} else {
    console.log("You should get a job!")
}

let height = 0;
if (height) {
    console.log("YAY! Height is defined");
} else {
    console.log("Height is UNDEFINED");
}
*/
/*
const age = "18";
if (age === 18) console.log("you just became an adult :D (strict)");

if (age == 18) console.log("you just became an adult :D (loose)");

const favourite = Number(prompt("what's you favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {// 22 === 23 -> FALSE
    console.log("Cool! 23 is an amazing number!");
} else if (favourite === 7) {
    console.log("7 is also a cool number");
} else if (favourite === 9) {
    console.log("9 is also a cool number");
} else {
    console.log("Number is not 23 or 7");
}

if (favourite !== 23) console.log("Why not 23?");
*/
/*
const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);


// if (hasDriversLicense && hasGoodVision) {
//     console.log("Sarah is able to drive!");
// } else {
//     console.log("Someone else should drive...")
// }

const isTried = false; // C
console.log(hasDriversLicense && hasGoodVision && isTried);

if (hasDriversLicense && hasGoodVision && !isTried) {
    console.log("Sarah is able to drive!");
} else {
    console.log("Someone else should drive...")
}
*/
/*
// my version
const dolphinsScore = [96, 108, 89]
const koalasScore = [88, 91, 110]

let dolphinFinalNumber = 0
for (let i = 0; i < dolphinsScore.length; i++) {
    dolphinFinalNumber += dolphinsScore[i]
}
const scoreDolphins = dolphinFinalNumber / dolphinsScore.length

let koalaFinalNumber = 0
for (let i = 0; i < koalasScore.length; i++) {
    koalaFinalNumber += koalasScore[i]
}
const scoreKoalas = koalaFinalNumber / koalasScore.length

if (scoreDolphins > scoreKoalas) {
    console.log("Dolphins win the trophy")
} else if (scoreDolphins < scoreKoalas) {
    console.log("Koalas win the trophy")
} else if (scoreDolphins === scoreKoalas) {
    console.log("Both win the trophy")
}
*/
/*
// his version
const scoreDolphins = (97 + 112 + 80) / 3;
const scoreKoalas = (109 + 95 + 50) / 3;
console.log(scoreDolphins, scoreKoalas)

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
    console.log("dolphins win the trophy");
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
    console.log("koalas win the trophy");
} else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100) {
    console.log("both win the trophy")
} else {
    console.log("No one winds the trophy D:")
}
*/

/*
const day = "thursday";

switch (day) {
    case "monday": // day === "monday"
        console.log("Plan course structure");
        console.log("Go to coding meetup");
        break;
    case "tuesday":
        console.log("prepare theory videos");
        break
    case "wednesday":
    case "thursday":
        console.log("Write code examples");
        break
    case "friday":
        console.log("Record videos");
        break
    case "saturday":
    case "sunday":
        console.log("Enjot the weekend :D");
        break
    default:
        console.log("Not a valid day!")
}


// const day = prompt("what day?")

if (day === "monday") {
    console.log("Plan course structure");
    console.log("Go to coding meetup");
} else if (day === "tuesday") {
    console.log("prepare theory videos");
} else if (day === "wednesday" || day === "thursday") {
    console.log("Write code examples");
} else if (day === "friday") {
    console.log("Record videos");
} else if (day === "saturday" || day === "sunday") {
    console.log("Enjot the weekend :D");
} else {
    console.log("Not a valid day!")
}
*/

