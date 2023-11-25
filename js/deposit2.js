document.getElementById("btn-deposit").addEventListener("click", function () {
  const newDepositAmount = getInputFieldById("deposit-field");
  // get previous deposit total by id
  const previousDepositTotal = getInputFieldById("deposit-total");
  // calculate new deposit total
  const newDepositTotal = previousDepositTotal + newDepositAmount;
  // set deposit total value
  setTextElementValueById("deposit-total", newDepositTotal);
  // get previous balance by using function
  const previousBalanceTotal = getTextElementValueById("balance-total");
  const newBalanceTotal = previousBalanceTotal + newDepositAmount;
  setTextElementValueById("balance-total", newBalanceTotal);
});
