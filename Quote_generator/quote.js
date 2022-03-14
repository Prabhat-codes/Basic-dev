var quotes=[
    {
        "author":"Prabhat Namdharani",
        "quote":"What is life, if not misery"
    },
    {
        "author":"Shroat Mehta",
        "quote":"Yaar kyu bt de raha hai"
    },
    {
        "author":"Keshav Kishor",
        "quote":"Bhai fir subah hogayi"
    },
    {
        "author":"Rishabh Agarwal",
        "quote":"Pool chalna hai?"
    },
    {
        "author":"Shrey Bihani",
        "quote":"Bhai aaja panja ladale"
    }
]

function randomSelect(arrayLength){
    return Math.floor(Math.random()*arrayLength);
}

function generate(){
    var random=randomSelect(quotes.length);
    // alert("Here");
    document.getElementById("quote").innerHTML='"'+quotes[random].quote+'"';
    // console.log(quotes[random].author);
    document.getElementById("author").innerHTML='-'+quotes[random].author+'"';
}
