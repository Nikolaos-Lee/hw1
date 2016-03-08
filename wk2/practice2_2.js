//function expression   函數可以被當成變數宣告
//anonymous function    匿名函數
//First Class Function  把函數當成變數作為另一個函數的參數
//invoke                執行function expression 的函數  如example();
//IIFE                  Immediately Invoking Function Expression匿名函數宣告之後立即invoke(執行)



//function statement    一般函式
function greet(){
  console.log("hi");
}
greet();


//first-class
function logGreeting(fn){
  fn();
}
logGreeting(greet);


//function expression
var greetMe = function(){
  console.log('Hi,Tony!');
}
greetMe();
