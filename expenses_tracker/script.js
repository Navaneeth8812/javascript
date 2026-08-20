const addedItem = document.querySelector('.added-items')
const textarea = document.querySelector('textarea')
const addBtn = document.getElementById('addBtn')
const amountInp = document.getElementById('amt')

let itemList = []
function addTransaction(){
    const desc = textarea.value
    const amount = amountInp.value

    const trans = {
        description: desc,
        amount: amount
    }
    if(!addedItem){
        return
    }
    itemList.push(trans)
    textarea.value = ''
    amountInp.value = ''
    updateUI()
}
function deleteTrans(index){
    itemList = itemList.filter((x,y)=>{
        if(index===y){
            return false
        }
        return true
    })
    updateUI()
}
function updateUI(){
    let newinnerHTML = ''
    itemList.forEach((trans, elementIndex)=>{
        newinnerHTML += `
        <div class="btn-container">
        <p>${trans.description}</p>
         <p>${trans.amount}</p>

        <div>
        <button class="btn" onclick=deleteTrans(${elementIndex})>
            <i class="fa-solid fa-xmark"></i>
        </button>
       </div>
       <div>
        `
    })
    addedItem.innerHTML = newinnerHTML
}
addBtn.addEventListener('click', addTransaction)
