let form = document.getElementById('newsletter-form');



const validate = (event) => {

    event.preventDefault();
    console.log(`validate()`);
}

form.addEventListener('submit', validate);
