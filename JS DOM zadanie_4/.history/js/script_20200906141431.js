

const send = (event) => {
    event.preventDefault();
    console.log("Default action stopped");
}

let submit = document.getElementById('submit');
    console.log(submit);

submit.addEventListener('click', send);

let name = document.getElementsByTagName('fname');
console.log(name);