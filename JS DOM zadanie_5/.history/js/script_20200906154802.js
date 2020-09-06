let name = document.querySelector('[name="name"]');
let email = document.querySelector('[name="email"]');

console.log(name);

function validationForm() {
    let pole = document.form["name"].value;
    if (pole == "") {
        alert("Uzupełnij imię i nazwikos");
        return false;
    }
}