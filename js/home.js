// step:1 add event handler 
document.getElementById('btn-add-money')
    .addEventListener('click', function(event){
        // prevent page reload after form submit 
        event.preventDefault();
        // console.log('money add btn clicked');

        // step:2 get money & pin to be added to the account 
        const addMoneyInput = document.getElementById('input-add-money').value;
        const pinNumberInput = document.getElementById('input-pin-number').value;
        // console.log(addMoneyInput);
        // console.log(pinNumberInput);

        // step:3 varify pin number 
        if(pinNumberInput === '1234'){
            // console.log('add money complete'); 

            // step:4 get current balance 
            const balance = document.getElementById('account-balance').innerText;
            // console.log(balance);

            // step:5 add addMoneyInput with balance 
            const addMoneyNumber = parseFloat(addMoneyInput);
            const balanceNumber = parseFloat(balance);
            const newBalance = addMoneyNumber + balanceNumber;
            // console.log(newBalance);

            // step:6 update account balance 
            document.getElementById('account-balance').innerText = newBalance;
        }
        else{
            alert('failed to add monery! Please try again')
        }

    });