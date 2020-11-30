console.log("About me");

// const allBody = document.getElementsByTagName("body")[0];
//
//
// allBody.style.fontFamily = "Arial,sans-serif";
//
// const nickName = document.getElementById("nickname");
//
// nickName.innerHTML = "Tigre";
//
// const favorites = document.getElementById("favorites");
//
// favorites.innerHTML = "Surf";
//
// const homeTown = document.getElementById("hometown");
//
// homeTown.innerHTML = "Maroubra";
//
// const allLis=document.getElementsByTagName("li")


document.body.style.fontFamily = "Arial, sans-serif";

const nickname = document.querySelector("#nickname");

const listItems = document.querySelectorAll("li");

for(let i=0; i<listItems.length; i++){
  const currentItem = listItems[i];
  // console.log(currentItem);
  currentItem.className = "listitem";
}
