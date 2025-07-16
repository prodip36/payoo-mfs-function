//get input value by id
function getInputFieldValueById(id){
    const value=document.getElementById(id).value;
    return value;
}

function getAttributeFieldValueById(id){
    const value=document.getElementById(id).innerText;
    return value;
}

function setAttributeValueById(id1,id2){
    document.getElementById(id1).innerText=id2;
    
}

function showSectionById(id){
    document.getElementById('container-add-money').classList.add('hidden');
    document.getElementById('container-cash-out').classList.add('hidden');
    document.getElementById('container-transaction').classList.add('hidden');
    document.getElementById(id).classList.remove('hidden');

}