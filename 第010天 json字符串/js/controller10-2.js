// 编码

// 练习，编写一个方法，求一个字符串的长度。
//      GB2312  字母数字1个字节，中国字是2个字节。

//function getBytes(str){
//	var num = 0;
//	for(var i = 0; i < str.length; i++){
//		if(str.charCodeAt(i) > 127){
//			num += 2;
//		}else{
//			num ++;
//		}
//	}
//
//	return num;
//}
//
//console.log(getBytes('abc'));
//console.log(getBytes('今天天气真好'));
//console.log(getBytes('a我'));

// GBK转UTF-8
var arrUint8 = new Uint8Array([206,210]);
var decoder = new TextDecoder('gbk');
document.write(decoder.decode(arrUint8));

arrUint8 = new Uint8Array([230,136,145]);
decoder = new TextDecoder('utf-8');
document.write(decoder.decode(arrUint8));

var str = '我';
var encoder = new TextEncoder('utf-8');
console.log(encoder.encode(str));
