document.getElementById('btn-cash-out').addEventListener('click',function(event){
    event.preventDefault();
    const pin=getInputFieldValueById('inp-pin-cash-out');
    if(pin === "1234")
    {
        const amount_tmp=getInputFieldValueById('inp-amount-cash-out');
        const balance_tmp=getAttributeFieldValueById('balance-main');
        const amount=parseFloat(amount_tmp);
        const balance=parseFloat(balance_tmp);
          if(isNaN(amount_tmp)){
            alert('Failed to cashout');
            return ;
        }
        if(balance<amount)
        {
            alert('Insufficient balance');
        }
        else{
            const totalBalance=balance-amount;
            setAttributeValueById('balance-main',totalBalance);
            //Add to transaction history
            const div=document.createElement('div');
            div.classList.add('bg-yellow-300');
            div.innerHTML = `
              <h4 class="text-2xl font-bold my-2">Cash out</h4>
              <p>${amount} withdraw. New Balance ${totalBalance}</p>
            `
            document.getElementById('transaction-section').appendChild(div);
        }
    }
    else{
        alert('Wrong pin number');
    }
})