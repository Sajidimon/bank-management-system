document.getElementById('btn-deposit').addEventListener('click', function () {
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;

    const newDepositAmount = parseFloat(newDepositAmountString);

    const depositTotalField = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalField.innerText;

    const previousDepositTotal = parseFloat(previousDepositTotalString);

    depositTotalField.innerText = newDepositAmount;


    const CurrentDepositTotal = newDepositAmount + previousDepositTotal;

    depositTotalField.innerText = CurrentDepositTotal;


    const balanceTotalField = document.getElementById('balance-total');

    const previousBalanceTotalString = balanceTotalField.innerText;

    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    const CurrentBalanceTotal = previousBalanceTotal + newDepositAmount;

    balanceTotalField.innerText = CurrentBalanceTotal;





    depositField.value = '';



})