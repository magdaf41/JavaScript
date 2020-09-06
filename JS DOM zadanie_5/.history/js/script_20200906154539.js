let name = document.querySelector(name='name');

console.log(name);
function validationForm() {
    let pole = document.form["name"].value;
    if (pole == "") {
        alert("Uzupełnij imię i nazwikos");
        return false;
    }
}