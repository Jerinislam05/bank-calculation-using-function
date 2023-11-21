// step 1:
document.getElementById('btn-withdraw').addEventListener('click', function(){
    const withdrawField = document.getElementById('withdraw-field');

// step 2:
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

// step 3:
    withdrawField.value = '';

// step 4:
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const prevWithdrawTotalString = withdrawTotalElement.innerText;
    const prevWithdrawTotal = parseFloat(prevWithdrawTotalString);

// step 5:
    const newWithdrawTotal = prevWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = newWithdrawTotal;

// step 6:
    const balanceElement = document.getElementById('balance-total');
    const prevBalanceTotalString = balanceElement.innerText;
    const prevBalanceTotal = parseFloat(prevBalanceTotalString);
    
// step 7:
    const newBalanceTotal = prevBalanceTotal - newWithdrawAmount;
    balanceElement.innerText = newBalanceTotal;
})