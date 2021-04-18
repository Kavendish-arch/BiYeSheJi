// String() 和 string

var str = String(12345);

console.log(typeof(str));
str.a = 5;
// var tmp = new String(str);
// tmp.a = 5;
// tmp 摧毁了。
console.log("str.a=",str.a);

// var tmp1 = new String(str);
// 访问tmp1.a
// tmp1 摧毁了。

var objString = new String(12345);

//console.log(objString);
//objString.a = 5;
//console.log(objString.a);

// String 可以用数组的方式访问。

//for(var i = 0; i < objString.length; i++){
//	console.log(objString[i]);
//}
//
//for(var i = 0; i < str.length; i++){
//	console.log(str[i]);
//}

// String() 的函数
// indexOf() 查找第一个子串的位置，0开始。

//hello world!
//012345678901
//var sToken = new String('hello world!');
//var l = sToken.indexOf('o');
//console.log(l);
//
//// charAt()，返回当前位置的字符。
//
//console.log(sToken.charAt(l));
//
//// substring(), 取一个子串
//console.log(sToken.substring(0,l+1));
//
//// replace()
//console.log(sToken.replace(/o/g,'A'));

// 特殊字符
//str = '--\'--\"--\\--\t--';
//console.log(str);
//// 回车
//
//str = 'a\r\nb\r\nc';
//// \r 0x0d CR carrage return 回车 
//// \n 0x0a LF line feed      换行
//// 1. 文件都是一行的，\r\n字符表示换行，编辑器为了照顾人类的感受，见到\r\n，显示为换行。
//// 2. 为什么有CR，LF的区别。回车代表回到行首，换行代表下一行
//// 3. window和Unix、Linux里面表示回车的字符不一样。
////      window：            \r\n 
////      Unix\Linux:   \n
////      Mac:          \r
//
//console.log(str);

//str = '\u6211';
//console.log(str);

//// toUpperCase()
//str = 'aaaa';
//str = str.toUpperCase();
//console.log(str);
//
//// toLowerCase()
//str = 'BBBB';
//str = str.toLowerCase();
//console.log(str);

// trim 去除空格 \t
//str = '  aaaa bbbb\t';
//console.log('-' + str + '-');
//console.log('-' + str.trimLeft() + '-');
//console.log('-' + str.trimRight() + '-');
//console.log('-' + str.trim() + '-');
