console.log("Events in JQuery");


// $("#kitty").on("click",function(){
// console.log("kitty clicked");
// // $(this).css("border","10px solid red");
// // $(this).css("border","10px solid red");
// // $("h1").css("font-size", '50pt');
// $("h1").fadeToggle();
//
// }); //on kitty click


// $("#kitty").on("click",function(){
// console.log("kitty clicked");
// // $(this).css("border","10px solid red");
// // $(this).css("border","10px solid red");
// // $("h1").css("font-size", '50pt');
// $("h1").show(1000);
//
// });


// // $("body").on("keydown",function(){
// console.log("key typed");
// // $(this).css("border","10px solid red");
// // $(this).css("border","10px solid red");
// // $("h1").css("font-size", '50pt');
// // $("h1").fade();
// $("h1").hide();
// });

// $("body").on("keydown",function(){
// console.log("key typed");
// // $(this).css("border","10px solid red");
// // $(this).css("border","10px solid red");
// // $("h1").css("font-size", '50pt');
// // $("h1").fade();
// $("h1").hide();
// });

// $('#kitty').on ("mouseenter",function(){
//   console.log("mouse in");
//
// });
//
// $('#kitty').on ("mouseleave",function(){
//   console.log("mouse out");
//
// });
//
//
// $('#kitty').on('over',
//  function(){
//    console.log("mouse in");
//  },
//  function () {
//    console.log("mouse out");
//  }
// it didnt work
// );
//
// $('input[type="text"]').on('keydown', function(){
//     console.log("key down");
// }
//
// )


// $('input[type="text"]').on('blur')


// $('#fade').on('click', function(){
//   $('.triple-kitty2').fadeToggle();
//
// });

// $('#kitty').on('click', function(ev){
//
//     console.log("ev:", ev);
// })

$('#kitty').css('position','relative');
$('#kitty').css('z-index','1');

$('#kitty').animate({
  left: '500px',
  top:"200px",
  opacity:0
}, 3000).animate ({left:0},1000);
