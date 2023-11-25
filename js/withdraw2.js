// add withdraw button event handler
// get the withdraw amount by using getInputFieldValueById function
// get previous withdraw amount by using getTextElementValueById function
// calculate new withdraw total and set the value
// set new withdraw total by using setTextElementValueById function
// get previous balance total by using getTextElementValueById function


document.getElementById('btn-withdraw').addEventListener('click', function(){
    const newWithdrawAmount = getInputFieldById('withdraw-field');
    const previousWithdrawTotal = getTextElementValueById('withdraw-total');
    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    setTextElementValueById('withdraw-total', newWithdrawTotal);
    const previousBalanceTotal = getTextElementValueById('balance-total');
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    setTextElementValueById('balance-total', newBalanceTotal);
})