// 正则表达式 有限自动状态机
//-------------------正则表达式的基础使用------------------------------
// 1. 正则表达式类。 RegExp(exp, param)
var regExp = new RegExp('[0-9]+','g'); // 正整数
// []指代一个字符，里面的字符表示这个被指代的字符的选择范围
// + 前面的字符，1次或者1次以上
// 参数: g global，全局

var str1 = '12123123123a1234';
console.log(str1.match(regExp));
// 在match这个函数里：
//   g，匹配所有的字符串
//   没有g，匹配第一个，然后停止。

// 2.直接量
//   用两个撇斜杠，/expression/param
//  String对象的match
console.log(str1.match(/[0-9]+/g))
console.log("直接量")
console.log(str1.match(/\d{3}/g))
console.log(str1.match(/(12)+/g))
// console.log(str1.match(/[0-9]+/g));
// console.log(str1.match(/\d+/g));
// console.log(str1.match(/123/g));
// console.log(str1.match(/(123)+/g));


// RegExp对象的test方法
var regExp2 = /[0-9]+/g;
//console.log(typeof(regExp2));
//console.log(regExp2.test(str1));
//-----------------------正则表达式详解------------------------------------
// 1. 简单类：
//     1.1 单词本身
var str = 'hello world!';
console.log(str.match(/[a-zA-Z]l/g))
//console.log(str.match(/hello/g));
// 2. 范围类 []指代一个字符，内部指出字符的范围。
//         [0123456789] [0-9] [a-z] [A-Z]
//         十六进制  [0-9a-fA-F]
// 3. 负向类 [^0-9]不能是数字，排除数字。
str = '4;4517;ah782;Bz553;';
console.log("匹配16进制数" + str.match(/[0-9A-Fa-f]/g))
//console.log(str.match(/[0123456789]/g));
//console.log(str.match(/[0-9]/g));
//console.log(str.match(/\d/g));
console.log("-----------------------------");
// 匹配字符串中的两位数
//console.log(str.match(/[0-9][0-9]/g));
console.log(str.match(/\d{2,3}/g))
// 4. 量词 一个前面单位出现的次数
//    {n} 出现n次
//console.log(str.match(/[0-9]+?/g));
//    {m,n} 至少m次，至多n次
//    {m,}  至少m次，至多不限
//    ?     0次或者1次，      = {0,1}
//    +     1次或者多余1次    = {1,}
//    *     0次或者多余0次    = {0,}
//    贪婪量词: ? + * 找到匹配的最大串
//    惰性量词: *? +? 找到匹配的最小串

// 找到所有的16进制数
console.log(str.match(/[0-9a-fA-F]+/g));// 贪婪
console.log(str.match(/[0-9a-fA-F]+?/g));// 惰性
console.log(str.match(/[^0-9a-fA-F]{1,}/g));// 匹配所有不是的

str = 'abbbaabbbaaabbb1234';
console.log(str.match(/.* bbb/g)); // 贪婪 .*任意字符.尽可能多
console.log(str.match(/.*?bbb/g));// 惰性 .?尽可能小

// 5. 通配符 预定义类
// .  = [^\n\r]     除了回车换行以外，都可以匹配。
// \d = [0-9]  数字
// \D = [^0-9] 非数字
// \w = [a-zA-Z_0-9]  数字字母下划线
// 变量名   /[a-zA-Z_]\w*/ [a-zA-z] [a-zA-Z_0-9]*
// \W = [^a-zA-Z_0-9] 其他
// \s = [\t\n\x0B\f\r ] 空格或者空白
// \S   非空格或者非空白
// \b 表示边界(两个字符中间的位置) 一边是\w,另一边是\W
// \B 不是边界。
// console.log(str.match(/.*\b/g))
// ^  表示开始
// $  表示结束
str = 'a==b';
console.log(str.match(/.*\b./g));
//console.log(str.match(/^./g)); //找开头
//console.log(str.match(/.$/g)); //找结尾
//console.log(str.match(/^a/g));

