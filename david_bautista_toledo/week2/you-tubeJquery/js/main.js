console.log("YouTube exercise Jquery");
//
// // Step by Step:
// //
// // Create an array of every link on the page using document.querySelectorAll( CSS-SELECTOR-GOES-HERE )

const $allLinks = $("a");

// $allLinks.css("text-decoration", "none");

// console.log($allLinks);
// console.log($allLinks[0]);
// console.log($allLinks[1]);
// console.log($allLinks[2]);
//
// console.log($allLinks[0].href);
// console.log("a"[0].href);

// for (i=0; i<allLinks.length; i++){
//   console.log($allLinks[i].href);
// }


$allLinks.each(function(){
    //this is the code that .each() will apply to every
    //link tag in the JQuery results
    console.log(this);  //this is vanilla

    //this is jquery
    const videoURL = $(this).attr("href");
    // no $ required
    console.log("videoURL", videoURL);

    const thumbnailURL = youtube.generateThumbnailUrl(videoURL);
    console.log("thumbnail", thumbnailURL);

    console.log("=====================================");


    // // Create an IMG element using document.createElement(tagName)

    const $img = $("<img>");
    //set the sourse to the IMG
    $img.attr("src", thumbnailURL);

    //apend the IMG to the link using element.appendChild(element)
    $(this).append($img);

}); // this is the end of the each()


// // Iterate through the array. In each iteration of the loop:
// // Find the current href using currentLink.href (assuming your DOM element loop variable is called currentLink), and store into a variable
// // Generate a thumbnail URL using youtube.generateThumbnailUrl(videoUrl)
// // Create an IMG element using document.createElement(tagName)
// // Set the "src" of the IMG element using newImage.src = 'something'
// // Append the IMG to the link using element.appendChild(element)
//
//
//
// const allLinks = document.querySelectorAll("a")
//
// console.log(allLinks);
//
// // const findLinks = function (){
// for (var i = 0; i < allLinks.length; i++) {
//   const url = allLinks[i].href;
//   // console.log("url",url);
//   const newThumbnailURL = youtube.generateThumbnailUrl(url);
//   console.log(newThumbnailURL);
//   const newImg = document.createElement("img");
//   newImg.src = newThumbnailURL;
//   allLinks[i].prepend(newImg);
// }
//
//
//
//
// // }
//
// // console.log(allLinks[0].currentLink.href);
