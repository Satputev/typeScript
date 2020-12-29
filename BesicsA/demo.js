var backtick = "Angular"; //backtick symbol example
console.log(backtick);
var dubqu = "mean"; //double quotes string example
console.log(dubqu);
var squots = 'mern'; //single quote string ex
console.log(squots);
var dec = 101; //decimal no
console.log(dec);
var doub = 1020.20; //double no
console.log(doub);
var hexa = 0xac; //hexadecimal no
console.log(hexa);
var oct = 81; //octal no
console.log(oct);
var bin = 011101; //binary no
console.log(bin);
var fulName = 'angular,1235,10.205'; //any datatype ex
console.log(fulName);
var stats = true; //boolean data type ex
console.log(stats);
var arEg = [10, 20, 30, 40, 50]; //arry with squre bracket
var genArr = [60, 70, 80, 90, 100]; //generic array 
arEg.forEach(function (element, index) {
    console.log(element, genArr[index]);
});
var tbln = "employee"; //var key ex
var uname = "admin"; //const keywor ex
var pass = "admin123";
var sqlQ = "select * from " + tbln + " where uname='" + uname + "'and pass='" + pass + "'"; //demonstration of $ symbol for accesing variable
console.log(sqlQ);
