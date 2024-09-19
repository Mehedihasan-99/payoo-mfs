// console.log('Hello')
// step:1 set event handler
// document.getElementById('btn-login').addEventListener('click', function(event){
//     // step:2 prevent Default behavior(prevelent reloading browser)
//     event.preventDefault();
//     console.log('login button clicked');

//     // step:3 get the phone number 
//     const phoneNumber = document.getElementById('phone-number').value;
//     const pinNumber = document.getElementById('pin-number').value;
//     console.log(phoneNumber, pinNumber);

//     // step:4 condition /
//     if(phoneNumber === '11'){
//         console.log(Done)
//     }
//     else{
//         console.log('incurret ')
//     }
// })


// step:1 set event handler
document.getElementById('btn-login')
    .addEventListener('click', function(event){
    // step:2 prevent Default behavior(prevelent reloading browser)
    event.preventDefault(); 
    // console.log('btn clicked');

    // step:3 get the phone number & pin number
    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-number').value;
    // console.log(phoneNumber, pinNumber);

    // step:4 validate phone & pin
    // this is temporary
    if(phoneNumber === '5' && pinNumber === '1234'){
        console.log('you are logged in');
        window.location.href='/home.html';

        // step:5 allow user to use the website 
    }
    else{
        alert('Wrong phone number or pin')
    }
})
