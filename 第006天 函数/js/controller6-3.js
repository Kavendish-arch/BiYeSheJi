// 函数可以作为参数传递给另外一个函数。

//function f1(xingcan){
//	console.log(xingcan);
//	console.log(xingcan());
//}
//
//// f2()是函数声明
//function f2(){
//	console.log('I am f2()');
//	return 'f2 say hello!';
//}
//
//f1(f2);
//
//// f3是函数表达式
//var f3 = function(){
//	console.log('I am f3()');
//	return 'f3 say hello!';
//};
//
//f1(f3);

// 立即执行函数
// function 是一个引用类型的对象
//console.log((function(x){
//	console.log('I am f3()');
//	return 'f3 say hello to ' + x + '!';
//})('wangli'));

var x = [5];
var y = [6];

function exchange(a,b){
	var c = a[0];
	a[0] = b[0];
	b[0] = c;
}

exchange(x,y);

console.log(x + ' ' + y);

//// 栈内存
//ST001:x,HP001
//ST002:y,HP002
//ST003:
//ST004:
//ST005:
//ST006:
//// 堆内存 
//HP001:[6],(1)
//HP002:[5],(1)
//HP003:
//HP004: