

const send = (event) => {
    event.preventDefault();
    console.log("Default action stopped");
}

let submit = document.getElementById('submit');
    console.log(submit);

submit.addEventListener('click', send);

let form = document.getElementById('form');
console.log(form);

let fname = form.firstElementChild.firstElementChild.name;
console.log(fname);

// let lname = form.lastElementChild.previousElementSibling.previousElementSibling.firstElementChild.name;
// console.log(lname);

let lname = form.firstElementChild.nextElementSibling.nextElementSibling;
console.log(lname);