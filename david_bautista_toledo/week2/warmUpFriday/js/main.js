console.log("Hellow Friday");

// const possibleWords=[
//   "enlists",
//   "google",
//   "inlets",
//   "banana"
// ]
//
//
// const anagram = function (){
//   console.log("this is a", word );
//   const str1 = word.split(word);
//   console.log(str1);
//
// }
//
//
// // const word = "listen"
// word = "listen"


// # Anagram Detector
// Write a program that, given a word and a list of possible anagrams, selects the anagrams of the given word. A word is an anagram if its letters can be rearranged to create a new word.
// In other words, given: `"listen"` and `["enlists" "google" "inlets" "banana"]` the program should return "inlets".
// ## Suggestions
// - Start out by getting this working with discrete functions.
// - If you feel comfortable with that, try to put all your functions, collections, etc, into an object.

const wordSort = function (unsortedWord){
  let sortedWord = unsortedWord.toLowerCase().split("").sort().join("");
  return sortedWord;
}

// console.log(wordSort("Listen"));

const anagramDetector = function(word,array){
  let wordOne = wordSort(word);

  for (let i= 0; i<array.length; i++){
    // console.log(array[i]);
    let wordTwo = wordSort(array[i]);
    console.log(wordTwo);

  if (wordOne === wordTwo){
    console.log(`The anagram of ${word} is ${array[i]}`);
  }

}

}

anagramDetector("listen", ["enlists", "google", "inlets", "banana"]);
