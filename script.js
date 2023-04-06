let quote2 = document.getElementById('text2');
let author2 = document.getElementById('authorName2');
let button2 = document.getElementById('quote2');

const url = "http://localhost:3000/quotes";
const authorName2 = "Marcus Aurelius"; // replace with your desired author name

let getQuote2 = () => {
  fetch(`${url}?author=${authorName2}`)
    .then((data) => data.json())
    .then((items) => {
      const randomIndex = Math.floor(Math.random() * items.length);
      const item = items[randomIndex];
      quote2.innerText = item.text;
      author2.innerText = item.author;
    });
};

button2.addEventListener('click', getQuote2);
window.addEventListener("load", getQuote2);

let quote = document.getElementById('text');
let author = document.getElementById('authorName');
let button = document.getElementById('quote');


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

let quote3 = document.getElementById('text3');
let author3 = document.getElementById('authorName3');
let button3 = document.getElementById('quote3');


const authorName3 = "Epictetus"; // replace with your desired author name

let getQuote3 = () => {
  fetch(`${url}?author=${authorName3}`)
    .then((data) => data.json())
    .then((items) => {
      const randomIndex = Math.floor(Math.random() * items.length);
      const item = items[randomIndex];
      quote3.innerText = item.text;
      author3.innerText = item.author;
    });
};

button3.addEventListener('click', getQuote3);
window.addEventListener("load", getQuote3);

function submitComment() {
    // Get the values of the name and comment fields
    var name = document.getElementById("name").value;
    var comment = document.getElementById("comment").value;
    
    // Create a new list item with the name and comment
    var listItem = document.createElement("li");
    var text = document.createTextNode(name + ": " + comment);
    listItem.appendChild(text);
    
    // Add the new list item to the comment list
    var commentList = document.getElementById("commentList");
    commentList.appendChild(listItem);
    
    // Clear the name and comment fields
    document.getElementById("name").value = "";
    document.getElementById("comment").value = "";
  }

  