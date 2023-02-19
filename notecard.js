const inputCard = document.querySelector("#addTerm");
const prevButton = document.querySelector("#prevCard");
const nextButton = document.querySelector("#nextCard");
const flipCard = document.querySelector("#flipCard");
const delCard = document.querySelector("#delCard");
const newTerm = document.querySelector("#newTerm");
const newAnsw = document.querySelector("#newAnswer");

document.getElementById("cardSide").innerText = "Terms/Questions";

let userIndex = 0;
let cardContent = ["Enter a term/question", "Enter an answer"];

// to keep track of card side in flipCard
let num = 0;
document.querySelector("#newCard").addEventListener("submit", (event) => {
    
    event.preventDefault();
    let cardContent = [];
    document.getElementById("userIndex").value = userIndex;
    cardContent[0] = newTerm.value;
    cardContent[1] = newAnsw.value;
    
    localStorage.setItem(userIndex, JSON.stringify(cardContent));
});

prevButton.addEventListener('click', (event) =>{
    event.preventDefault();
    userIndex -= 1;
    document.getElementById("userIndex").value = userIndex;
    
    cardContent = JSON.parse(localStorage.getItem(userIndex));
    if (sideState(num) == "term"){
        inputCard.removeAttribute("readonly");
        inputCard.value = cardContent[0];
        inputCard.setAttribute("readonly", "readonly");
    } else if (sideState(num) == "answer"){
        inputCard.removeAttribute("readonly");
        inputCard.value = cardContent[1];
        inputCard.setAttribute("readonly", "readonly");
    }
    num++;
    console.log(userIndex);
});

nextButton.addEventListener('click', (event) =>{
    event.preventDefault();
    userIndex += 1;
    document.getElementById("userIndex").value = userIndex;

    cardContent = JSON.parse(localStorage.getItem(userIndex));

    console.log(userIndex);
    if (sideState(num) == "term"){
        inputCard.removeAttribute("readonly");
        inputCard.value = cardContent[0];
        inputCard.setAttribute("readonly", "readonly");
    } else if (sideState(num) == "answer"){
        inputCard.removeAttribute("readonly");
        inputCard.value = cardContent[1];
        inputCard.setAttribute("readonly", "readonly");
    }
    num++;
});

function sideState(num){
    if(num % 2 == 1){
        return "term";
    } else {
        return "answer";
    }
}

flipCard.addEventListener('click', (event) =>{
    event.preventDefault();
    
    let side = "Terms/Questions";

    if (sideState(num) == "term"){
        side = "Terms/Questions";
    } else if (sideState(num) == "answer"){
        side = "Answer";
    }
    num++;
    
    document.getElementById("cardSide").innerText = side;
});

delCard.addEventListener('click', (event) =>{
    event.preventDefault();
    localStorage.removeItem(userIndex);

});



