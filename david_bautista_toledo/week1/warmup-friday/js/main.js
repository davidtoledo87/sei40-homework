
console.log("functions JS loaded!");

// # Leap Year Warmup Exercise
// ## Do this in HTML and JS!
// Write a function that will take any given year and return whether it is a leap year or not. Remember that a leap year is:
// Every year that is evenly divisible by 4
// Except if it is evenly divisible by 100...
// Unless it is also divisible by 400
// Test Data... Make sure it is working!
// - 1997 is not a leap year, it should return false
// - 1996 is a leap year, it should return true
// - 1900 is not a leap year, it should return false
// - 2000 is a leap year, it should return true
// How to structure it...
// - We want a custom function called isLeapYear




const leapYear = function (x){
  if(!(x % 4 && x % 100 && x % 400) ){ //if divisible by 4 by 100 and by 400 is a leap year
    return("is a leap year");
  } else if (!(x % 4 && x % 100)) { // if divisible by 4 and by 100 is not a leap year
    return ("is not a leap year");
  } else if (!(x % 4)){ // if divisible by 4 is a leap year
    return ( "is a leap year")
  } else {  // anything else is not a leap year
    return("is not a leap year")
  };
}

console.log(leapYear(1990));
