
function A(){
    let num1 =document.getElementById("first").value;
    let num2 =document.getElementById("second").value;
    let total=parseInt(num1)+parseInt(num2);
    document.getElementById("result").value= String(total);
}

function S(){
    let num1 =document.getElementById("first").value;
    let num2 =document.getElementById("second").value;
    let total=parseInt(num1)-parseInt(num2);
    document.getElementById("result").value= String(total);
}
function M(){
    let num1 =document.getElementById("first").value;
    let num2 =document.getElementById("second").value;
    let total=parseInt(num1) * parseInt(num2);
    document.getElementById("result").value= String(total);
}
function D(){
    let num1 =document.getElementById("first").value;
    let num2 =document.getElementById("second").value;
    let total=parseInt(num1)/parseInt(num2);
    document.getElementById("result").value= String(total);
}
