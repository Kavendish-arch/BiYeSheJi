/**
 * + 数字假发和字符拼接
 * -
 * *
 * /
 * ++
 * --
 */
// + 数字加法

var iNum = 3 + 3;
document.write('[+] iNum = ' + iNum + '<br>');

iNum = iNum + 3;
document.write('[+] iNum = ' + iNum + '<br>');

iNum = Number.MAX_VALUE + 1E307;
document.write('[+] iNum = ' + iNum + '<br>');

iNum = iNum + 1E307;
document.write('[+] iNum = ' + iNum + '<br>');

iNum = Number.MAX_VALUE + 1E307 - Number.MAX_VALUE;
document.write('[+] iNum = ' + iNum + '<br>');

iNum = Number.Infinity + 1;
document.write('[+] iNum = ' + iNum + '<br>');

// + 字符串的拼接
var sToken = 'abc' + 'edf';
document.write('[+] sToken = ' + sToken + '<br>');

var sToken = '5' + 5;
document.write('[+] sToken = ' + sToken + '<br>');

var sToken = 5 + '5';
document.write('[+] sToken = ' + sToken + '<br>');

//////////////////////////////////////////////////////////
var sToken = 'g' - 5;
document.write('[-] 字符减法sToken = ' + sToken + '<br>');

// - 数字减法
iNum = 7 - 3;
document.write('[-] 数字减法iNum = ' + iNum + '<br>');

// * 数字乘法
iNum = 7 * 3;
document.write('[*] iNum = ' + iNum + '<br>');

// / 数字除法
iNum = 4 / 3;
document.write('[/] iNum = ' + iNum + '<br>');
iNum = 4 / 0;
document.write('[/] iNum = ' + iNum + '<br>');
iNum = 0 / 0;
document.write('[/] iNum = ' + iNum + '<br>');

// % 取模
iNum = 4 % 3;
document.write('[%] iNum = ' + iNum + '<br>');

iNum = 4.5 % 3;
document.write('[%] iNum = ' + iNum + '<br>');

iNum = 4 % 0;
document.write('[%] iNum = ' + iNum + '<br>');

iNum = 0 % 0;
document.write('[%] iNum = ' + iNum + '<br>');

// ++
iNum = 5;
++iNum;
document.write('[++] iNum = ' + iNum + '<br>');
//'[++] iNum = 5<br>'
//6

iNum = 5;
document.write('[++] iNum = ' + ++iNum + '<br>');

document.write("<br>")
iNum = 5;
iNum = iNum++ + 10 + ++iNum;
iNum:22
iNum = iNum++ + 10 + ++iNum
iNum = 5 + 10 + ++iNum
iNum = 15 + ++iNum
iNum = 15 + 7
iNum = 22
//22
document.write('[++] iNum = ' + iNum + '<br>');

iNum = 7;
iNum = 10 - ++iNum + ++iNum - iNum++ - iNum++;
// 10 - 8 + 9 - 9 - 10 
// -8
document.write('[++] 10 - ++iNum + ++iNum - iNum++ - iNum++ = ' + iNum + '<br>');

//iNum:11
//iNum = 10 - ++iNum + ++iNum - iNum++ - iNum++
//iNum: 8
//iNum = 10 - 8 + ++iNum - iNum++ - iNum++
//iNum = 2 + ++iNum - iNum++ - iNum++
//iNum: 9
//iNum = 2 + 9 - iNum++ - iNum++
//iNum = 11 - iNum++ - iNum++
//iNum = 11 - 9 - iNum++
//iNum: 10
//iNum = 2 - 10
//iNum = -8
//-8
document.write('[++] iNum = ' + iNum + '<br>');

// --
iNum = 5;
--iNum;
document.write('[--] iNum = ' + iNum + '<br>');

iNum = 5;
iNum = iNum-- + 10 + --iNum;
document.write('[--] iNum = ' + iNum + '<br>');

iNum = 5
iNum = (13 % 7) + 4 * 7 / iNum-- - ++iNum;
document.write('[--] iNum = ' + iNum + '<br>');
