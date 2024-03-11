const getQuote = document.getElementById('get-quote');
const quote = document.getElementById('quote');
const author = document.getElementById('author');

const url = 'https://api.quotable.io/random';

const getRandomQuote = () => {
    fetch(url)
    .then(res => res.json())
    .then(data => {
        quote.innerHTML = '`` ' + data.content + '``';
        author.innerHTML = '~' + data.author;
    });
}

getRandomQuote();
getQuote.addEventListener('click', getRandomQuote);