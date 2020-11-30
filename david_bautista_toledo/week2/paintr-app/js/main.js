console.log("Paintr!");


/*
1-when the user moves the mouse arround
2-draw a color circle at the mouse position
2a:get the mouse position for the latest move event
2b:create a <div> and add it to the DOM at the position
*/

let hue = 0; //we will increment this inside our mouse handler

const drawBlob = function(x,y){


  // console.log('mouse moved', ev.clientX, ev.clientY);

  // hue = hue +10
  hue += 1;
  console.log("hue",hue);

  const $blob = $('<div class = "blob">');
  const blobSize = 70;

  const blobColour = `hsla(${hue}, 100%, 50%, 50%)`;
  console.log(blobColour);

  const r = Math.random() * 255;
  const g = Math.random() *255;
  const b = Math.random() *255;

  $blob.css({
    width: blobSize + "px",
    height: blobSize + "px",
    // backgroundColor: `rgba(${r}, ${g}, ${b}, 0.2)`,
    backgroundColor: blobColour,

    top: y-blobSize/2 + "px",
    left: x-blobSize/2 + "px"
  });

  //add the blob Div to the page
  $("body").append($blob);

}) //end of mousemove handler


}; // drawBlob

$(document).ready(function(){

  //respond to mouse movement anywhere on the document by running a callback function; that function receives an event object as its argument when the browser runs it for us
  $(document).on('mousemove',function(ev){
    drawBlob(ev.clientX, ev.clientY);

}); //end of $document.ready() handler
