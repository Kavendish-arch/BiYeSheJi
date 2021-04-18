//形参和实参
/**
 * 在C/C++ java 中参数少或多会报错
 * 函数重载(参数类型改变)
 * JavaScript 无函数重载，第二个重名函数会覆盖
 * JavaScript function(a,b,c) 形参和实参
 * 数量、类型都可以不同
 * 形参和实参会绑定、动态关联
 */
function foo(a,b,c){ //a b c 形参
	console.log(foo.length);
	console.log(arguments);//arguments 实参的数组

	arguments[1] = -1;
	console.log("a=" + a);
	console.log("b=" + b);
	b = 0;
	console.log("b=" + b);
	console.log(arguments[1]);
}
foo(1);
foo(1,2,3,4,5,6);

//函数递归
/**
 * f(1)成立
 * f(n) 和 f(n-1) 成立
 */
function fe(x){
	if(x < 0)
		return 0;
	console.log('begin' + x);
	foo(--x);
	console("end" + x);
}
/**
 * 1) f(3)
 * 2) f(3)
 * 	  f(2)
 * 3) f(3)
 * 	  f(2)
 * 	  f(1) = 1
 * 
 * 返回

 * 3) f(3)
 * 	  f(2)
 * 2) f(3) 	  
 * 
 * 
 */
function step(x){
	switch(x){
		case 1:
			return 1;
			break;
		case 2:
			return 2;
	}
}
 /**
  * 台阶 
  * step(1) 1
  * step(2) 2
  * step(3) 1 + step(2) + step(1) = 4
  * 
  */