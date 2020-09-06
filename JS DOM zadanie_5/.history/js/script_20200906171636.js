let form = document.getElementById('newsletter-form');
let allAcceptChx = document.getElementById('allAccept');
console.log(allAcceptChx);

const validate = (event) => {

    event.preventDefault();
    console.log(`validate()`);
}

const allAccept = (event) => {
    let accept1 = document.getElementById('accept_1');
    let accept2 = document.getElementById('accept_2');

    accept1.checked = event.target.checked;
    accept2.checked = event.target.checked;
    // console.log(event.target.checked);
    accept1.disabled = event.target.checked;
    accept2.disabled = event.target.checked;
}



form.addEventListener('submit', validate);
allAcceptChx.addEventListener('change', allAccept);