// 6,分组 一个正则表达式，不但可以对整个匹配进行操作，还可以对其中()中的子串进行匹配，分组。
//   (pattern) 匹配pattern同时捕获结果，自动设定组好。
//   \1, RegExp.$1 : 反向引用
//   (?<name>pattern) 匹配pattern同时捕获结果，设定那么为组名。
//   \k<name>: 反向引用

str = 'mom dand dad';
console.log(str.match(/mom( and dad)?/));
//console.log(RegExp.$1);
//

str = 'word excel excel hello world world!';
//console.log(str.match(/(\b[a-zA-Z]+\b)\s+\1/));
//console.log(str.match(/(?<n1>\b[a-zA-Z]+\b)\s+\k<n1>/));
//console.log(RegExp.lastMatch);
//console.log(RegExp.$1);

// 零宽(负向)先行\后行断言
//str = 'reaaa;rcaaa=bbb=;';
//// 寻找两个字符，两字符后面以分号结尾
//console.log(str.match(/.{2}(?=;)/g));
//// 寻找四个字符，以ea开头
//console.log(str.match(/(?<=ea).{4}/g));
//// 寻找三个字母，不以分号结尾 
//console.log(str.match(/[a-z]{3}(?!;)/g));
//// 寻找不易re开头的三个字母
//console.log(str.match(/(?<!re)a{3}/));

// 7. 或 |
str = 'var    	aaadf1;';
str2 = 'function    f(){}';

// /^var\s+[a-zA-Z]\w*;/  // 变量声明
// /^function\s+[a-zA-Z]\w*\s*\(\)\{\}/


//console.log(str.match(/^var\s+[a-zA-Z]\w*;|^function\s+[a-zA-Z]\w*\s*\(\)\{\}/));
//console.log(str2.match(/^var\s+[a-zA-Z]\w*;|^function\s+[a-zA-Z]\w*\s*\(\)\{\}/));

// 8. 练习题
// 匹配手机号： 1开头，第二位34579, 11位, 130-0000-0000, 3/4之间和7/8之间，有可能有减号，也肯能没有。13000000000
str="188-6-998-7694";
var regExp3 = /^1[34578][0-9]-?[0-9]{4}-?[0-9]{4}$/g;
console.log(str.match(/^1[34578][0-9]-?[0-9]{4}-?[0-9]{4}$/g));
//var regExp2 = /^1[34579]\d-?\d{4}-?\d{4}$/;
console.log(str.match(/^\w+@[\w\.]{1,3}[]/g))
str = '13000000000';
console.log(str.match(regExp3));
str = '130-0000-0000';
console.log(str.match(regExp3));
str = '9999999999';
console.log(str.match(regExp3));

// 正则表达式匹配邮箱 匹配一个信箱
// 字母，数字，下划线，- . @ xxxx.xxx.xxx 字母，数字，下划线 -
regExp4 = /^[\w\-]+@[\w]+([\.\w]{3,4}){1,2}$/g;

str = 'aaa-1bbb@163.com.cn';
console.log(str.match(regExp4)!=null);

//var regExp2 = /^[\w\-\.]+@[\w\-]+(\.[a-zA-Z]{2,5}){1,3}$/;
//
str = 'aaa-1bbb@163.com.cn';
console.log(str.match(regExp4));

// 匹配整数 正整数  19, -5, +45
//var regExp2 = /^[+-]?\d+$/;
//

regExp2 = /^[+-]?[0-9]+$/g

str = '1999';
console.log(str.match(regExp2));
str = '-1';
console.log(str.match(regExp2));
str = '+0';
console.log(str.match(regExp2));

// 匹配浮点数 整数;小数 0.35 -1.7;科学计数法 小数E整数
//var regExp2 = /^[+-]?\d+(\.\d+)?([Ee][+-]?\d+)?$/;

regExp2 = /^[+-]$/g
//str = '100';
//console.log(str.match(regExp2));
//str = '-0.47';
//console.log(str.match(regExp2));
//str = '1.2E5';
//console.log(str.match(regExp2));
//str = '-3e8';
//console.log(str.match(regExp2));

