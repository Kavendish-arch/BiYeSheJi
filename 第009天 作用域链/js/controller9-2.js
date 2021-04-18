// 闭包的应用：

// 实现共有变量
// 累加器。

//var count = 0;
//
//... 一万行代码

function add(){
	var count = 0;
	function addAction(){
		count++;
		console.log(count);
		return count;
	}
	return addAction;
}

var myAdd = add();
myAdd();
myAdd();
myAdd();
myAdd();
myAdd();
myAdd();
console.log("----------")

// 缓存存储结构
// function add(){
// 	var count = 0;
// 	function addAction(){
// 		count++;
// 		console.log(count);
// 		return count;
// 	}
// 	function clearAction(){
// 		count = 0;
// 		console.log(count);
// 		return count;
// 	}
	
// 	return [addAction, clearAction];
// }

// var myAdd = add();
// myAdd[0]();
// myAdd[0]();
// myAdd[0]();
// myAdd[0]();
// myAdd[1]();
// myAdd[0]();
// myAdd[0]();

// 鼓励使用方法，不鼓励直接操作变量
function counter(){
	var count = 0;
	var adder = {
		addAction: function(){
			count++;
			console.log(count);
			return count;
		},
		clearCount: function(){
			count = 0;
			console.log(count);
			return count;
		}
	};
	return adder;
}

var myCounter = counter();
myCounter.addAction();
myCounter.addAction();
myCounter.addAction();
myCounter.addAction();
myCounter.clearCount();
myCounter.addAction();
myCounter.addAction();

var myCounter2 = counter();
myCounter2.addAction();

// 模块化开发，全部使用闭包，不允许使用公有变量。

// 软工规定的思路：第一，尽量避免错误，第二，如果错误不可避免，那么让错误更早的暴露。

// 练习1
// function outer(){
// 	var num = 100;
// 	function add(){
// 		num++;
// 		console.log(num);
// 	}
// 	return add;
// }

// var fn = outer();
// fn();
// fn();
// fn();

// var fn2 = outer();
// fn2();
console.log("-----------")
// 练习2
function outer(){
	var result = new Array();
	for(var i = 0; i < 2; i++){
        
		// result[i] = function(x){
		// 	function f2(){
		// 		return x;
		// 	}
		// 	return f2;
		// }();
        result[i] = function(){
            return i;
        };
	}
	return result;
}
var fn = outer();

// outer()      声明:脚本的 scope chain -> copy [GO], 生成自己的:[ GO, outer-AO ]
// result[0] = function(){}:outer的scope chain -> copy [GO, outer-AO], 没运行
// result[1] = function(){}:outer的scope chain -> copy [GO, outer-AO], 没运行,

console.log(fn[0]()); // 0
console.log(fn[1]()); // 1

console.log("-----------")
function f(x){
    console.log(x)
}(2);

var x = function x(x){
    console.log(x);
}(4);//函数参数

// result[0] = function(){}:outer的scope chain -> copy [GO,outer-AO], 生成自己的:[GO, outer-AO, f-AO]
// result[1] = function(){}:outer的scope chain -> copy [GO,outer-AO], 生成自己的:[GO, outer-AO, f-AO]

// 解这种问题的思路：
//  1，立即执行函数
//  2，立即执行函数内部，再声明函数

// outer()声明:脚本的sc copy [GO], 生成自己的:[GO, outer-AO]
// f1 sc copy [GO, outer-AO], 生成自己的:[GO, outer-AO, f1.0-AO]
// [0] = f2 copy [GO, outer-AO, f1.0-AO]
// f1 sc copy [GO, outer-AO], 生成自己的:[GO, outer-AO, f1.1-AO]
// [1] = f2 copy [GO, outer-AO, f1.1-AO]
// [GO, outer-AO, f1.0-AO, f2.0-AO] // 0
// [GO, outer-AO, f1.1-AO, f2.1-AO] // 1