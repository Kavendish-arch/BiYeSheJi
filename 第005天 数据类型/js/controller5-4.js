// 数组
// JS 的数组是弱类型
//var arr = [];
//var arr1 = [0,1,2,3];
//
//var arr2 = [0,1,,3];
//var arr3 = [,,,];
//
//var arr4 = [0,'accc',undefined,null,true,{}];
//
//// 如何访问数组元素：
//console.log(arr1[1]);
//console.log(arr4[3]);
//
//// 如果一个下标位置原来不存在，会添加， 如果必须，还会增加length
//arr[3] = 5;
//console.log(arr2);
//arr2[2] = 2;
//console.log(arr2);
//
////如果下标存在，覆盖
//arr2[0] = 'ab';
//console.log(arr2);
//
//// 数组有长度 length
//console.log(arr.length);
//
//// 使用构造函数方式生成数组
//
//arr = new Array(); // 等价arr = [];
//arr1 = new Array(0,1,2,3); // 等价于 arr1 = [0,1,2,3];
//arr3 = new Array(4); //? <> arr = [4]; 等价于[,,,];
//
//// 稀疏数组\矩阵。
//var larr = new Array(10000);
//
//larr[3] = 5;
//larr[1.5] = 7;
//// 你可以把数组当做map来用
//// key - value
//
//var a4 = [];
//a4['China'] = '满汉全席';
//a4['American'] = '火鸡';
//a4['France'] = '牛排';
//console.log(a4);

// 如何判断一个变量是数组？

//var arr = [];
//console.log(typeof(arr));
//console.log(arr.constructor.name == 'Array');
//
//// 三种轮询数组的方法。
//arr = [0,1,,,4,5];
//arr['China'] = '满汉全席';

// 1. for(i)
//for(var i = 0; i < arr.length; i++){
//	console.log(arr[i]);
//}

// 2. for(in)
//for(var i in arr){
//	console.log(arr[i]);
//}

// for(i)是按照数组的方式改动数组，而for(in)使用map的方式返回所有非稀疏的节点的key。

// 3. forEach(f)
//arr.forEach(function(x){
//	console.log(x);
//});
// forEach, 返回所有数字的且非稀疏的节点的value。

//// concat()
//var arr = [3,2,1];
//var arr2 = [4,5,6];
//
//var arr3 = arr.concat(arr2);
//console.log(arr3);
//
//// join()
//console.log(arr3.join(','));
//console.log(arr3.join('-'));
//console.log(arr3.join('    '));
//
//// sort() 数字的sort
//arr3 = [1,5,3,2,9,4,0,8];
//arr3.sort();
//console.log(arr3);
//
//// sort() 字符串的sort
//arr3 = ['bbb', 'aaa', 'Ccc'];
//arr3.sort();
//console.log(arr3);
//// 三个需要记忆的ASCII码：0 30h，A 41h，a 61h

//function Wangli(){};

// 栈：后进先出；stack
// 进栈：push，出栈：pop

//// push-pop 尾进尾出
//var arr = ['a','b','c'];
//console.log(arr.join(','));
//arr.push('z');
//console.log(arr.join(','));
//console.log(arr.pop());
//console.log(arr.join(','));
//
//// unshift-shift 头进头出
//arr = ['a','b','c'];
//console.log(arr.join(','));
//arr.unshift('z');
//console.log(arr.join(','));
//console.log(arr.shift());
//console.log(arr.join(','));

// 队列：先进先出：queue
//// 尾进头出
//arr = ['a','b','c'];
//console.log(arr.join(','));
//arr.push('z');
//console.log(arr.join(','));
//console.log(arr.shift());
//console.log(arr.join(','));
//
//// 头进尾出
//arr =['a','b','c'];
//console.log(arr.join(','));
//arr.unshift('z');
//console.log(arr.join(','));
//console.log(arr.pop());
//console.log(arr.join(','));

