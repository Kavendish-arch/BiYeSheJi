
//队列、栈应用 
var a = '2 + 3 * 5 - 4';
/**
 * 四则运算，数字0-9 + - * / 没有括号
 *  1.1. * / > + -
 *  1.2. 左到右读取，后面优先级高于前面时，
 */
//((2 + (3 * 5)) - 4)
//235*+4-
//有限但是有用的测试用例
/**
 * 2.1测试用例
 * 2+3*4+5
 * 1+2+3+4
 * 1*2+3*4
 * 1*2+2*3/4+7*2
 * 1*2
 * 1+2
 * 2.2 debug工具
 */
//作用域的不同	非块结构语句
var x = "2 + 3 * 5 - 4";
//存储操作数
var num = [];
//存储操作符
var op = [];
var OPERATOR = [['+',0], ['-',0], ['*',1], ['/',1]];
var i = 0;
var Result = 0;

//1.0版本 首字为数 无括号 无两位数
var s = x.charCodeAt(i) - 48;
var o = '';
if(s <= 0 || s >= 9){
	Result = "Error: is not a number";
}else{
	num.push(s);
	for(; i < x.length; i++){
		o = x.charCodeAt(i);
		
		for(var j = 0; j < OPERATOR.length; j++){
			if(OPERATOR[j][0] == o){
				break;
			}
			if(j >= OPERATOR.length){
				break;
			}
		}
		op.push(o);
		//get the priority  and  validate the operator
		//compare the priority of the opeartore
		s = x.charCodeAt(i++) - 48;
		if(s <= 0 || s >= 9){
			Result = "Error: is not a number";
		}
	}
}
console.log(" 变量j的作用域 " + j);
for(var i in a){

}
