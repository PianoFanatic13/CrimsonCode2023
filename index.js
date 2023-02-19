function main()
{
    const tasklist = document.querySelector("#tasks")
    const inputName = document.querySelector("#newTask-Name");
    const inputTime = document.querySelector("#newTask-Time");
    let numTasks = 0;
    
    document.querySelector("#newTask-Form").addEventListener("click", function(event){
        event.preventDefault()
        const name = inputName.value;
        const time = inputTime.value;
        
        const taskContent = document.createElement('div');

        const textBox = document.createElement('input');
        textBox.classList.add('text');
        textBox.id = numTasks;
        textBox.type = "text";
        textBox.value = name;
        textBox.setAttribute('readonly', 'readonly');

        taskContent.append(textBox);

        tasklist.appendChild(taskContent);

        numTasks++;
      });
}
