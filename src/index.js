import add from "./main";

document.querySelector('#submit').onclick = onClick;
document.querySelector('#reset').onclick = reset;


function onClick() {
    const textareaValue = document.getElementById("input").value;
    const outputArea = document.querySelector(".output")
    const errorArea = document.querySelector('.error')
    try {
        const result = add(textareaValue)
        outputArea.textContent = result;
    } catch(e) {
        outputArea.textContent = 'NA';
        errorArea.textContent = e.message;
    }
}

function reset() {
    document.querySelector('#input').value = ''
    document.querySelector('.output').textContent = ''
    document.querySelector('.error').textContent = ''
}