// 脚本的预编译 javaScript 扫描
/**
 * 预编译(扫描) 第一次前置扫描，
 * 脚本
 *      加载全局变量 GO(windows) 上下文
 *      加载脚本文件
 *      预编译
 *          找出变量申明 var 加入全局变量 不赋值， 运行时复制 同名时替换
 *          函数声明 function 加入全局变量 function x(){ }
 *          非申明
 * 解释执行 第二次扫描
 */
// 1, 没有var的变量，都不是变量声明，全部认为是window的全局变量，不参与预编译
console.log(aa);
aa = 5;
console.log(aa);

// 2，即使在函数中，aa也是全局变量 是运行时，不是定义时。
test();
function test(){  //函数声明
	a = 5;
}
console.log(a);

// 3. 脚本中，所有变量声明，在脚本的预编译阶段完成，所有变量的声明与实际的书写位置无关。
console.log(aa);
var aa = 5;
console.log(aa);

// 4. 脚本中，所有函数声明，在脚本的预编译阶段完成，所有函数的声明与实际的书写位置无关。
console.log(haha);
function haha(){
	console.log('h1');
}

// 5. 脚本中，如果变量与函数同名，那么，函数将覆盖变量。
console.log(haha);
var haha = 123;
function haha(){
	console.log('h1');
}

6. 脚本中，只有函数能够覆盖变量，变量无法覆盖函数。
console.log(haha);
function haha(){
	console.log('h1');
}
var haha = 123;

7. 脚本中，后面的函数声明会覆盖前面的函数声明，并且，忽略参数。

console.log(haha);

function haha(a){
	console.log('haha1');
}

function haha(a,b){
	console.log('haha2');
}