// 匹配中国字
//var regExp2 = /^[\u4e00-\u9fa5\uff0c\u3002]+$/;
//str = '弱小和无知不是生存的障碍，傲慢才是。';
//console.log(str.match(regExp2));

// 9, String支持的正则函数:search()
//// search(regExp)，直接量和对象，返回整数，开始的位置，-1表示没有找到。
str = 'I word site excel word OK chrome match OK excel word';
//// 找word
//console.log(str.search(/\bword\b/));
//// g: search 不支持全局，忽略参数g，同时忽略regexp的lastIndex

// 10, match(regexp)，直接量和对象，
//    返回，没有g，返回数组，0：第一个匹配的最大串，其他是分组的子串，index:最大串开始的位置， input原始的串
//         g，返回数组，所有匹配的最大串，但是没有分组的子串，index和input无效。

//console.log(str.match(/\bexcel\b/));
//console.log(str.match(/\bexcel\b/g));

// 11, replace(regexp/substr, replacement)
//      regexp直接量、对象。substr 子串
//      replacement，替换进去的串，或者函数。

// 把小写的word变成大写的WORD
//console.log(str.replace(/\bword\b/, 'WORD'));
//console.log(str.replace(/\bword\b/g, 'WORD'));
//console.log(str.replace('word', 'WORD'));

// 匹配 单词1-单词2 模式，然后变成单词2-单词1
// replacement : $1 ~ $99 分组，$&代表子串， $` 子串左侧， $' 子串右侧
//str = 'aaaa-bbbb  cc-ddd';
//console.log(str.replace(/([a-z]+)-([a-z]+)/g, replacer));
//
//function replacer(match, p1, p2, offset, str){
//	//console.log(match, p1, p2, offset, str);
//	var sRet = '';
//	for(var i = 0; i < p2.length; i++){
//		sRet += String.fromCharCode(p2.charCodeAt(i) + 1);
//	}
//	sRet += '=';
//	for(var i = 0; i < p1.length; i++){
//		sRet += String.fromCharCode(p1.charCodeAt(i) + 1);
//	}
//	return sRet;
//}

// 12. split(separator, howmany) -> 数组
//      separator:正则，字符串，可选
//      howmany是最大长度。
//console.log(str.split(/\s+/));
//console.log(str.split(/\s+/,4));
//console.log(str.split(''));

// 13, RegExp test(string) 布尔 是否匹配(找不到false)
//console.log(/\bword\b/.test(str));

// 14, RegExp exce(string) 返回数组(找不到null)
//   没有g，数组的0位，最大匹配串，后面是分组，index是开始匹配的位置，input原串
//   g, lastIndex中放入子串结束位置的下一位，每次调用后移。
//var regExp2 = /\bword\b/g;
//regExp2.lastIndex = 6;
//var aRst = regExp2.exec(str);
//console.log(aRst);
//console.log(regExp2.lastIndex)

// 练习：做一个Date的format函数

// var d1 = new Date();
// //console.log(d1.format('yyyy年MM月dd日  hh时'));
// // yy年MM月dd日 - hh:mm:ss

// Date.prototype.format = function(fmt){
// 	var obj = {
// 		'M+':this.getMonth() + 1,
// 		'd+':this.getDate(),
// 		'h+':this.getHours(),
// 		'm+':this.getMinutes(),
// 		's+':this.getSeconds()
// 	};
	
// 	if(/y+/.test(fmt)){
// 		var year = this.getFullYear().toString();
// 		if(RegExp.lastMatch.length <= year.length){
// 			year = year.substr(-RegExp.lastMatch.length);
// 		}
// 		fmt = fmt.replace(RegExp.lastMatch, year);
// 	}
	
// 	for(var k in obj){
// 		var r = new RegExp(k);
// 		if(r.test(fmt)){
// 			var x = obj[k].toString();
// 			if(RegExp.lastMatch.length > x.length){
// 				x = '000000' + x;
// 				x = x.substr(-RegExp.lastMatch.length);
// 			}
			
// 			fmt = fmt.replace(RegExp.lastMatch, x);
// 		}
// 	}
// 	return fmt;
// }

// console.log(d1.format('yyyy年MM月dd日  hh时'));
