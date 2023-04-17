let quote2 = document.getElementById('text2');
//gets where the quote will be put
let author2 = document.getElementById('authorName2');
//gets where the author will be put
let button2 = document.getElementById('quote2');
//gets the generate quote button

const url = "http://localhost:3000/quotes";
//defines the url from which quotes will be fetched
const authorName2 = "Marcus Aurelius";
 //sets up the particular author name for which quotes will be gotten
  
let getQuote2 = () => {
  fetch(`${url}?author=${authorName2}`)
  //fetch request with a query parameter in the URL
    .then((data) => data.json())
    .then((items) => {
      const randomIndex = Math.floor(Math.random() * items.length);
      //gets a random index between 0 and the length of the db.json -1 then rounds 
      const item = items[randomIndex];
      quote2.innerText = item.text;
      author2.innerText = item.author;
    });
};
//event  listeners code
button2.addEventListener('click', getQuote2);
window.addEventListener("load", getQuote2);

let quote = document.getElementById('text');
let author = document.getElementById('authorName');
let button = document.getElementById('quote');


const authorName = "Seneca"; 

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


const authorName3 = "Epictetus"; 

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

  


  
  
  
  