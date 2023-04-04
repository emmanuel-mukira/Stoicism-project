let quote=document.getElementById('text');
let author=document.getElementById('author');
let button=document.getElementById('quote');

const url="https://stoic-quotes.com/api/quote";

let getQuote = ()=> {
    fetch(url)
    .then((data) => data.json())
    .then((item) => {
        quote.innerText=item.text;
        author.innerText=item.author;
    })
};

button.addEventListener('click',getQuote);
window.addEventListener("load",getQuote);