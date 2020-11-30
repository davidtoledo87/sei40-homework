console.log("Gatito");

const gatito = document.querySelector("img");

// gatito.style.position = "absolute";
gatito.style.left = "-300px";

const watchGatito = function () {

  if(parseInt(gatito.style.left) >= 860){
    gatito.style.left = "0px"
  }

  const oldleft = parseInt(gatito.style.left);
  let newleft = oldleft + 10;
  gatito.style.left = newleft + "px";
  console.log(gatito.style.left);


};
window.setInterval(watchGatito, 500);
