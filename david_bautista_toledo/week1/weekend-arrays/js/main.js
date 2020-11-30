
console.log('JS loaded array!')


// Exercises: Arrays
// Your top choices
// Create an array to hold your top five choices of something (colors, presidents, whatever). If you choose movies, the right top choice is "Satantango".
//

// For each choice, log to the screen a string like: "My #1 choice is blue."

const colors = ["blue", "green", "yellow", "red", "purple"]
console.log(`My favorite color is ${colors[1]}`);
for(i=0; i<colors.length; i++){
  if (i=0){
  console.log(`My ${i} color is ${colors[i]}`);
  }

}




// Bonus: Change it to log "My 1st choice, "My 2nd choice", "My 3rd choice", picking the right suffix for the number.
// Extra Challenges to Achieve Array Mastery
// Starting with an empty array called rainbowColors:
//
// Add "orange" to the end of the array
// Add "red" to the start of the array
// Add "yellow" to the end
// Add "green", "blue", "indigo", and "violet" to the end of the array
// Try and do this using one method
// Log out the length of the array
// Log out the second item
// Log out the last item (make this flexible/dynamic!)
// Log out the index of the string "blue"
// Bonus: Find out the difference between .slice and .splice
// Create an array called twoColors using one method - don't change the rainbowColors array! Essentially pull two colors out of the array (say, between the index of 1 and 3)
// Starting with this array var nums = [0, 1, 2, 2, 2, 3, 3, 4, 5];, remove the duplicates destructively using slice or splice (whichever one is appropriate)
// Bonus: Work with arrays of arrays
// Starting with this array var arrOfArrs = [["inner array first item", "inner array second item"], ["first", "second", "third"]];
// Access "inner array first item" and print it out"
// Print "third" by using a dynamic index
// Bonus Bonus: Loop through the second inner array! Print out first, then second, then third
