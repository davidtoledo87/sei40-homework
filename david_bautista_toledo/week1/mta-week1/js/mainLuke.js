
console.log("Trip planner - MTA!");


// let startStation = "Times Square";
// let startLane = "L";
// let endstation = "Union Square";
// let endlane = "N";
//
//
const mta = {
  "N":["times Square", "34th", "28th", "union square", "8th"],
  "L":["8th","6th", "union square", "3rd", "1st" ],
  "6":["grand central","33rd", "28th", "23rd", "union square", "astor place"]
}

const singleLineTrip = function(line,start, end){
  console.log("singleLineTrip()");
  console.log("line=",line);
  console.log("start=",start);
  console.log("end=", end);

//get the stations on the line whose name is in the variable

//just to get this working lets hardcore the N stations as the stations we are travelling on

const lineStations = mta[line];
console.log("N stations:", lineStations);

console.log(lineStations.indexOf(start));
//find out the positions of the start and the endlane
//we know their names but we need to find out their
//indexes so we can loop through them
const startIndex = lineStations.indexOf(start);//position of the start
const endIndex = lineStations.indexOf(end); // position of the endlane

console.log("start is",startIndex);
console.log("end is", endIndex);

// let stations = (mta[line].slice(startIndex,endIndex));
// console.log(`You need to pass through: ${stations} `)

if(startIndex<endIndex){

//To print all stations on this trip,
//use a for loop which starts counting at the startIndex
//We calculated above, and stops couting after it gets
//to the endIndex
// for(let i=startIndex+1; i<=endIndex; i++){
//   const currentStation = lineStations[i];
//   console.log(currentStation);
  let stations;
  stations= (lineStations.slice(startIndex,endIndex+1));
  console.log(`You must travel through through the following stops on the ${line} line: ${stations} `)


} else {
  // for(let i=startIndex-1; i>=endIndex; i--){
  //   const currentStation = lineStations[i];
  //   console.log(currentStation);

    stations = lineStations.slice(endIndex,startIndex).reverse();
    console.log(`You need to pass through: ${stations} `);

}


}

const planTrip = function (startLineName, startStationName, endLineName, endStationName){

  console.log("startLane=", startLineName );
  console.log("startStation=", startStationName );
  console.log("endLane=", endLineName );
  console.log("endStation=", endStationName );

//if condition to check if its a single or multi lane trip//
  if (startLineName === endLineName  ){
    console.log("Its a single lane trip");
    //use the multitrip
    } else {
    console.log("Its a multi lane trip");

    //show the lines
    console.log("stations in 1st leg are:",mta[startLineName]);
    console.log("stations in 2nd leg are:",mta[endLineName]);

    const startLineStations = mta[startLineName];
    const endLineStations = mta [endLineName];

    const startIndex = startLineStations.indexOf(startStationName);
    console.log("Start lane index:",startIndex);
    const startConnection = startLineStations.indexOf("union square");
    console.log("connection index in 1st leg is:",startConnection);
    const endConnection = endLineStations.indexOf("union square");
    console.log("connection index in 2nd leg is:", endConnection);
    const endIndex = endLineStations.indexOf(endStationName);
    console.log("End lane index:",endIndex);

    console.log("total stations are:",(Math.abs(startConnection-startIndex)+Math.abs(endIndex-endConnection)));

    let stations1stLeg;
    let stations2ndLeg;

    if(startIndex<startConnection){
      stations1stLeg = startLineStations.slice(startIndex,startConnection);
      console.log("the stations you need to transit in the first leg are",stations1stLeg);
      }else {
      stations1stLeg = startLineStations.slice(startConnection,startIndex).reverse();
      console.log("the stations you need to transit in the first leg are",stations1stLeg);
      }

    if(endConnection<endIndex){
      stations2ndLeg = endLineStations.slice(endConnection,endIndex);
      console.log("the stations you need to transit in the second leg are",stations2ndLeg);
      }else {
      stations2ndLeg = endLineStations.slice(endIndex,endConnection).reverse();
      console.log("the stations you need to transit in the second leg are",stations2ndLeg);
      }
  }//else different line
}//close function planTrip

//homework
//work out if its a single line trip or a multi line tripStations
//1a) if single use the single line trip
//1b) if multi, use singleLineTrip() twice!!
//with careful use of Union square as an argument to both singleLine trip calls

//ToDo use slice instead of writing a loop.


// singleLineTrip("N","34th","8th");
// //output should be: 28th, 23rd, UnionSquare, 8th
//
//
// //test the same trip in the reverse direction:
// singleLineTrip("N","8th","34th");
//
//
// singleLineTrip("6","23rd","33rd");
planTrip("N", "times Square", "6", "23rd", )
