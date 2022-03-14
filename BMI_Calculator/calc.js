function Calculate(){
    height=document.getElementById('height').value/100;
    weight=document.getElementById('weight').value;
    console.log("height"+height+" weight"+weight)
    var BMI=weight/(height*height);
    document.getElementById('result').innerHTML="BMI:"+BMI;
}
