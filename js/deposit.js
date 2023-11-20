// step 1: add event listener to the deposit button

document.getElementById('btn-deposit').addEventListener('click', function(){

    // step 2: get the deposit amount from the deposit field
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;

    // step 2.5: convert the string amount to a number type
    const newDepositAmount = parseFloat(newDepositAmountString);

    // step 3: empty the amount from the input field after putting the amount
    depositField.value = '';

    // step 4: get the previous deposit total
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);

    // step 5: calculate new deposit total and  set the deposit total
    const newDepositTotal = previousDepositTotal + newDepositAmount;
    depositTotalElement.innerText = newDepositTotal;

    // step 6: get current balance total
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotalAmount = parseFloat(previousBalanceTotalString);

    // step 7: calculate the new balance and set it to the new balance amount
    const newBalanceTotal = previousBalanceTotalAmount + newDepositAmount;
    balanceTotalElement.innerText = newBalanceTotal;
})