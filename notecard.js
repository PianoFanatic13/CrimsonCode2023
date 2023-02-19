const notecard = document.querySelector("#displayNoteCard");

let userIndex = 0;
let noteCards = [];

function newCard(){

    const cardElements = document.createElement('div');
    const query = document.createElement('input');
    query.classList.add('text');
    query.id = "newTerm";
    query.type = "text";
    query.placeholder = "Enter a term/question";

    const saveTerm = document.createElement('button');
    saveTerm.classList.add("edit");
    saveTerm.innerText = "💾";

    cardElements.append(query); 
    cardElements.append(saveTerm);          
    notecard.appendChild(cardElements);
}   


document.querySelector("#displayNoteCard").addEventListener("submit", (event) => {
    event.preventDefault();

    if (noteCards[userIndex] = null){
        newCard();
    }
    else {
        
    }
    

});