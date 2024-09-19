
// for add money btn
document.getElementById('btn-show-add-money')
    .addEventListener('click', function(){
        document.getElementById('add-money-form').classList.remove('hidden');
        document.getElementById('cash-out-form').classList.add('hidden');
    });


// for cash out btn 
document.getElementById('btn-show-cash-out')
    .addEventListener('click', function(){
        document.getElementById('cash-out-form').classList.remove('hidden');
        document.getElementById('add-money-form').classList.add('hidden');
        
    });