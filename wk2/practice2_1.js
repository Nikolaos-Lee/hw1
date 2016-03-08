//一般字串  用加法符號的變數與字串組合
var name = "DTD";
var age=10;
console.log("My name is" + name + ",and My age is" + age);


//範本字串  用 $()取代加法  避免重複“”＋的麻煩
var name = "DTD";
var age=10;
console.log("My name is $(name),and My age is$(age)");
