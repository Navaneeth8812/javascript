const addBtn = document.getElementById('addBtn')
const contentSec = document.querySelector('.items')
const textarea = document.querySelector('textarea')

let itemList = []

function deleteItem(index){
    itemList = itemList.filter((x,y)=>{
        if(index === y){
            return false
        }
        return true
    })
    updateUI();
}
function addItem(){
    let item = textarea.value
    if(!item){
        return
    }
    itemList.push(item)
    textarea.value=''
    updateUI()
}

function updateUI(){
    let newInnerHTML = ''
    itemList.forEach((elementItem, elementIndex) => {
        newInnerHTML += `
            <div class="item-sec">
            <div class="grocery">
                <p>${elementItem}</p>
                 <div class="btn-sec">
                <button onclick=deleteItem(${elementIndex})>
                    <i class="fa-solid fa-xmark"></i>
                </button>
            </div>
            </div>
            
        ` 
    });
    contentSec.innerHTML = newInnerHTML
}
addBtn.addEventListener('click', addItem)
