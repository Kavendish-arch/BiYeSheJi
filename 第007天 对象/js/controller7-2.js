// 对象属性可以增删改查
// 增加一个属性？

var obj = {};

obj.a = 'aaa';
obj['1'] = 'bbb';

obj.f1 = function(){
	console.log('ff.........');
};


//function f2(){
//	window.aa = 5; // 等价于 aa = 5
//};
//f2();
//alert(aa);

//var arr = [];
//arr[0] = 'aaa';
//arr[1] = 'bbb';

// 删除一个属性
// 查询一个属性是否存在？
//// 1. in
//console.log('a' in obj);
//
//// 2. hasOwnProperty()
//console.log(obj.hasOwnProperty('a'));
//
//// delete
//delete obj.a;
//console.log('a' in obj);
//console.log(obj.hasOwnProperty('a'));
//
//var arr = [];
//arr['a'] = 'c';
//delete arr['a'];
//console.log(arr);

// 修改一个属性
obj.a = 123;

// 枚举
for(var p in obj){
	console.log(p);
}

obj.a
obj.toString();

console.log(obj.propertyIsEnumerable('a'));
console.log(obj.propertyIsEnumerable('toString()'));
