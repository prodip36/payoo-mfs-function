document.getElementById('btn-log-in').addEventListener('click',function(event){
    event.preventDefault();
    
    const mobile=getInputFieldValueById('inp-mobile-num');
    const pin=getInputFieldValueById('inp-pin');
    console.log(mobile);
    //pin check
    if(mobile==="01860931442" && pin==="1234"){
        window.location.href='home.html';
    }
    else{
        alert('Wrong mobile or pin number');
    }
})