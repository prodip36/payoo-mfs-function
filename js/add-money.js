document.getElementById('add-money').addEventListener('click',function(event){
    event.preventDefault();
    // console.log("working");
    const pin=getInputFieldValueById('inp-pin');
  
    if(pin==="1234"){
        const amount=getInputFieldValueById('inp-amount');
        
        const balance=getAttributeFieldValueById('balance-main');
       
        const totalAmount=parseFloat(amount)+parseFloat(balance);
         console.log(totalAmount);
         setAttributeValueById('balance-main',totalAmount);
    }
    else{
        alert('Wrong pin number');
    }
})