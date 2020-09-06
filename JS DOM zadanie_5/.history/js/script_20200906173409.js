let form = document.getElementById('newsletter-form');
let allAcceptChx = document.getElementById('allAccept');


const validate = (event) => {

    let txtName = document.getElementById('name')
    let txtEmail = document.getElementById('email');
    let accept1 = document.getElementById('accept_1');
    let errors = document.getElementById('errors');

    errors.innerHTML = "";

    if(txtName.value.trim() === "")  {
        let liError = document.createElement('li')
        liError.innerText = "Wpisz imię i nazwisko!"

        errors.appendChild(liError);
    }

    if(txtEmail.value.includes('@')) {
        let liError = document.createElement('li')
        liError.innerText = "Adres email musi zawierać znak '@'"

        errors.appendChild(liError);
    }

    if(txtEmail.value.trim() === "") {
        let liError = document.createElement('li')
        liError.innerText = "Wpisz adres email!"

        errors.appendChild(liError);
    }

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