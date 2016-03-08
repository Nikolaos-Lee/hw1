//scope chain 函數尋找變數的路徑
//variable hoisting 變數提升 javascript 會將所有local變數宣告為未定義並放到程式最前
var firstname = 'Simon';
var addSurname = () =>{
  var surname = 'Holmes';
  var fullname = firstname+''+surname;
  console.log(fullname);
}
//     Simon Holmes


//version 2
var firstname='Simon'
var addSurname = () =>{
  var firstname;
  var surname= "Holmes";
  var fullname = firstname + "" +surname;
  firstname = "David";
  console.log(fullname);
}
