const textarea = document.querySelector('textarea')
const addBtn = document.getElementById('addBtn')
const todoContainer = document.querySelector('.todo-container')

let todoList = []

// function initialLoad(){
//     if(!localStorage.getItem('todos')){return}
//     todoList=JSON.parse(localStorage.getItem('todos')).todoList
//     updateUI()
// }
// initialLoad()

function addTodo(){
    const todo = textarea.value
    console.log('add todo:', todo)
    if(!todo){
        return
    }
    todoList.push(todo)
    textarea.value=''
    updateUI()
}
function editTodo(index){
    textarea.value=todoList[index]
    todoList = todoList.filter((x, y)=>{
        if(index===y){
            return false
        }
        return true
    })
    updateUI()
}
function deleteTodo(index){
    todoList = todoList.filter((x, y)=>{
        if(index === y){
            return false
        }
        return true
    })
    updateUI()
}

function updateUI(){
    let newInnerHTML =''
    todoList.forEach((todoElement, todoIndex)=>{
        newInnerHTML+=`
            <div class="todo">
                <p>${todoElement}</p>
                <div class="button-container">
                <button class="icon-btn edit" onclick="editTodo(${todoIndex})">
                    <i class="fa-solid fa-pen-to-square"></i>
                </button>
                <button class="icon-btn" onclick="deleteTodo(${todoIndex})">
                    <i class="fa-solid fa-xmark"></i>
                </button>
           </div> 
        </div>
    `
    })
    todoContainer.innerHTML = newInnerHTML
    localStorage.setItem(('todos'), JSON.stringify({todoList}))
}

addBtn.addEventListener('click', addTodo)

