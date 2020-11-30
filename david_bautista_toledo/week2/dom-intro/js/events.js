console.log("events");

//functions in JS are first class: they live in variables

const sayHello = function() {
  console.log("Hellow world");
}

// sayHello();

//Write a function that will run ANOTHER function for us, but nicely. We need to tell it which function we want it to run, by passing that function in to runNicely as an argument

const runNicely = function ( functionToRunNicely) {
  console.log("Hello! I am about to to run");


  //run the function Here
  functionToRunNicely();


  console.log("it was a real pleasure to run your function. Have a nice day");
}

// runNicely(sayHello);

//step 1

const heading = document.querySelector("h1");
console.log("heading", heading);


//step 2
//run add event listener

heading.addEventListener('click', function(eventData){
  console.log("The h1 was clicked");
  console.log(eventData); // the browser supplies
});

// setTimeout (sayHello,3000);

const puppy = document.querySelector("#mainImage");
puppy.style.opacity = 1.0;
// setInterval(function(){
//   puppy.width += 10;
const growID = setInterval(function){
bill.style.opacity -=0.01;

},100);
