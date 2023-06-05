// let total=0;

// function A(){
//     let num1 =document.getElementById("first").value;
//     let num2 =document.getElementById("second").value;
//     total=parseInt(num1) + parseInt(num2);
    
//     document.getElementById("result").value= String(total);
// }

// function S(){
//     let num1 =document.getElementById("first").value;
//     let num2 =document.getElementById("second").value;
//      total= parseInt(num1) -  parseInt(num2);
//     document.getElementById("result").value= String(total);
    
// }
// function M(){
//     let num1 =document.getElementById("first").value;
//     let num2 =document.getElementById("second").value;
//     total=parseInt(num1) * parseInt(num2);
//     document.getElementById("result").value= String(total);
// }
// function D(){
//     let num1 =document.getElementById("first").value;
//     let num2 =document.getElementById("second").value;
//      total=parseInt(num1) / parseInt(num2);
//     document.getElementById("result").value= String(total);
// }
// function performOperation(operator, num1, num2) 
//     switch (operator) {
//       case '+':
//         return num1 + num2;
//       case '*':
//         return num1 * num2;
//       case '-':
//         return num1 - num2;
//       case '/':
//         return num1 / num2;
//     }
    
// let result = performOperation('+', num1,num2);
// console.log(result); 

// result = performOperation('*', num1, num2);
// console.log(result); 

// result = performOperation('-', num1, num2);
// console.log(result);  

// result = performOperation('/', num1, num2);
// console.log(result)

function calculate(choice){
  let n1 = document.getElementById("first").value *1;
  let n2 = document.getElementById("second").value *1;
  var result;
  switch(choice){
    case 1:
      result = n1 + n2;
      break;
    case 2:
      result = n1 - n2;
      break;
    case 3:
      result = n1 * n2;
      break;
    case 4:
      result = n1 / n2;
      break;
  }
 document.getElementById("result").value = String(result);

}