
console.log('JS loaded!')

const dictionary = {
  //This nested object stores our actual coding terms
  // and their definitions as key: value pairs
  definitions:{
    method: 'a function which lives in an object (i.e the value of the key)',
    scope: 'the visibility or lifetime',
    'variadic function': 'a function which accepts a varying number of arguments from one call to the next'
  },//definitions

  lookupTerm:function(term){

    // console.log("inside",term)
    term = term.toLowerCase();//ignore case
    const definition = this.definitions[term];

    if(term in this.definition){
      // found the definition
      console.log(`${term} : ${definition} `);
    } else {
      // not found

    console.log(`Sorry, "${term}"" is not in the dictionary `);
    }
  }, // lookupTerm

  printAllDefinitions: function(){

    for (const key in this.definitions){
    console.log (`${key}: ${this.definitions [key] }`);
    }

  },

} // dictionary
