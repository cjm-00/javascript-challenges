// 1. Write a function that takes in a number of earth days, and returns the
//    number of orbits the moon can perform given days.

// ```js
// moonOrbits(54) => 2
// moonOrbits(365) => 13.359
// 27 days = 1 orbit


function daysOrbit (days) {
    const orbit = 27
    return (days / orbit);
}

console.log(daysOrbit(54));



// 1. Write a function that takes the radius of a circle and return its area.
// 2. Write a function that takes the radius of a circle and return its perimeter.

// ```js
// circleArea(10) => 314.16
// circlePerimeter(10) => 62.83

// let radius = 10

function areaCalculate (radius) {
    return (Math.PI * (radius ** 2));
}
console.log(areaCalculate(10));


function perimeterCalculate (radius) {
    return (2 * (Math.PI * radius));
}
console.log(perimeterCalculate(10));




// 1. Create a function that takes your age in years and returns your age in days.
// 1. Create a function that takes your age in years and returns your age in seconds.

// ```js
// ageInDays(32) => 11680
// ageInSeconds(32) => 1009152000

// let ageYears = 32

function ageInDays (ageYears) {
    return (ageYears * 365);
}
console.log(ageInDays(32));



function ageInSeconds (ageYears) {
    return (ageYears * 31536000);
}
console.log(ageInSeconds(32));




// ## Challenge: Basketball Points

// ### MVP

// You are counting points for a basketball game, given the amount of 2-pointers scored and 3-pointers scored, find the final points for the team and return that value.

function scoreCalculate (twoPointers, threePointers) {
    return ((twoPointers*2) + (threePointers*3))
}
console.log(scoreCalculate(2,1));



// ## Challenge: Less Than 100?

// ### MVP

// Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.

// ```js
// lessThan100(22, 15) ➞ true
// // 22 + 15 = 37

// lessThan100(83, 34) ➞ false
// // 83 + 34 = 117

// lessThan100(3, 77) ➞ true

function lessThan100 (numOne, numTwo) {
    total = numOne + numTwo
    if (total < 100) {
        result = true
    } else {
        result = false
    }
    return(result)
}

console.log(lessThan100(40,200));

let numOne = 2
let numTwo = 3
total = numOne + numTwo

