const notecard = document.querySelector("#displayNoteCard");

document.querySelector("#displayNoteCard").addEventListener("submit", (event) => {
    event.preventDefault();
    const cardContent = notecard.value;

    alert(cardContent);

});