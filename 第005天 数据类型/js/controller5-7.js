// 如何清空一个数组？
// 三种方法。

// 1.length
//var arr = [1,2,3];
//console.log(arr);
//arr.length = 0;
//console.log(arr);

// 2.splice
//console.log(arr);
//arr.splice(0);
//console.log(arr);

// 3.[]
//console.log(arr);
//arr = [];
//console.log(arr);
//
//// 栈内存
//ST001:arr,HP002
//ST002:
//ST003:
//ST004:
//ST005:
//ST006:
//
//
//// 堆内存 
//HP001:
//HP002:[],(1)
//HP003:
//HP004:

// 已知一个数组，内部数字都是number，有重复的元素，写一段程序，去重复，新生成数组。
// 三种不同的办法
var x = [1,3,4,5,1,3,2,1,2,4];

var y = [];

// 方法1 
// x 循环
//for(var i = 0; i < x.length; i++){
//	// 看一看这个元素y里是不是有，有的话，算了；没有，push
//	for(var j = 0; j < y.length; j++){
//		if(x[i] === y[j]){// 等于，说明是重复的
//			break;
//		}
//	}
//	// 不重复，push，重复，算了。
//	if(j >= y.length){
//		y.push(x[i]);
//	}
//}
//
//console.log(x);
//console.log(y);

// 时间复杂度：与x的元素个数成正比。
// x.length N
//   0 + 1 + 2 + 3 ... (N-1) = N(N-1)/2 = (1/2)N^2 - (1/2)N = N^2
// O(N^2)

// 方法2
// x排序，不用每次翻找y
//x.sort();
//for(var i = 0; i < x.length; i++){
//	if(y.length == 0 || y[y.length-1] !== x[i]){
//		y.push(x[i]);
//	}
//}

//console.log(y);
// 时间复杂度： 生成y的时间复杂度 O(N)
//          x排序，时间复杂度 O(N*logN) 堆排序
// 基于比较的排序，堆排序，时间 O(N*logN)

var arrMap = [];
for(var i = 0; i < x.length; i++){
	arrMap[x[i]] = true;
}

for(var j in arrMap){
	y.push(+j);
}

console.log(y);

// 取决于arrMap[]的时间复杂度
//      logN =>  N*logN    ----------------- 二叉树
//      1    =>  N         ----------------- 哈希表

// SQL 关系型数据库 MySQL        B+树 --------------- 查询速度 logN
// No-SQL REDIS, memcache.   大哈希表------------- 查询速度  1

// 已知一个数组，number，字符串，boolean，去重？

// 方法1.使用 === 判断，方法1，适用。
// 方法2.首先轮询数组，用typeof把number，string，boolean分开。
//      number 排序
//      string 排序
//      boolean 排序
//        归并三个数组
// 方法3.首先轮询数组，用typeof把number，string，boolean分开。
//      number map
//      string map
//      boolean map
//        归并三个数组
