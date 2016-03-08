//Arrow Function Expression 箭頭函數  省略寫法 使函數簡短
//可省略function()、return
//無引數（）=>
//單引數 x =>
//多引數 (x,y) =>
//function expression
var greetMe = function(){
  console.log("Hi Tony!");
}
greetMe();


//arrow function expression
greetSam= () =>console.log("Hi Sam!");
greetSam();

//arrow function expression with parameters
greetYou = name =>console.log("Hi$(name)!");
greetYouj("NTUE");

var square1 = function(num){return num*num};

var square2 = num=>{return num*num};

var square3 = num=>num*num;
