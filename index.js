window.addEventListener('load', () => {

    const tasklist = document.querySelector("#tasks")
    const inputName = document.querySelector("#newTask-Name");
    const inputTime = document.querySelector("#newTask-Time");
    let numTasks = 0;
    
    document.querySelector("#newTask-Form").addEventListener("submit", (event) => {
        event.preventDefault()
        const name = inputName.value;
        const time = inputTime.value;
        
        if (!name){
            alert("Please fill out a task!");
        }
        else{
            const taskContent = document.createElement('div');

            const textBox = document.createElement('input');
            textBox.classList.add('text');
            textBox.id = numTasks;
            textBox.type = "text";
            textBox.value = name;
            textBox.setAttribute('readonly', 'readonly');

            const editContent = document.createElement('button');
            editContent.classList.add('edit');
            editContent.innerText = '+';
            
            

            taskContent.append(textBox);
            taskContent.append(editContent);

            tasklist.appendChild(taskContent);

            numTasks++;
        }
    });
});
