const inputCard = document.querySelector("#addTerm");
const saveButton = document.querySelector("#saveTerm");
const prevButton = document.querySelector("#prevCard");
const nextButton = document.querySelector("#nextCard");
const flipCard = document.querySelector("#flipCard");
const delCard = document.querySelector("#delCard");

document.getElementById("cardSide").innerText = "Terms/Questions";

console.log(inputCard);

let userIndex = 0;
let noteCard = [];

// to keep track of card side in flipCard
let num = 0;


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

    let side = "Terms/Questions";
    if(num % 2 == 1){
        side = "Terms/Questions";
        inputCard.placeholder="Enter a term/question";
        localStorage.setItem(userIndex, JSON.stringify([null,inputCard.term]));
    } else {
        side = "Answer";
        inputCard.placeholder="Enter the answer";
        localStorage.setItem(userIndex, JSON.stringify([inputCard.term,null]));

    }
    num++;
    console.log(noteCard);
    document.getElementById("cardSide").innerText = side;
    inputCard.value = null;
});

delCard.addEventListener('click', (event) =>{
    event.preventDefault();

});

saveButton.addEventListener('click', (event) =>{
    event.preventDefault();
    let term = inputCard.value;
    let noteCard = [];
    
    if (saveButton.innerText == "📝") {
        saveButton.innerText = "💾";
        
        localStorage.setItem(userIndex,  JSON.stringify(noteCard));
 
        console.log(localStorage.getItem(userIndex));
        noteCard = JSON.parse(localStorage.getItem(userIndex));

        inputCard.removeAttribute("readonly");
        inputCard.focus();
    } else {
        saveButton.innerText = "📝";
        inputCard.setAttribute("readonly", "readonly");
    }

});

