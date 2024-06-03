
let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'my phone', 'the car'];
let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];


function Aleatorio(array) {
    let indiceAleatorio = Math.floor(Math.random() * array.length);
    return array[indiceAleatorio];
}

function onload() {
    let whos = Aleatorio(who);
    let actions = Aleatorio(action);
    let whats = Aleatorio(what);
    let whens = Aleatorio(when);
    return `${whos} ${actions} ${whats} ${whens}.`;
}

document.addEventListener("DOMContentLoaded", function() {
    let divFrase = document.getElementById("excuse");
    divFrase.textContent = onload();
});
