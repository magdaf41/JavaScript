

const send = (event) => {
    event.preventDefault();
    let form = document.getElementById('newsletter-form');
    console.log(form);
    form.addEventListener('submit', send);
}


form.addEventListener('submit', send);
