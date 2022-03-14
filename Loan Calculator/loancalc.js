function calc(event){
    // alert('Hello');
    // console.log(event);
    var principal=document.getElementById('amount').value;
    var rate=document.getElementById('rate').value;
    var time=document.getElementById('time').value;
    var amount=principal*(1+rate*time/(12*100));
    amount=amount.toFixed(2);
    // alert("Amount"+toString(amount));
    document.getElementById('pay').innerHTML="Amount to pay:$"+amount;
} 
