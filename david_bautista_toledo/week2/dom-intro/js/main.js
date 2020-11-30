console.log("Hellow DOM");

//Retrieve a single tag/elemtn (DOM node) by ID
const para = document.getElementById("first_Para");
console.log('para',para);


//Retrieve every tag of a certain tag from the page -
//It returns an array of DOM nodes

const allParagraphs = document.getElementsByTagName ('p');


const alllarger = document.getElementsByClassName ("larger");

//
// for(let i=0; i<allParagraphs.length; i++){
//     const currentPara = allParagraphs[i]
//     console.log(currentPara);
// }
//
// for(let i=0; i<allParagraphs.length; i++){
//     const currentPara = allParagraphs[i]
//     console.log(currentPara.innerHTML);
// }
//
//
// for(let i=0; i<allParagraphs.length; i++){
//     const currentPara = allParagraphs[i]
//     currentPara.innerHTML = "Hacked"
// }

//HTML DOM methods

const firstPara = document.querySelector("#first_Para");
console.log("firstPara", firstPara);

const allStrongs = document.querySelectorAll("strong");
console.log("allStrongs", allStrongs);

// const alllargerTheSequel = document.querySelectorAll("");


//lets change the font color for this page

firstPara.style.color="darkgoldenrod";
firstPara.style.border="10px solid yellow";

//#firstPara{
// border:10px solid yellow;
// }
