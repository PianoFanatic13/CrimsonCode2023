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
        else if (!time){
            alert("Please fill out a time!");
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

            const delContent = document.createElement('button');
            delContent.classList.add('delete');
            delContent.innerText = '-';

            
            taskContent.append(textBox);
            taskContent.append(editContent);
            taskContent.append(delContent);

            tasklist.appendChild(taskContent);
            
            numTasks++;
            delContent.addEventListener('click', (e) => {
                tasklist.removeChild(taskContent);
            });
        }
    });
});
