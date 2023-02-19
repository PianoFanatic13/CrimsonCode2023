const tasklist = document.querySelector("#tasks")
const inputName = document.querySelector("#newTask-Name");
let numTasks = 0;

document.querySelector("#newTask-Form").addEventListener("submit", (event) => {
    event.preventDefault()
    const name = inputName.value;
    
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

        const delContent = document.createElement('button');
        delContent.classList.add('delete');
        delContent.innerText = '-';

        
        taskContent.append(textBox);
        taskContent.append(editContent);
        taskContent.append(delContent);

        tasklist.appendChild(taskContent);
        
        numTasks++;
        
        editContent.addEventListener('click', (event) =>{
            if (editContent.innerText == "+") {
                editContent.innerText = "Save";
                textBox.removeAttribute("readonly");
                textBox.focus();
            } else {
                editContent.innerText = "+";
                textBox.setAttribute("readonly", "readonly");
            }
        })

        delContent.addEventListener('click', (event) => {
            tasklist.removeChild(taskContent);
        });
    }
});
