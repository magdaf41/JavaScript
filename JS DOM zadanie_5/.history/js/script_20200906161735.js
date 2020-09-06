let form = document.getElementById('newsletter-form');
let allAcceptChx = document.getElementById('allAccept');
console.log(allAcceptChx);



const validate = (event) => {

    event.preventDefault();
    console.log(`validate()`);
}

const allAccept = (event) => {
    console.log("all accept")
}



form.addEventListener('submit', validate);
allAcceptChx.addEventListener('check', allAccept);