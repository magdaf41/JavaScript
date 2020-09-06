const setBackground = () => {
    let firstParagraph = document.querySelector(".first");
    let secondParagraph = document.querySelector(".second");

    // firstParagraph.style.backgroundColor = "red";
    // secondParagraph.style.backgroundColor = "yellow"
    firstParagraph.classList.add('bg-red');
    secondParagraph.classList.add('bg-yellow');
}

let button = document.getElementById('setBackground');
console.log(button);

button.addEventListener('click', setBackground);

