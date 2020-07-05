const button = document.querySelector('button');
const textarea = document.querySelector('.textarea');
const resultText = document.querySelector('.result-text');


function replaceText () {
    const regex = /(\w+)/g;

    const str = textarea.value;

    const results = str.split(regex);

    console.log(results);

    results.forEach(result => {
        const span = document.createElement('span');
        span.innerHTML = result;
        resultText.appendChild(span);


    })


    //resultText.innerHTML = results;
};

button.addEventListener('click', () => {
    replaceText.innerHTML = `<p> This is what I matched 🔥  </p>`;
    replaceText();
})