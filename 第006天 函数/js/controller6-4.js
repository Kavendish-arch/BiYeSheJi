// 嵌套函数
// 重复的过程要提炼出函数
function hypotenuse(a, b){
//	function square(x){
//		return x * x;
//	}
	var square = function(x){
		return x * x;
	};
	return Math.sqrt(square(a) + square(b));
}
hypotenuse(3,4);

console.log(hypotenuse(3,4));
