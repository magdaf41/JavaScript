

const send = (event) => {
    event.preventDefault();
    console.log("Default action stopped");
}

let submit = document.getElementById('submit');
    console.log(submit);

submit.addEventListener('click', send);

let form = document.getElementById('form');
console.log(form);

let name = document.getElementsById('form').firstElementChild;
console.log(name);

console.log(form.firstElementChild.firstElementChild.name);