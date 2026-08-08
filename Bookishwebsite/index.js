const textarea = document.querySelector('textarea')
const addBtn = document.getElementById('addBtn')
const bookContainer = document.querySelector('.book-container')
let bookList = []

function initialLoad(){
    if(!localStorage.getItem('todos')){
        return
    }
    bookList = JSON.parse(localStorage.getItem('todos')).bookList
}
initialLoad()

function addBook(){
    const book = textarea.value
    console.log('add todo:', book)
    if(!book){
        return
    }
    bookList.push(book)
    textarea.value=''
    updateUI()
}
function editBook(index){
    textarea.value= bookList[index]
    bookList = bookList.filter((bookelement, bookIndex)=>{
        if(bookIndex==index){
            return false
        }
        return true
    })
    updateUI()
}
function deleteBook(index){
    bookList = bookList.filter((bookelement, bookIndex)=>{
        if(bookIndex==index){
            return false
        }
        return true
    })
    updateUI()
}
function updateUI(){
    let newInnerHTML = ''
    bookList.forEach((bookelement, bookIndex)=>{
    newInnerHTML +=`
        <div class="books">
                <p>${bookelement}</p>
                <div class="btn-container">
                <button class="btn" onclick="editBook(${bookIndex})">
                     <i class="fa-solid fa-pen-to-square"></i>
                </button>
                <button class="btn" onclick="deleteBook(${bookIndex})">
                     <i class="fa-solid fa-xmark"></i>
                </button>
                </div>
    `
})
bookContainer.innerHTML = newInnerHTML
localStorage.setItem('todos',JSON.stringify({bookList}))
}
addBtn.addEventListener('click', addBook)
