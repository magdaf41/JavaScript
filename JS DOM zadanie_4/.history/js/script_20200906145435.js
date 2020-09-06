

const send = (event) => {
    // event.preventDefault();
    // let fname = document.querySelector('[name = "fname"');
    // let lname = document.querySelector('[name ="lname"');
    // console.log(`Imię: ${fname.value}, Nazwisko: ${lname.value}` );
console.log(send);
}

let form = document.getElementById('form');
console.log(form);

form.addEventListener('submit', send);

