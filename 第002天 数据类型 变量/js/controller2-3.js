//document.write('<div>Hello2 world!</div>');

var x;
x = 1;

var x = 1;
var y;
y = x + 1 + 11 - 6;

var a1 = 4,
 a2 = 5,
 a3 = 10;
    
var s = (12 == 13)


var sToken = 'hello" \' world!';
document.write('sToken = ' + sToken + '<br>');

document.write('a1 = ' + a1 + ' <br>');
document.write('a2 = ' + a2 + ' <br>');
document.write('a3 = ' + a3 + ' <br>');
document.write('s = ' + s + ' <br>');

window.aa = 5;
alert(aa);

var x;
document.write("hello3 world");
document.write('[>] \'25\' < 4 ? ' + ('25' < 4) + '<br>');
document.write('[>] \'aaa\' > 4 ? ' + ('aaa' > 4) + '<br>');
document.write('[?:] 25>4?' + (25>4 ? 'l' : 's') + '<br>');

//document.write('<div>Hello2 world!</div>');
// 命名规则
/**
 * 描述性名称
 * 字母 $ _开头
 * 对大小写敏感
 * '' " "
 */
var x;
x = 1;
var x = 1;
var y;
y = x + 1 + 11 - 6;

var a1 = 4,
 a2 = 5,
 a3 = 10;
    
var s = (12 == 13)

var sToken = 'hello" \' world!';
document.write('sToken = ' + sToken + '<br>');

document.write('a1 = ' + a1 + ' <br>');
document.write('a2 = ' + a2 + ' <br>');
document.write('a3 = ' + a3 + ' <br>');
document.write('s = ' + s + ' <br>');

window.aa = 5;
console.log(aa);


//十进制
var iNum = 86;
document.write('十进制数 iNum = ' + iNum + '<br>');

// 八进制
var oNum = 070;
document.write('八进制数 oNum = ' + oNum + '<br>');

// 十六进制
var xNum = 0x1f;
document.write('十六进制 xNum = ' + xNum + '<br>');

// 浮点数
var fNum = 5.01;
document.write('fNum = ' + fNum + '<br>');

// 浮点数，科学记数法
fNum = 5.61e7; // 5.61 * 10^7
document.write('fNum = ' + fNum + '<br>');

iNum = Number.MAX_VALUE;
document.write('最大值 iNum = ' + iNum + '<br>');

iNum = Number.MIN_VALUE;
document.write('最小值 iNum = ' + iNum + '<br>');

//是一个特殊值，它在算术运算或函数生成一个比 Number.MAX_VALUE 还大的数
iNum = Number.POSITIVE_INFINITY;
document.write('最大值还大的 iNum = ' + iNum + '<br>');

document.write('<br>')
iNum = 5;
iNum = Number.MAX_VALUE * 1.1;
document.write('MAX_VALUE * 1.1 iNum = ' + iNum + '<br>');
iNum == Number.POSITIVE_INFINITY
document.write('iNum == Number.POSITIVE_INFINITY = ' + iNum + '<br>');
document.write('isFinite(iNum) = ' + isFinite(iNum) + '<br>');
document.write('<br>')
iNum = NaN; // Not a Number
document.write('Not a Number iNum = ' + iNum + '<br>');
document.write('(iNum === iNum) = ' + (iNum === iNum) + '<br>');
document.write('isNaN(iNum) = ' + isNaN(iNum) + '<br>');

document.write('<br>')
//字符串 文本
var sToken = 'hello " \' world!';
document.write('sToken = ' + sToken + '<br>');

sToken = 'hello world!';
document.write('sToken = ' + sToken + '<br>');

var sToken2 = sToken.concat(' abc', ' ccc', ' ccc', ' ccc', ' ccc', ' ccc', ' ccc', ' ccc', ' ccc', ' ccc', ' ccc', ' ccc我');
document.write('字符串 sToken2 = ' + sToken2 + '<br>');

document.write('字符串长度 sToken2.length = ' + sToken2.length + '<br>');

//hello world!
//012345678901
//0         1
sToken2 = 'hello world!';
var iLength = sToken2.indexOf('o');
document.write('o 在第几个 = ' + iLength + '<br>');
document.write('charAt = ' + sToken2.charAt(iLength) + '<br>');
document.write('截取字符串 head ,tail substring = ' + sToken2.substring(0, iLength + 1) + '<br>');


/**
 * get word
 */
sToken2 = 'abcd abce a234 1341234 asdfsdf';
// start 第一个空格 end
var iStart = sToken2.indexOf(' '), iEnd;
//没有到底
if(iStart != -1){
    //从start+1开始后的空格
	iEnd = sToken2.indexOf(' ', iStart + 1);
	if(iEnd != -1){
		document.write('substring = [' + sToken2.substring(iStart + 1, iEnd) + ']<br>');
	}
}
document.write("<br>")
// boolean
var bCheck = (12 == 2);
document.write('boolean  bCheck = ' + bCheck + '<br>');



