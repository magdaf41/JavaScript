

const send = (event) => {
    event.preventDefault();
    console.log("Wyślij");
}

let submit = document.getElementById('submit');
    console.log(submit);

submit.addEventListener('click', send);

// console.log(submit);



let a108 = document.getElementById('akademia108');
a108.addEventListener('click', (event) => {
    event.preventDefault();
    console.log(`Default action stopped`);
});