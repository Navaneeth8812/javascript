function printNum1(){
    document.getElementById('out').innerHTML=1;
    return 1;
}
let value1 = printNum1();
function printNum2(){
    document.getElementById('out').innerHTML=2;
    return 2;
}
let value2 =printNum2();

function addNum(){
    return value1+value2;
}
function subNum(){
    return printNum1()-printNum2();
}


