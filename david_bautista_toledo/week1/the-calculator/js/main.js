
console.log('The Calculator & Verbing!');

// The Calculator
// Part 1
// Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."
// Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".
// Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."
// Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
// Bonus: Round the result so there are only two digits after the decimal.
// Part 2
// Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:
//
// Take half of the number and store the result.
// Square the result of #1 and store that result.
// Calculate the area of a circle with the result of #2 as the radius.
// Calculate what percentage that area is of the squared result (#3).

let squareNumber = function (x){
  const calculation = x*x
  console.log (`The square number of ${x} is ${calculation} `)
  return (calculation);
}
  const calculateSquareOf = squareNumber;


  // Verbing
  // Create a function called verbing. It should take a single argument, a string. If its length is at least 3, it should add 'ing' to its end, unless it already ends in 'ing', in which case it should add 'ly' instead. If the string length is less than 3, it should leave it unchanged. For example:
  //
  //   verbing('walk'): 'walking'
  //   verbing('swimming'): 'swimmingly'
  //   verbing('go'): 'go'
// let word= "lolo"
// const verbing = function (word){
const verbing = function (word){
  if (word.length>=3){
    if(word.endsWith("ing")){
      console.log(word+"ly");
    }else {
      console.log(word+"ing");
    }
  } else {
    console.log(word);
  }

}
const verbTheWord = verbing;
