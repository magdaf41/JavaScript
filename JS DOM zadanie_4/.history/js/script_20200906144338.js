

const send = (event) => {
    event.preventDefault();
    let fname = document.querySelector('[name = "fname"');
    let lname = fname.nextElementSibling;
    console.log(fname);
}

let form = document.getElementById('form');
console.log(form);

form.addEventListener('click', send);

    // let fname = form.firstElementChild.firstElementChild.name;
    // console.log(fname);

    // let lname = form.firstElementChild.nextElementSibling.nextElementSibling.firstElementChild.name;
    // console.log(lname);
