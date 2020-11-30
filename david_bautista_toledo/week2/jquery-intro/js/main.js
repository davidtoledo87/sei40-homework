console.log("Hellow JQuery");

const $para = $('#first_Para')
console.log("para", $para);

// para.fadeOut(2000);

// $para.css("background-color", "white");

// const pContent = para.html();
// console.log("first content:", pContent);
// $para.html('NEW CONTENT');
//
//
// // para.css ({fontSize:'14pt', fontFamily: 'Comic Sans MS'})
//
//
//
// const puppy = $('#mainImage');
//
// const puppyURL= puppy.attr('src');
//
// console.log("puppy URL:", puppyURL);


//add new stuff after first Para
const $linkTag = $('<a>');
$linkTag.html("Sign it");
$linkTag.css('color', 'blue');
$linkTag.attr("href","Guestbook.html");
$para.append($linkTag);


//Implicit iteration in jquery
const $allParaTags = $('p');
$allParaTags.html ('all the same now');
$allParaTags.css('color', 'green');

const allParaContents = $allParaTags.html();
console.log("all contents",allParaContents);
