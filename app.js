const api_url= "https://api.quotable.io/random";

const quote = document.getElementById("quote")
const author = document.getElementById("author")
const newQuoteBtn = document.getElementById("new_quote")
const tweetBtn = document.getElementById("new_tweet")

// console.log(newQuoteBtn);

async function getQuote(url) {
    try{
        // console.log("fetching data");
        const response = await fetch(url);
        let data = await response.json();
        console.log (data);
        quote.innerHTML= data.content;
        author.innerHTML= data.author;

    } catch (error){
        console.error("error", error);
    }
   
}

getQuote(api_url);

function getNewQuote(){
    // console.log("new quote button clicked");
    getQuote(api_url);
}

newQuoteBtn.addEventListener("click", getNewQuote);

function tweet()
{
    window.open("https://twitter.com/intent/tweet?text=" + quote.innerHTML + "----by" + " " + author.innerHTML, "Tweet Window", "width=800 height=400");
}

tweetBtn.addEventListener("click", tweet);