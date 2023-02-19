function newTask()
{
    const inputName = document.querySelector("#newTask-Name");
    const inputTime = document.querySelector("#newTask-Time");
    
    form.addEventListener('#addTask', (e) => {
        e.preventDefault(); 
        const name = inputName.value;
        const time = inputTime.value;
        
        const p1 = document.createElement('p1');
        p1.innerHTML = name;
        document.body.append(p1);
        
    });
}
