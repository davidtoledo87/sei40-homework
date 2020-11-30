
console.log("Trip planner - MTA!");


let station1 = "Times Square";
let lane1 = "L";
let station2 = "Union Square";
let lane2 = "N";


const stops = {
  "N":["times Square", "34th", "28th", "union square", "8th"],
  "L":["8th","6th", "union square", "3rd", "1st" ],
  "6":["grand central","33rd", "28th", "23rd", "union square", "astor Place"],

  // const trip:[],

  displaytrip: function(lane1,station1,lane2,station2){
  const fullTrip = this[lane2].indexOf(station2)-this[lane1].indexOf(station1);
  if(lane1 === lane2){
    for(i=this[lane1].indexOf(station1); i<=this[lane1].indexOf(station2); i++)
    console.log(`You must travel by ${this[lane1][i]} `);
    console.log(`${fullTrip} stops in total`);


    } else{
    console.log("its not on the same line");
  }

  console.log(fullTrip)
  console.log(`${fullTrip} stops in total`);
  console.log(stops.N);
  }

};

// console.log(stops["N"]);
// console.log(stops["L"]);
// console.log(stops["6"]);
//
// console.log(stops.N);
//
// console.log(stops.N.indexOf("34th"));
// console.log(stops.L.indexOf("6th"));
// console.log(stops["6"].indexOf("33rd"));



// const trip = function (station1,lane1,station2,lane2) {
//   console.log(stops.lane1);
// }


// const tripStations =   function(x,y,z){
//
//
// }
