//scope 變數的使用範圍
//"use strict";可進入嚴格模式 不准許 test = 5; 沒有var的變數宣告
//宣告變數var 以函數為scope
//       let以block {}   LET需使用strict


var a=5;
var b=10;

if(a == 5){
  let a = 4;//scope inside{}
  var b = 1;//scope inside function

  console.log(a);  // 4
  console.log(b);  // 1



}


console.log(a);  // 5
console.log(b);  // 1
