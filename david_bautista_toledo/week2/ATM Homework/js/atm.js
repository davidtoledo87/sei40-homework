
let $amount1; // define variable in the input
let currentbalance=0; // define current balance

let $amount2;
let currentbalance2=0;

// let totalBalance = currentbalance + currentbalance2;

// deposit function in check
$("#checkingDeposit").on("click",function(){
  console.log("Deposit button pressed");
  $amount1 = parseInt($("#checkingAmount").val());
  currentbalance = currentbalance + $amount1;
  console.log("you made a deposit of:",$amount1);
  console.log("you got now:", currentbalance);
  $("#balance1").html(currentbalance);
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
    $("#balance1").html(currentbalance);

    // if balance from checking and savigs is higher than the withdrawal
  // } else if (totalBalance>=$amount1){
  //     currentbalance = currentbalance - $amount1;
  //     currentbalance2 = -currentbalance -currentbalance2;
  //     currentbalance = 0;
  //     console.log("current balance is", currentbalance);
  //     console.log("savings balance is", currentbalance2);

      // if
      } else {
      console.log("You cant");
      $("<p> insufficient funds </p>").appendTo ("body")
      }

});

//deposit function in savings
$("#savingsDeposit").on("click",function(){
  console.log("Deposit button 2 pressed");
  $amount2 = parseInt($("#savingsAmount").val());
  currentbalance2 = currentbalance2 + $amount2;
  console.log("you made a deposit of:",$amount2);
  console.log("you got now:", currentbalance2);
  $("#balance2").html(currentbalance2);
})

//withdraw function in savings
$("#savingsWithdraw").on("click",function(){
  console.log("Withdraw button pressed");
  $amount2 = parseInt($("#savingsAmount").val());
  if (currentbalance2-$amount2>=0){
    currentbalance2 = currentbalance2 - $amount2;
    console.log("you made a withdraw of:",$amount2);
    console.log("you got now:", currentbalance2);
    $("#balance2").html(currentbalance2);
  } else {
    console.log("You cant");
  }
})
