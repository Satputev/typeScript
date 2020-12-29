//enum is keyword
//enum is used to create our own data type
//we have following three types of enum
//@number enum    @string enum   @heterogeneous enum
//number enum
/**
enum myEnum{
    KEY1,
    KEY2,
    KEY3,
    KEY4
};
console.log(myEnum);

output:
            {
            '0': 'KEY1',
            '1': 'KEY2',
            '2': 'KEY3',
            '3': 'KEY4',
            KEY1: 0,
            KEY2: 1,
            KEY3: 2,
            KEY4: 3
            }
*/
/*
enum myEnum{
    key1=10,
    key2,
    key3,
    key4
};
console.log(myEnum);//10 11 12 13
*/
/*
enum myDataType{
    KEY1=my_fun(),
    KEY2=KEY1*10
};
function my_fun(){
    return 100;
};
console.log(myDataType.KEY1,myDataType.KEY2);//100 1000

*/
/*
enum myEnum{
    KEY1=100
};
function fun_one(arg1:any):void{
    console.log(arg1.KEY1);
};
fun_one(myEnum);//100
*/
//string enum
/*
enum myEnum{
    str1="hello",
    str2="hi"
};

console.log(myEnum)//{ str1: 'hello', str: 'hi' }
console.log(myEnum.str1,myEnum.str2);//hello hi
*/
/*
enum myEnum{
    str1="hello",
    str2            //Enum member must have initializer.ts(1061)

};
*/
/*
enum myEnum{
    key1=my_fun()
}
function my_fun(){
    return"hello";      //Type 'string' is not assignable to type 'myEnum'.ts(2322)

};
*/
/*
enum myEnum{
    key1="hello"
};
function my_fun(arg1:any):void{
    console.log(arg1.key1);
};
my_fun(myEnum);//hello
*/
/*
enum myEnum{
    key1="angular",
    key2="welcome to"+key1     // Computed values are not permitted in an enum with string valued members.ts(2553)

};
*/
//passing one enum to other enum
/*
enum myEnum{
    key1="hello"
};

enum myEnum2{
    key1=myEnum.key1
};

console.log(myEnum2.key1);//hello

*/
//heterogeneous enum
//-collection of number enum and string enum called "heterogeneous" enum
var myEnum;
(function (myEnum) {
    myEnum["key2"] = "hello";
    myEnum[myEnum["key1"] = 10] = "key1";
})(myEnum || (myEnum = {}));
;
console.log(myEnum.key2, myEnum.key1);
