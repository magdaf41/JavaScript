let form = document.getElementById('newsletter-form');
console.log(form);

const send = (event) => {
    event.preventDefault();
    let form = document.getElementById('newsletter-form');
    console.log(form);


let form = document.getElementById('form');
form.addEventListener('submit', send);
