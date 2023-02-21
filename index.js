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
        editContent.innerText = '📝';

        const delContent = document.createElement('button');
        delContent.classList.add('delete');
        delContent.innerText = '✅';  

        
        taskContent.append(textBox);
        taskContent.append(editContent);
        taskContent.append(delContent);

        tasklist.appendChild(taskContent);
        
        numTasks++;
        
        editContent.addEventListener('click', (event) =>{
            if (editContent.innerText == "📝") {
                editContent.innerText = "💾";
                textBox.removeAttribute("readonly");
                textBox.focus();
            } else {
                editContent.innerText = "📝";
                textBox.setAttribute("readonly", "readonly");
            }
        });

        delContent.addEventListener('click', (event) => {
            tasklist.removeChild(taskContent);
        });
    }
});

// timer
var start = document.getElementById('start');
var reset = document.getElementById('reset');

var hour = document.getElementById("hour");
var minute = document.getElementById("minute");
var second = document.getElementById("sec");

let startTimer = undefined;

function timer(){
    if(hour.value == 0 && minute.value == 0 && second.value == 0){
        hour.value = 0;
        minute.value = 0;
        second.value = 0;
    } else if(second.value != 0){
        second.value--;
    } else if(minute.value != 0 && second.value == 0){
        second.value = 59;
        minute.value--;
    } else if(hour.value != 0 && minute.value == 0){
        minute.value = 59;
        second.value = 59
        hour.value--;
    }
    return;
}

//function for when timer is reset, it stops the interval
function stopInterval() {
    clearInterval(startTimer);
}


start.addEventListener('click', function(){
    if(document.getElementById('start').innerText == "▶"){
        function startInterval(){
            startTimer = setInterval(function() {
                timer();
            }, 1000);
        }
        document.getElementById('start').innerText = "⏸";
        startInterval();
    } else {
        document.getElementById('start').innerText = "▶";
        stopInterval();
    }
   
})

reset.addEventListener('click', function(){
    hour.value = 0;
    minute.value = 0;
    second.value = 0;
    document.getElementById('start').innerText = "▶";
    //calls the function for when reset button is called
    stopInterval()
})


