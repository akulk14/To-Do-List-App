// Variable declaration
const userInput = document.getElementById("user-input");
const addTaskBtn = document.getElementById("add-task");
const list = document.getElementById("list");

// Call alert
function showAlert(){
    alert("Enter the task before adding it in the list...");
}

//Add Task button function
addTaskBtn.addEventListener("click", function addTask(){
    //If no input is provided
    if (userInput.value === ""){
        addTaskBtn.onclick = showAlert();
    }
    //If input is provided
    else{
        let li = document.createElement("li");
        li.innerHTML = userInput.value;
        list.appendChild(li);
        let remove = document.createElement("span")
        remove.innerHTML = "\u00d7";
        li.appendChild(remove);
    }
    userInput.value="";
    taskRetain();
});

//List item operations
list.addEventListener("click", (e) => {
    //Mark task as complete
    if (e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }
    //Remove task
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
    taskRetain();
})

//Retain task list on reloading page
const taskRetain = () => {
    localStorage.setItem("data", list.innerHTML)
}
const showTask = () => {
    list.innerHTML = localStorage.getItem("data")
    
}
showTask();

//Enter key adds task
userInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter"){
        //If no input is provided
        if (userInput.value === ""){
            e.onclick = showAlert();
        }
        //If input is provided
        else{
            let li = document.createElement("li");
            li.innerHTML = userInput.value;
            list.appendChild(li);
            let remove = document.createElement("span")
            remove.innerHTML = "\u00d7";
            li.appendChild(remove);
        }
    }
        
})