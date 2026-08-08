let userName;
const textarea = document.querySelector('input')
 
//  userName = window.prompt("whats you name")
//  console.log("well, hello ",userName)

document.getElementById('sb-btn').onclick = function(){
    userName =document.getElementById('usin').value;
    document.getElementById("myh").textContent=`${userName}`
    textarea.value=''
}
