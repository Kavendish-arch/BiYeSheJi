// 函数表达式

// (function f(){})
// var f = function ff(){};
// ff(a,function fff(){},b);

//var f = function fact(x){
//	if(x <= 1){
//		return 1;
//	}else{
//		return x * fact(x-1);
//	}
//};

var f = function(x){
	if(x <= 1){
		return 1;
	}else{
		return x * arguments.callee(x-1);
	}
};

console.log(f(5));

//f(5);
//5 * f(4)
//  4 * f(3)
//      3 * f(2)
//          2 * f(1)
//              1


//function reverseNumber(num){
//	if(typeof num != 'number'){
//		return '';
//	}
//	
//	if(!isFinite(num) || isNaN(num)){
//		return '';
//	}
//	
//	return +num.toString().split('').reverse().join('');
//}
