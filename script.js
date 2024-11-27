// 1. Write a function that takes in a number of earth days, and returns the
//    number of orbits the moon can perform given days.

// ```js
// moonOrbits(54) => 2
// moonOrbits(365) => 13.359
// 27 days = 1 orbit

let days = 81
orbit = 27
daysOrbit = days / orbit
console.log(daysOrbit);



// 1. Write a function that takes the radius of a circle and return its area.
// 2. Write a function that takes the radius of a circle and return its perimeter.

// ```js
// circleArea(10) => 314.16
// circlePerimeter(10) => 62.83

let radius = 10
area = Math.PI * (radius ** 2);
console.log(area);

perimeter = 2 * (Math.PI * radius);
console.log(perimeter);


// 1. Create a function that takes your age in years and returns your age in days.
// 1. Create a function that takes your age in years and returns your age in seconds.

// ```js
// ageInDays(32) => 11680
// ageInSeconds(32) => 1009152000

let ageYears = 32
ageInDays = ageYears * 365
console.log(ageInDays)

ageInSeconds = ageYears * 31536000
console.log(ageInSeconds)