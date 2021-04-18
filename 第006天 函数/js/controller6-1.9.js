// 函数的定义。

// 功能，就是把数组求和。

x = [1,2,3,4,5,NaN,undefined,null,'abc'];
// 所给参数不符合要求的处理方法：
//   第一，发现不合格，拒绝服务，保证自己的代码不崩溃。
//   第二，发现不合格，把合格部分处理，返回。

// function sum(x, y){
// 	console.log(x+y);
// }
// sum(3,2);
// 函数的声明
//function <函数名>([<形式上的参数>]){
//	//函数体
//}
// 函数可以有形参，也可以没有
// 函数可以有返回值，也可以没有，没有的时候函数返回undefined

function sum(arr){
	var iRet = 0;
	for(var i in arr){
		if(typeof(i) == 'number'){
			if(!isNaN(i) && isFinite(i)){
				iRet += i;
			}
		}
	}
	
	// for(var i = 0; i < arr.length; i++){
	// 	if(typeof(arr[i]) == 'number'){
	// 		if(!isNaN(arr[i]) && isFinite(arr[i])){
	// 			iRet += arr[i]
	// 		}
	// 	}
	// }
	//console.log(iRet);
	return iRet;
}
//
print("=========")
console.log(sum(x));
print("=========")
// 12345,54321，用函数实现。

function reverseNumber(num){
	if(typeof num != 'number'){
		return '';
	}
	
	if(!isFinite(num) || isNaN(num)){
		return '';
	}
	
	return +num.toString().split('').reverse().join('');
}

console.log(reverseNumber(12345));

var f = function(x){
	if(x <= 1){
		return 1;
	}else{
		return x * arguments.callee(x-1);
	}
};

console.log(f(5));

var a1 = [];
var a2 = [];
a1[0] = a2;
a2[0] = a1;

console.log("+++++++++");
/**
 * 清空一个数组
 * 面试题
 */
/**1.length */
var arr = [1,2,3,3,4];
console.log(arr);
arr.length = 0;
/**length会删除长度之外的值 */
console.log(arr);
/**2.splice */
var arr = [1,2,3,3,4];
arr.splice(0);
console.log(arr);
/**3.[] 
001 arr,001
002
003

001 [1,2,3,3,4],0
002
003
*/
/**面试题；已知数组number 有重复的数字 去重复 */
/**1.循环比较
 * for(var i = 0; i < x.length; i ++){
 * 	for(var j = 0; j < x.length; j++){
 * 		if(x[i] == x[j])
 * 			break;
 * 	}
 * 	if(j >= x.length){
 * 		y.push(x[i]);
 * 	}
 * }
 * console.log(x)
 * console.log(y)
 */
var x = [1,2,3,3,7,3,4,4];
var y = [];
for(var i = 0; i < x.length; i++){
	/**x中遍历x[i] 在y中是否存在
	 * 存在，跳过
	 * 不存在存入
	 */
	for(var j = 0; j < x.length; j++){
		if(x[i] === y[j])
			break;
	}
	if(j >= x.length)
		y.push(x[i]);
}
console.log(x);
console.log(y);
console.log("------------------");
x.sort();
console.log(x);
/**2.排序 */
var y = [];
for(var i = 0; i < x.length; i++){
	if(y.length == 0 || y[y.length-1] !== x[i]){
		y.push(x[i]);
	}
}
//基于比较的排序,堆排序，Nlog(N)
/**
 * 
 */
console.log(x);
console.log(y);
console.log("------------------");
/**取决于 Map的时间复杂度
 * logN -> N*logN 二叉树
 * -> N 哈希表
 * 
 * SQL 关系型数据库mysql
 * 	key查找logN
 * No_SQL 
 *  哈希表查询速度1
 */
var x = [1,2,3,3,7,3,4,4];
var yMap = [];
var y;
for(var i = 0; i < x.length; i++){
	yMap[x[i]] = true;
}
for(var j = 0; j < y.length; j++){
	if(yMap[j] === true)
		y.push(+j);
}
// for(var j in yMap){
// 	y.push(+y);
// }
console.log(x);
console.log(y);
