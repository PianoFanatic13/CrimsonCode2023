const inputCard = document.querySelector("#addTerm");
const saveButton = document.querySelector("#saveTerm");
const prevButton = document.querySelector("#prevCard");
const nextButton = document.querySelector("#nextCard");
const flipCard = document.querySelector("#flipCard");

document.getElementById("cardSide").innerText = "Terms/Questions";

console.log(inputCard);

let userIndex = 0;
let noteCard = [];

// to keep track of card side in flipCard
let num = 0;


prevButton.addEventListener('click', (event) =>{
    event.preventDefault();
    userIndex -= 1;
    document.getElementById("coutIndex").innerText = userIndex;
    inputCard.value = localStorage.getItem(userIndex);
    console.log(userIndex);

});

nextButton.addEventListener('click', (event) =>{
    event.preventDefault();
    userIndex += 1;
    document.getElementById("coutIndex").innerText = userIndex;
    inputCard.value = localStorage.getItem(userIndex);
    console.log(userIndex);
    
});

flipCard.addEventListener('click', (event) =>{
    event.preventDefault();

    let side = "Terms/Questions";
    if(num % 2 == 1){
        side = "Terms/Questions";
    } else {
        side = "Answer";
    }
    num++;
    document.getElementById("cardSide").innerText = side;
    inputCard.value = null;
});

saveButton.addEventListener('click', (event) =>{
    event.preventDefault();
    let term = inputCard.value;
    
    if (saveButton.innerText == "📝") {
        saveButton.innerText = "💾";

        localStorage.setItem(userIndex, term);
        console.log(localStorage.getItem(userIndex));

        inputCard.removeAttribute("readonly");
        inputCard.focus();
    } else {
        saveButton.innerText = "📝";
        inputCard.setAttribute("readonly", "readonly");
    }

});

