let quote = document.getElementById('text');
let author = document.getElementById('author');
let button = document.getElementById('quote');

const url = "http://localhost:3000/quotes";
const authorName = "Seneca"; // replace with your desired author name

let getQuote = () => {
  fetch(`${url}?author=${authorName}`)
    .then((data) => data.json())
    .then((items) => {
      const randomIndex = Math.floor(Math.random() * items.length);
      const item = items[randomIndex];
      quote.innerText = item.text;
      author.innerText = item.author;
    });
};

button.addEventListener('click', getQuote);
window.addEventListener("load", getQuote);


