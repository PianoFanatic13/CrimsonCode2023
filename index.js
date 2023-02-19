function main()
{
    const tasklist = document.querySelector("#tasks")
    const inputName = document.querySelector("#newTask-Name");
    const inputTime = document.querySelector("#newTask-Time");
    
    document.querySelector("#newTask-Form").addEventListener("submit", function(event){
        event.preventDefault()
        const name = inputName.value;
        const time = inputTime.value;
        
        const taskContent = document.createElement('div');

        const textBox = document.createElement('input');
        textBox.classList.add('text');
        textBox.type = "text";
        textBox.value = name;
        textBox.setAttribute('readonly', 'readonly');

        tasklist.appendChild(textBox);
      });
}
