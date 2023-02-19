const inputCard = document.querySelector("#addTerm");
const saveButton = document.querySelector("#saveTerm");

let cardTerm = inputTerm.value;
let userIndex = 0;
let noteCards = [];


document.querySelector("#displayNoteCard").addEventListener("submit", (event) => {
    event.preventDefault();
    
    saveButton.addEventListener('click', (event) =>{
        alert("button clicked");
        if (saveButton.innerText == "📝") {
            saveButton.innerText = "💾";
            inputCard.removeAttribute("readonly");
            inputCard.focus();
        } else {
            saveButton.innerText = "📝";
            inputCard.setAttribute("readonly", "readonly");
        }
    });
});
