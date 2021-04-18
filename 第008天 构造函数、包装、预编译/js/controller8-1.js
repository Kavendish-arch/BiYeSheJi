// 构造函数
// 我们需要一种函数，能够每次以相同的方式 快速构造对象；
// 同时，改动这个函数，所有的对象都能跟着改变。
// 构造函数，名称已大写字母开头（约定俗成）
/**
 * 构造函数：属性name age gender
 * @param {*} name 
 * @param {*} age 
 * @param {*} gender 
 */
function Student(name, age, gender){
	this.name = name;
	this.age = age;
	this.gender = gender;
}

var std = new Student('Wangli', 30, 'male');
//构造函数有无返回值
//无 new
//有 
function Student2(name, age, gender){
	var object = {};

	object.name = name;
	object.age = age;
	object.gender = gender;
	
	return object;
}

var std2 = Student2('Wangli', 30, 'male');

/**
 * 代码命名规则
 * 1. 匈牙利命名规则 
 * 属性+类型+对象 
 * 	m_成员
 * 	s_静态
 *  c_常量
 * 类型：int i,  array a, string str
 * 对象描述： 单词
 * 
 * 2. 大驼峰命名规则
 * 对象
 * 3. 小驼峰命名规则
 * sumSort() getAge()
 */
