const meme = document.getElementById('meme');
const titleMEME = document.getElementById('title');
const getMemeBtn = document.getElementById('get-meme-btn');

const url = 'https://meme-api.com/gimme';


const getMeme = () => {
    fetch(url)
    .then(res => res.json())
    .then(data => {
        meme.setAttribute("src", data.url);
        titleMEME.innerHTML = data.title;
    })
}

getMeme();
getMemeBtn.addEventListener('click', getMeme);