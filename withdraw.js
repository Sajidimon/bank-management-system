document.getElementById('btn-withdraw').addEventListener('click', function () {
    const withdrawField = document.getElementById('withdraw-field');
    const newwithdrawString = withdrawField.value;

    const newWithdrawTotal = parseFloat(newwithdrawString);

    const withdrawTotalField = document.getElementById('withdraw-total');

    const previousWithdrawTotalString = withdrawTotalField.innerText;

    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

    withdrawTotalField.innerText = newWithdrawTotal;

    const balanceTotalField = document.getElementById('balance-total');

    const previousBalanceTotalString = balanceTotalField.innerText;

    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    if (newWithdrawTotal > previousBalanceTotal) {
        alert('goriber gorib eto tk diye ki korbi tui?')
        return;
    }

    const CurrentWithdrawTotal = newWithdrawTotal + previousWithdrawTotal;

    withdrawTotalField.innerText = CurrentWithdrawTotal;

    const NewBalanceTotal = previousBalanceTotal - newWithdrawTotal;

    balanceTotalField.innerText = NewBalanceTotal;



    withdrawField.value = '';
})