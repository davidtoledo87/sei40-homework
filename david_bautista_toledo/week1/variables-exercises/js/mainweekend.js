
//The Fortune Teller

const fortuneTeller = function(){

  const partner = ["julio", "John", "Troy", "Tato"]
  city = ["Sydney", "Melbourne", "Tokyo", "Los Angeles", "Mexico City"]

  const randomNumber = Math.random();
  const randomPartner = Math.floor(randomNumber*partner.length);
  const randomKids = Math.floor(randomNumber*10);
  const randomCity = Math.floor(randomNumber*city.length)

  return(`You will be married with ${partner[randomPartner]} and working in ${city[randomCity]} with ${randomKids} Kids`);
};
const tellMeMyFuture = fortuneTeller;



// The Age Calculator
// Forgot how old someone is? Calculate it!
//
// Store the current year in a variable.
// Store their birth year in a variable.
// Calculate their 2 possible ages based on the stored values.
// Output them to the screen like so: "They are either NN or NN", substituting the values.

const age = function (xxxx) {
  const currentYear = 2020;
    const age = currentYear- xxxx;
    return (age);

}
const guessMyAge = age;


// The Lifetime Supply Calculator
// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!
//
// Store your current age into a variable.
// Store a maximum age into a variable.
// Store an estimated amount per day (as a number).
// Calculate how many you would eat total for the rest of your life.
// Output the result to the screen like so: "You will need NN to last you until the ripe old age of X".
const calculatorOfStock = function(ageLT){
  const amountPerDay = 50;
  const maxAge= 40
  for(i=ageLT; i<=maxAge; i++){
    return(`if you are ${i} You will need ${(maxAge-i)*amountPerDay*365}`)
  }
}
const howMany = calculatorOfStock;
