let backtick:string=`Angular`//backtick symbol example
console.log(backtick)



let dubqu:string="mean"//double quotes string example
console.log(dubqu)
let squots:string='mern'//single quote string ex

console.log(squots)
let dec:number=101//decimal no
console.log(dec)
let doub:number=1020.20//double no
console.log(doub)

let hexa:number=0xac//hexadecimal no
console.log(hexa)
let oct:number=0o121//octal no
console.log(oct)
let bin:number=011101//binary no
console.log(bin)
let fulName:any='angular,1235,10.205'//any datatype ex
console.log(fulName)

let stats:boolean=true//boolean data type ex
console.log(stats)

let arEg:number[]=[10,20,30,40,50]//arry with squre bracket
let genArr:Array<number>=[60,70,80,90,100]//generic array 
arEg.forEach(function(element,index){
console.log(element,genArr[index]);


})


var tbln:string="employee"//var key ex
const uname:string=`admin`//const keywor ex
const pass:string=`admin123`
var sqlQ:string=`select * from ${tbln} where uname='${uname}'and pass='${pass}'`//demonstration of $ symbol for accesing variable
console.log(sqlQ)