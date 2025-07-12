document.getElementById('btn-cash-out').addEventListener('click',function(event){
    event.preventDefault();
    const pin=getInputFieldValueById('inp-pin-cash-out');
    if(pin === "1234")
    {
        const amount_tmp=getInputFieldValueById('inp-amount-cash-out');
        const balance_tmp=getAttributeFieldValueById('balance-main');
        const amount=parseFloat(amount_tmp);
        const balance=parseFloat(balance_tmp);
        if(balance<amount)
        {
            alert('Insufficient balance');
        }
        else{
            const totalBalance=balance-amount;
            setAttributeValueById('balance-main',totalBalance);
        }
    }
    else{
        alert('Wrong pin number');
    }
})