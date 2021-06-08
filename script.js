let addButton = document.getElementById("add-button");
addButton.addEventListener("click", addToDoItem);
function addToDoItem(){
    let itemText = toDoEntryBox.Value;
    newToDoItem(itemText, false);
}

let clearButton = document.getElementById("clear-completed-button");
clearButton.addEventListener("click", clearCompletedToDoItems());
function clearCompletedToDoItems(){
    var completedItems = toDoList.getElementsByClassName("completed");
    while(completedItems.length > 0){
        completedItems.item(0).remove();
    }
}

let emptyButton = document.getElementById("empty-button");
emptyButton.addEventListener("click", emptyList());
function emptyList(){
    var toDoItems = toDoList.children;
    while(toDoItems.length > 0){
        toDoItems.item(0).remove();
    }
}

let saveButton = document.getElementById("save-button");
saveButton.addEventListener("click", saveList());
function saveList(){
    let toDos = [];

    for(let i = 0; i < toDoList.children.length; i++){
        let toDo = toDoList.children.item(i);

        let toDoInfo = {
            "task": toDo.innerText,
            "completed": toDo.classList.contains("completed")
        };
        toDos.push(toDoInfo);
    }
    localStorage.setItem("toDos", JSON.stringify(toDos));
}

let toDoEntryBox = document.getElementById("todo-entry-box");
let toDoList = document.getElementById("todo-list");
function newToDoItem(itemText, completed) {
    let toDoItem = document.createElement("li");
    let toDoText = document.createTextNode(itemText);//text container go ispolnuva elementot <li>

    if(completed){
        toDoItem.classList.add("completed");
    }

    toDoList.appendChild(toDoItem);
    toDoItem.addEventListener("dblclick", toggleToDoItemState)
}
function toggleToDoItemState(){
    if(this.classList.contains("completed")){
        this.classList.remove("completed");
    }
    else{
        this.classList.add("completed");
    }
}
var myArray = [];
myArray.push("something to store");
myArray.push("something else to store");
alert(myArray[0]);
function loadList(){
    
}
