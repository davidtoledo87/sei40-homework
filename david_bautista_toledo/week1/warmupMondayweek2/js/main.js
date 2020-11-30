
console.log('Warm up JS loaded!')
//
// # Badger's Revenge
// The names of those who are witnessed clapping Badger more than twice in the first four days of any one week will go into a draw. On Friday morning, a random name will be drawn from that list and the 'winner' will be forced to deliver the solution to Friday's warmup.
// Create a program that Badger can use for this task - ideally, you should create an object (revengeOfBadger) to do this, but if you can get it working using standalone functions, that's cool.
// Your program should:
// - Track how many times each student in the class has clapped this week (just make up the numbers);
// - Include a collection of candidates for the Friday draw (ie, a list of names of people who have clapped Badger more than twice that week);
// - Pick a random student to deliver the solution to Friday's warmup.
// - If no one has clapped enough that week, the program should indicate that Badger has to do his own damned warmup.


// const revengeOfBadger = {
//   david:[0,1,1,0],
//   john:[1,1,1,1],
//   manda:[0,0,0,0],
//   ray:[1,0,0,0]
// }
// randomNum = Math.random();
// console.log(randomNum);
//
// const length=Object.keys(revengeOfBadger)
// console.log(revengeOfBadger.john);
// console.log(length);
//
// for (i=0, i<5; i++)


//create an object called revengeOfBadger that will store our functions
//track how many times a student has clapped
//make up number
//object: student ; claps
//create a list that will store students that have clapped more than twice
//create a function that pick up a random students
//if no one has clapped more than twice the badger gotta do the solution
const revengeOfBadger = {
    students:{
      Miffy:2,
      Bonnie:3,
      Ruby:1,
      Socks:4,
      Boots:0,
      Winnie:5,
      Biscuit:1,
      Rudy:25,
      Molly:4
    },

    shortlist:[],

    generateShortList:function(){
      for (const key in this.students){

        const numberOfClaps = this.students[key];
        if(numberOfClaps > 2){
          this.shortlist.push(key);
        }

      }

    }


}
