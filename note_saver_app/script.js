const textarea = document.querySelector('textarea')
const addBtn = document.getElementById('addBtn')
const bookContainer = document.querySelector('.notes-container')

let notesList = []
function editNote(index){
    textarea.value = notesList[index]
    notesList = notesList.filter((noteselement, notesIndex)=>{
        if(index==notesIndex){
            return false
        }
        return true
    })
    updateUI()
}
function deleteNote(index){
    notesList=notesList.filter((noteselement, notesIndex)=>{
        if(index==notesIndex){
            return false
        }
        return true
    })
    updateUI()
}

function addNote(){
    let notes = textarea.value
    if(!notes){
        return
    }
    notesList.push(notes)
    textarea.value =''
    updateUI()
}

function updateUI(){
    let newInnerHTML = ''
    notesList.forEach((noteselement, notesIndex)=>{
        newInnerHTML +=`
          <div class="books">
                <p>${noteselement}<p>
                <div class="btn-container">
                <button class="btn" onclick="editNote(${notesIndex})">
                     <i class="fa-solid fa-pen-to-square"></i>
                </button>
                <button class="btn" onclick="deleteNote(${notesIndex})">
                     <i class="fa-solid fa-xmark"></i>
                </button>
                </div> 
            </div>  
        `    
    })
    bookContainer.innerHTML = newInnerHTML
}
addBtn.addEventListener('click', addNote)