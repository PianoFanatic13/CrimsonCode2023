const inputCard = document.querySelector("#addTerm");
const saveButton = document.querySelector("#saveTerm");
const prevButton = document.querySelector("#prevCard");
const nextButton = document.querySelector("#nextCard");

let term = inputCard.value;
let userIndex = 0;
let noteCards = [];

prevButton.addEventListener('click', (event) =>{
    event.preventDefault();
    userIndex -= 1;
    console.log(userIndex);

});

nextButton.addEventListener('click', (event) =>{
    event.preventDefault();
    userIndex += 1;
    console.log(userIndex);
    
});

saveButton.addEventListener('click', (event) =>{
    event.preventDefault();
    if (!term){
        if (saveButton.innerText == "📝") {
            saveButton.innerText = "💾";
            window.localStorage.setItem(userIndex, term);
            console.log(window.localStorage.getItem(userIndex));
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

