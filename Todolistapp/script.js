const textarea = document.querySelector('textarea')
const addBtn = document.getElementById('addBtn')
const todoContainer = document.querySelector('.todo-container')

let todoList = []

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

function updateUI(){
    let newInnerHTML =''
    todoList.forEach((todoElement)=>{
        newInnerHTML+=`
            <div class="todo">
                <p>${todoElement}</p>
                <div class="button-container">
                <button class="icon-btn edit">
                    <i class="fa-solid fa-pen-to-square"></i>
                </button>
                <button class="icon-btn">
                    <i class="fa-solid fa-xmark"></i>
                </button>
           </div> 
        </div>
    `
    })
    todoContainer.innerHTML = newInnerHTML
}
addBtn.addEventListener('click', addTodo)

