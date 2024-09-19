document.getElementById('btn-cash-out')
    .addEventListener('click', function(event){
        event.preventDefault();
        const cashOutInput = document.getElementById('input-cash-out').value;
        const cashOutNumber = parseFloat(cashOutInput);
        const pinNumberInput = document.getElementById('input-cash-out-pin').value;

        if(pinNumberInput === '1234'){
            const balance = document.getElementById('account-balance').innerText;
            const balanceNumber = parseFloat(balance);
            const newBalance = balanceNumber - cashOutNumber;

            document.getElementById('account-balance').innerText = newBalance;
            console.log(balance);
        }
        else{
            alert('Failed to cashout! Please try later')
        }
        // console.log(cashOutNumber, pinNumberInput);
})