const inputCard = document.querySelector("#addTerm");
const saveButton = document.querySelector("#saveTerm");
const prevButton = document.querySelector("#prevCard");
const nextButton = document.querySelector("#nextCard");

let term = inputCard.value
let userIndex = 0;
let noteCards = [];

prevButton.addEventListener('click', (event) =>{
    event.preventDefault();
    userIndex -= 1;
    alert(userIndex);
});

nextButton.addEventListener('click', (event) =>{
    event.preventDefault();
    userIndex++;
    alert(userIndex);
});

saveButton.addEventListener('click', (event) =>{
    event.preventDefault();
    if (!term){
        if (saveButton.innerText == "📝") {
            saveButton.innerText = "💾";
            inputCard.setAttribute("value", term);
            noteCards[userIndex] = [term];
            inputCard.removeAttribute("readonly");
            inputCard.focus();
        } else {
            saveButton.innerText = "📝";
            inputCard.setAttribute("readonly", "readonly");
        }
    } else {
        alert("Enter a term!");
    }
});


