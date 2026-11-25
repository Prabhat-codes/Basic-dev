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

let previous = -1;

// Picks any quote except the one already showing.
function randomSelect(length){
    if (previous < 0) return Math.floor(Math.random() * length);
    const index = Math.floor(Math.random() * (length - 1));
    return index < previous ? index : index + 1;
}

function generate(){
    previous = randomSelect(quotes.length);
    const { quote, author } = quotes[previous];
    document.getElementById("quote").textContent = `"${quote}"`;
    document.getElementById("author").textContent = `- ${author}`;
}

document.getElementById("btn").addEventListener("click", generate);
