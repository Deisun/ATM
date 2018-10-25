const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
  })
  
  
var balance = 100.00;
//setBalance();
document.getElementById("balance").innerHTML = formatter.format(balance);


function addCash() {
    addAmount = parseFloat(document.getElementById("addAmount").value);
    
    balance += addAmount;

    setBalance();
}

function getCash() {
    removeAmount = parseFloat(document.getElementById("removeAmount").value);

    if (balance < removeAmount) {
        // do nothing   
    } else {
        balance -= removeAmount;
    }

    setBalance();

}


function setBalance() {
    // show initial balance
    document.getElementById("balance").innerHTML = formatter.format(balance);
}