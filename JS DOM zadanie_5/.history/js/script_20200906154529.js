let name = document.querySelector(name='name');


function validationForm() {
    let pole = document.form["name"].value;
    if (pole == "") {
        alert("Uzupełnij imię i nazwikos");
        return false;
    }
}