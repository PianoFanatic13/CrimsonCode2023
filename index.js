function newTask()
{
    const inputName = document.querySelector("#newTask-Name");
    const inputTime = document.querySelector("#newTask-Time");
        
    const name = inputName.value;
    const time = inputTime.value;
    
    let newDiv = document.createElement('div');
    document.body.appendChild(newDiv);
}
