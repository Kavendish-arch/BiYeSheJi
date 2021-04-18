// 为什么要用console.log

//var obj = {};
//
//document.write(obj);
//console.log(obj);

//typeof-----------------------------------------------

//var x = 1;
//console.log('[typeof] x ' + typeof(x)); // number
////console.log('[typeof] iX ' + typeof iX);
//
//x = 'abc';
//console.log('[typeof] x ' + typeof(x)); // string
//
//x = true;
//console.log('[typeof] x ' + typeof(x)); // boolean
//
//x = null;
//console.log('[typeof] x ' + typeof(x)); // object
//
//x = undefined;
//console.log('[typeof] x ' + typeof(x)); // undefined
//
////var x2;
//console.log('[typeof] x2 ' + typeof(x2));// undefined
//

//隐式类型转换------------------------------------------
//var sNum = '2';
//var iNum = 2;
//var ret = sNum + iNum;
//console.log('[隐式类型转换]' + typeof ret);
//
//ret = sNum - iNum;
//console.log('[隐式类型转换]' + typeof ret);

//显示类型转换------------------------------------------
// Number();
//var iNum = Number(false);
//console.log('[Number()] = ' + iNum);
//
//iNum = Number(true);
//console.log('[Number()] = ' + iNum);
//
//iNum = Number(undefined);
//console.log('[Number()] = ' + iNum);
//
//iNum = Number(null);
//console.log('[Number()] = ' + iNum);
//
//iNum = Number('10');
//console.log('[Number()] = ' + iNum);
//
//iNum = Number('1.5');
//console.log('[Number()] = ' + iNum);
//
//iNum = Number('1.5.3');
//console.log('[Number()] = ' + iNum);
//
//iNum = Number('');
//console.log('[Number()] = ' + iNum);
//// false,null,'', => 0; undefined => NaN; 不是数，=> NaN

// parseInt()// parse, parser
//var iNum = parseInt('1234');
//console.log('[parseInt()] = ' + iNum);
//
//iNum = parseInt('1.5.3');
//console.log('[parseInt()] = ' + iNum);
//
//iNum = parseInt('100px');
//console.log('[parseInt()] = ' + iNum);
//
//iNum = parseInt('a1234');
//console.log('[parseInt()] = ' + iNum);
//
//// 0x--- - 16进制数 C/C++; ---h 16进制数 汇编语言
//iNum = parseInt('0xA0');
//console.log('[parseInt()] = ' + iNum);
//
//// 0---  8进制，C/C++ 以0开头表示8进制，无效。
//iNum = parseInt('070');
//console.log('[parseInt()] = ' + iNum);
//
//iNum = parseInt('');
//console.log('[parseInt()] = ' + iNum);
//
//iNum = parseInt('1.1E5');
//console.log('[parseInt()] = ' + iNum);
//
//iNum = parseInt('123.9');
//console.log('[parseInt()] = ' + iNum);
//
//iNum = parseInt('A0',16);
//console.log('[parseInt()] = ' + iNum);
//
////1010-1001
////A   -9
//
//iNum = parseInt('70', 8);
//console.log('[parseInt()] = ' + iNum);
//
//iNum = parseInt(undefined);
//console.log('[parseInt()] = ' + iNum);
//
//iNum = parseInt(null);
//console.log('[parseInt()] = ' + iNum);
//
//iNum = parseInt(false);
//console.log('[parseInt()] = ' + iNum);

//0x15 = 1 * 16 + 5
//15   = 1 * 10 + 5

// 如何记忆Number()和parseInt()的区别
// Number本质上可以转化为数字，parseInt是看上去像数字的。
// 1. Number可以，parseInt不可以：false, null, ''
// 2. Number不可以，parseInt可以：数字开头掺杂其它。
// 3. 都不可以：undefined，字母开头的字符串

// parseFloat();
//var fNum = parseFloat('10');
//console.log('[parseFloat] = ' + fNum);
//
//fNum = parseFloat('10.00');
//console.log('[parseFloat] = ' + fNum);
//
//fNum = parseFloat('10.5');
//console.log('[parseFloat] = ' + fNum);
//
//fNum = parseFloat('1.5.3');
//console.log('[parseFloat] = ' + fNum);
//
//fNum = parseFloat(' 1.7 ');
//console.log('[parseFloat] = ' + fNum);
//
//fNum = parseFloat('1.5aaa');
//console.log('[parseFloat] = ' + fNum);
//
//fNum = parseFloat('1.1E5');
//console.log('[parseFloat] = ' + fNum);
//
//fNum = parseFloat('1.1E5aaa');
//console.log('[parseFloat] = ' + fNum);

// parseFloat()和parseInt()的区别
// parseFloat支持小数点'.'和科学计数法，其它都一样。

// isNaN() 调用Number()
console.log('[isNaN] = ' + isNaN(NaN));
console.log('[isNaN] = ' + isNaN('aaa'));
console.log('[isNaN] = ' + isNaN(undefined));
console.log('[isNaN] = ' + isNaN(null));
console.log('[isNaN] = ' + isNaN('1234'));
console.log('[isNaN] = ' + isNaN(''));
