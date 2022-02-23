const jsonButton = document.querySelector('#generate');
const display = document.querySelector('#displayContainer');
const collection = ['Another', 'More', 'Next', 'Continue', 'Keep going', 'Click me', 'A new one'];

const formatJson = (res) => {
    const resJson = JSON.stringify(res);
    let counter = 0;
    return resJson
        .split('')
        .map((char) => {
            switch (char) {
                case ',':
                    return `,\n${' '.repeat(counter * 2)}`;
                case '{':
                    counter += 1;
                    return `{\n${' '.repeat(counter * 2)}`;
                case '}':
                    counter -= 1;
                    return `\n${' '.repeat(counter * 2)}}`;
                default:
                    return char;
            }
        })
        .join('');
};

const renderResponse = (jsonResponse) => {
    const jsonSelection = Math.floor(Math.random() * 10);
    display.innerHTML = `<pre>${formatJson(jsonResponse[jsonSelection])}</pre>`;
};

const changeButton = () => {
    const newText = Math.floor(Math.random() * 7);
    jsonButton.innerHTML = `${collection[newText]}!`;
};

const generateJson = () => {
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.onreadystatechange = () => {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            renderResponse(xhr.response);
            changeButton();
        }
    };
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
    xhr.send();
};

jsonButton.addEventListener('click', generateJson);
