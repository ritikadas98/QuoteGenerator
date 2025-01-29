const api_url= "https://api.quotable.io/random";

const quote = document.getElementById ("quote")
const author = document.getElementById ("author")

async function getQuote(url) {
    const response = await fetch(url);
    let data = await response.json();
    console.log (data);
    quote.innerHTML= data.content;
    author.innerHTML= data.author;
    event.preventDefault()
}

getQuote(api_url);


function tweet()
{
    window.open("https://twitter.com/intent/tweet?text=" + quote.innerHTML + "----by" + " " + author.innerHTML, "Tweet Window", "width=800 height=400");
}