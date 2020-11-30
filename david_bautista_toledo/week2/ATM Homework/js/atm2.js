
console.log("ATM 2");

let $amount1; // define variable in the input
let currentbalance=0; // define current balance in check

let $amount2; // define variable in the input 2
let currentbalance2=0; // define current balance in savings

let totalBalance = currentbalance + currentbalance2;

// deposit function in check
$("#checkingDeposit").on("click",function(){
  console.log("Deposit button pressed");
  $amount1 = parseInt($("#checkingAmount").val());
  currentbalance = currentbalance + $amount1;
  console.log("you made a deposit of:",$amount1);
  console.log("you got now:", currentbalance);
  $("#balance1").html(`$ ${currentbalance}`);
  //recalculate the totalBalance
  totalBalance = currentbalance + currentbalance2;
  console.log("the total balance is:",totalBalance);
  $("#balance3").html(`$ ${totalBalance}`);
})

//withdrawal function in check
$("#checkingWithdraw").on("click",function(){
  console.log("Withdraw button pressed");
  $amount1 = parseInt($("#checkingAmount").val());
  //if balance after withdrawal is positive
  if (currentbalance-$amount1>=0){
    currentbalance = currentbalance - $amount1;
    console.log("you made a withdraw of:",$amount1);
    console.log("you got now:", currentbalance);
    $("#balance1").html(`$ ${currentbalance}`);
    //recalculate the totalBalance
    totalBalance = currentbalance + currentbalance2;
    console.log("the total balance is:",totalBalance);
    $("#balance3").html(`$ ${totalBalance}`);
    // if balance from checking and savigs is higher than the withdrawal
  } else if (totalBalance>=$amount1){
      console.log(" You can get it from the savings");
      currentbalance = currentbalance - $amount1;
      currentbalance2 = currentbalance +currentbalance2;
      currentbalance = 0;
      console.log("current balance is", currentbalance);
      console.log("savings balance is", currentbalance2);
      //recalculate the total balance
      totalBalance = currentbalance + currentbalance2;
      console.log("the total balance is:",totalBalance);

      $("#balance1").html(`$ ${currentbalance}`);
      $("#balance2").html(`$ ${currentbalance2} `);
      $("#balance3").html(`$ ${totalBalance} `);


    } else {
    console.log("You cant");
    $("<p> insufficient funds </p>").appendTo ("#logo").css({
      "color":"red",
      "font-size":"40px",
      "background-color":"yellow"
    }).delay(2000).hide("p")
  // recalculate the totalBalance
  totalBalance = currentbalance + currentbalance2;
  console.log("the total balance is:",totalBalance);
  $("#balance3").html(`$ ${totalBalance} `);
  }

  // if (currentbalance===0){
  //     $("#balance1").css("color","red");
  // }

});

//deposit function in savings
$("#savingsDeposit").on("click",function(){
  console.log("Deposit button 2 pressed");
  $amount2 = parseInt($("#savingsAmount").val());
  currentbalance2 = currentbalance2 + $amount2;
  console.log("you made a deposit of:",$amount2);
  console.log("you got now:", currentbalance2);
  $("#balance2").html(`$ ${currentbalance2} `);
  // recalculate the totalBalance
  totalBalance = currentbalance + currentbalance2;
  console.log("the total balance is:",totalBalance);
  $("#balance3").html(`$ ${totalBalance} `);
})

//withdraw function in savings
$("#savingsWithdraw").on("click",function(){
  console.log("Withdraw button pressed");
  $amount2 = parseInt($("#savingsAmount").val());
  if (currentbalance2-$amount2>=0){
    currentbalance2 = currentbalance2 - $amount2;
    console.log("you made a withdraw of:",$amount2);
    console.log("you got now:", currentbalance2);
    $("#balance2").html(`$ ${currentbalance2}`);
    // recalculate the totalBalance
    totalBalance = currentbalance + currentbalance2;
    console.log("the total balance is:",totalBalance);
    $("#balance3").html(`$ ${totalBalance} `);


    // if balance from savings and check is higher than the withdrawal
    } else if (currentbalance2<$amount2 && totalBalance>=$amount2){
        console.log(" You can get it from the savings");
        currentbalance2 = currentbalance2 - $amount2;
        currentbalance = currentbalance2 +currentbalance;
        currentbalance2 = 0;
        console.log("current balance is", currentbalance);
        console.log("savings balance is", currentbalance2);
        //recalculate the total balance
        totalBalance = currentbalance + currentbalance2;
        console.log("the total balance is:",totalBalance);

        $("#balance1").html(`$ ${currentbalance}`);
        $("#balance2").html(`$ ${currentbalance2} `);
        $("#balance3").html(`$ ${totalBalance} `);


    } else {
    console.log("You cant");
    $("<p> Insufficient funds! </p>").appendTo ("#logo").css({
      "color":"red",
      "font-size":"40px",
      "background-color":"yellow"
    }).delay(2000).hide("p")
    // recalculate the totalBalance
  totalBalance = currentbalance + currentbalance2;
  console.log("the total balance is:",totalBalance);
  $("#balance3").html(`$ ${totalBalance}`);
  }
})
