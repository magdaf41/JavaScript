let form = document.getElementById('newsletter-form');
let allAcceptChx = document.getElementById('allAccept');
console.log(allAcceptChx);



const validate = (event) => {

    event.preventDefault();
    console.log(`validate()`);
}

const allAccept = (event) => {
    let accept1 = document.getElementById('accept_1')
    console.log(accept1)
}



form.addEventListener('submit', validate);
allAcceptChx.addEventListener('change', allAccept);