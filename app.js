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

        span.addEventListener('mouseover', () =>{
            const randomColor1 = Math.floor(Math.random() * 255);
            const randomColor2 = Math.floor(Math.random() * 255);
            const randomColor3 = Math.floor(Math.random() * 255);

            span.style.backgroundColor = `rgba(${randomColor1}, ${randomColor2}, ${randomColor3})`;
        });


    })


    //resultText.innerHTML = results;
};

button.addEventListener('click', () => {
    resultText.innerHTML = `<p class ="text-info"> This is what I matched 🔥  </p>`;
    replaceText();
})