{
	var arr = [];
	var arr1 = [1, 2, 3, 4];

	var arr2 = [true, null, 'a', 234]
	console.log(arr1[1]);

	arr6 = new Array();
	arr7 = new Array(1, 2, 3, 4);

	//稀疏数组、矩阵
	var larr = new Array(1000);

	larr[3] = 5;
	larr[1.5] = 7;
	//数组可以当作map使用
	//key-value 
	var a4 = [];

	a4['China'] = "满汉全席";
	a4['American'] = "火鸡";
	console.log(a4);

	//那如何判定数组
	var ar = [];
	console.log(ar.constructor.name == 'Array');

	var arr = [1, 2, , , 3, 4];
	arr["China"] = "大餐";
	//轮询数组 
	//1.for() 使用数组的方式 如果中间有空值 返回 undefined
	for(var i = 0; i < arr.length; i++){
		console.log(arr[i]);
	}
	//2.for(in) 使用map的方式返回所有非稀疏的节点的key。
	for(var i in arr){
		console.log(arr[i]);
	}
	//3.forEach() 返回所有数字的且非稀疏的节点的value。

	arr.forEach(function(x){
		console.log(x);
	});

	//concat连接
	var arr8 = arr1.concat(arr);
	console.log(arr8);

	//join() 

	//sort() 1.数字的sort()
	console.log(arr8.sort());
	//2.字符串的sort() 对比字符的ASCII码
	arr2 = ["bda", 'bbb', 'acc'];
	console.log(arr2.sort());
	// 三个需要记忆的ASCII码：0 30h，A 41h，a 61h
}
//栈 stack push() pop()
function Wang(){

}
//push pop 尾进尾出
var arr = ['a', 'b', 'c'];
//console.log(arr.join(','));
arr.push('s');
console.log(arr);
//console.log(arr.join('-'));
console.log(arr.pop());
//console.log(arr.join('-'));
//unshift-shift 头进头出
console.log("--------");
arr = ['a','b','c'];
console.log(arr.join(','));
arr.unshift('z');
console.log("join " + arr.join('-'));
console.log(arr.shift());
console.log(arr.join(','));

// 队列：先进先出：queue
// 尾进头出
arr = ['a','b','c'];
console.log(arr.join("--"));
arr.push('z');
console.log(arr.join(','));
console.log(arr.shift());
console.log(arr.join(','));

//// 头进尾出
arr =['a','b','c'];
console.log(arr.join("--"));
arr.unshift('z');
console.log(arr.join(','));
console.log(arr.pop());
console.log(arr.join(','));

//队列、栈应用 
var a = '2 + 3 * 5 - 4';
/**
 * 四则运算，数字0-9
 *  
 */

for(var i in a){

}
