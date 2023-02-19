function newTask()
{
    const inputName = document.querySelector("#newTask-Name");
    const inputTime = document.querySelector("#newTask-Time");
    
    document.querySelector("#newTask-Form").addEventListener("submit", function(event){
        event.preventDefault()
        const name = inputName.value;
        const time = inputTime.value;
        
        const paragraph = document.createElement('p');
        paragraph.innerText = name;
        document.body.appendChild(paragraph);
      });
      

    
        
    
}
