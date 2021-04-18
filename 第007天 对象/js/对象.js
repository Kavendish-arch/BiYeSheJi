// 对象

// document  对象
// window 对象
// aa = 2 == window.aa = 2 
// var 自己建立的

// 对象的创建
var obj1 = {};
var obj2 = new Object();
// 两个方法都可以。

var objBook = {
	name: 'Book Name', 
        // 原始成员 
	pageNumber: 300,
	author: { 
        // 引用成员 对象
		firstname: 'aaa',
		lastname: 'bbb'
	},
	query: function(){ 
        // 成员函数 函数表达式
		console.log('query he');
	},
	addPage: function(){
		this.pageNumber++;
		console.log('addPage');
	}
};
console.log(++objBook['pageNumber']);
objBook.query();
objBook['query']();
objBook.query();


var students = {
	name: 'Students Name',
	No: 'StudentsNo',
	teacher: {
		name:"xx",
		class:"cc"
	},
	study:function(){
		console.log("i'm studying");
	},
	goBack: function(){
		console.log("go back");
	}
};

students.goBack();
students['study'];
students['parents'] = "fff";
console.log("-------------");


// 对象属性可以增删改查
// 增加一个属性？

var obj = {};
// alert(obj.a);
/**和字典类似 */
// 添加方式
// 1. 成员
obj.a = 'aaa';
// 2. 键值对
obj['1'] = 'bbb';

// alert(obj.a);
/**增加函数 */
obj.f1 = function(){
	console.log('ff.........');
};
obj['f2'] = function(){
	console.log("f2 add");
}
obj['f2'];

/**window 是一个内置对象
 * document
 */
function f2(){
	fun = '函数内定义的全局变量';
	/**无 var 会被认为window对象 */
	//window.aa = 5; // 等价于 aa = 5
};
f2();
// alert(fun);

//var arr = [];
//arr[0] = 'aaa';
//arr[1] = 'bbb';


// 删除一个属性
// 查询一个属性是否存在？
// 1. in
console.log("----------");
console.log('a' in obj);

// 2. hasOwnProperty()
console.log(obj.hasOwnProperty('a'));

// delete
delete obj.a;
console.log('a' in obj);
console.log(obj.hasOwnProperty('a'));

var arr = [];
arr['a'] = 'c';
console.log(arr);
delete arr['a'];
console.log(arr);

// // 修改一个属性
// obj.a = 123;

// 枚举
for(var p in obj){
	console.log(p);
}

obj.a
obj.toString();
//js 的继承

console.log(obj.propertyIsEnumerable('a'));
console.log(obj.propertyIsEnumerable('toString()'));

