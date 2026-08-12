const addBtn = document.getElementById('addBtn')
const contentSec = document.querySelector('.items')
const item = document.querySelector('textarea')

let itemList = []

function addItem(){
    item = textarea.value;
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
            <div class="grocery">
                <h3>Items</h3>
                <p>${elementItem}</p>
                 <div class="btn-sec">
                <button onclick=deleteItem(${elementIndex})>
                    <i class="fa-solid fa-xmark"></i>
                </button>
            </div>
        ` 
    });
    contentSec.innerHTML = newInnerHTML
}
addBtn.addEventListener('click', addItem)
