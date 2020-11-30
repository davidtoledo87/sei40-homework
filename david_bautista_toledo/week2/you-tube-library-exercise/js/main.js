console.log("YouTube exercise");

// Step by Step:
//
// Create an array of every link on the page using document.querySelectorAll( CSS-SELECTOR-GOES-HERE )
// Iterate through the array. In each iteration of the loop:
// Find the current href using currentLink.href (assuming your DOM element loop variable is called currentLink), and store into a variable
// Generate a thumbnail URL using youtube.generateThumbnailUrl(videoUrl)
// Create an IMG element using document.createElement(tagName)
// Set the "src" of the IMG element using newImage.src = 'something'
// Append the IMG to the link using element.appendChild(element)



const allLinks = document.querySelectorAll("a")

console.log(allLinks);

// const findLinks = function (){
for (var i = 0; i < allLinks.length; i++) {
  const url = allLinks[i].href;
  // console.log("url",url);
  const newThumbnailURL = youtube.generateThumbnailUrl(url);
  console.log(newThumbnailURL);
  const newImg = document.createElement("img");
  newImg.src = newThumbnailURL;
  allLinks[i].prepend(newImg);
}




// }

// console.log(allLinks[0].currentLink.href);
