const inputCard = document.querySelector("#addTerm");
const saveButton = document.querySelector("#saveTerm");
const prevButton = document.querySelector("#prevCard");
const nextButton = document.querySelector("#nextCard");
const flipCard = document.querySelector("#flipCard");

console.log(inputCard);

let userIndex = 0;
let noteCard = [];

prevButton.addEventListener('click', (event) =>{
    event.preventDefault();
    userIndex -= 1;
    inputCard.value = localStorage.getItem(userIndex);
    console.log(userIndex);

});

nextButton.addEventListener('click', (event) =>{
    event.preventDefault();
    userIndex += 1;
    inputCard.value = localStorage.getItem(userIndex);
    console.log(userIndex);
    
});

flipCard.addEventListener('click', (event) =>{
    event.preventDefault();
    inputCard.value = 'hello';
});

saveButton.addEventListener('click', (event) =>{
    event.preventDefault();
    let term = inputCard.value;
    
    if (!term){
        alert("Enter a term!");
    } else {
        
        if (saveButton.innerText == "📝") {
            saveButton.innerText = "💾";

            document.getElementById("userIndex").innerText = userIndex;

            localStorage.setItem(userIndex, term);
            console.log(localStorage.getItem(userIndex));

            inputCard.removeAttribute("readonly");
            inputCard.focus();
        } else {
            saveButton.innerText = "📝";
            inputCard.setAttribute("readonly", "readonly");
        }
    }
});

