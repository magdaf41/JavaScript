let form = document.getElementById('newsletter-form');



const validate = (event) => {

    event.preventDefault();
    console.log(`validate()`);
}

const allAccept = (event) => {
    console.log("all accept")
}

form.addEventListener('submit', validate);
