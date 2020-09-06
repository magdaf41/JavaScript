let form = document.getElementById('form');
let name = document.querySelector('[name="name"]');
let email = document.querySelector('[name="email"]');

console.log(form);
console.log(name);
console.log(email);

form.addEventListener('submit', (e) => {
    e.preventDefault()
} )

// function validationForm() {
//     let pole = document.form["name"].value;
//     if (pole == "") {
//         alert("Uzupełnij imię i nazwikos");
//         return false;
//     }
// }