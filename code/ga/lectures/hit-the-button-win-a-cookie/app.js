// CACHING CONTENT

const bodyPage = document.querySelector('body');
const cookie = document.querySelector('button');
const text = document.querySelector('h1');

// FUNCTIONS   

cookie.addEventListener('click', () => {
    const text = document.createElement('h1');
    text.textContent = 'You won a cookie!';
    bodyPage.appendChild(text)
})
