document.getElementById('add-money').addEventListener('click',function(event){
    event.preventDefault();
    // console.log("working");
    const pin=getInputFieldValueById('inp-pin');
  
    if(pin==="1234"){
        const amount=getInputFieldValueById('inp-amount');
        if(isNaN(amount)){
            alert('Failed to add money');
            return ;
        }
        const balance=getAttributeFieldValueById('balance-main');
       
        const totalAmount=parseFloat(amount)+parseFloat(balance);
        //  console.log(totalAmount);
         setAttributeValueById('balance-main',totalAmount);
         //add to transaction history
        
        const para= document.createElement('p');
        para.innerText=`Added: ${amount}Tk. New Balance: ${totalAmount}Tk.`;
        console.log(para.innerText);
         document.getElementById('transaction-section').append(para);
    }
    else{
        alert('Wrong pin number');
    }
})