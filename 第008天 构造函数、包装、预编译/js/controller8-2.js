// 包装类
// 原始类型 undefined null Number string boolean
// 引用类型 Object

// Number 
// String 
// Boolean

//number
var n1 = 123;
//Object 
var n2 = new Number(123);

console.log(typeof(n1));
console.log(typeof(n2));

var s1 = 'aaa';
var s2 = new String('aaa');

console.log(typeof(s1));
console.log(typeof(s2));

var b1 = true;
var b2 = new Boolean(true);

console.log(typeof(b1));
console.log(typeof(b2));


var arr = [1,2,3,4];
arr.length = 2;
console.log(arr);

var str = '1234';
//str.length = 2;
var strTmp = new String(str);  //隐式转换
strTmp.length = 2;
// 原始类型可以调用不报错

console.log(str); // strTmp摧毁 未出现在栈里面

var iNum = 123;
//iNum.toString();
var iTmp = new Number(iNum); //隐式转换
iTmp.toString(); //隐式转换 之后Tmp摧毁
console.log(iNum);

true.toString();

