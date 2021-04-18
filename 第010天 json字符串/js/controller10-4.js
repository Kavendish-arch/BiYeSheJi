// JSON 字符串  
// JavaScript Object Notation
// print('hello')
// var strJSON = '{"name":"Albad",\n' + 
// 	'"age":25}';
var strJSON = '{"name":"ab", "age":23}'
console.log("字符串",typeof(strJSON),strJSON);
//
// string -> object 三种方法


console.log(eval('('+strJSON+')'))
var obj = {
	'name': 'Albad',
	'age': 25
}
console.log(typeof(obj), obj)



// 1. eval() 你自己产生一个string 当做JS脚本，交由JS引擎运行、加括号变成表达式
var strJSON2 = '(' + strJSON + ')';
console.log(typeof(strJSON2), strJSON2);

var obj1 = eval(strJSON2);
console.log(typeof(obj1), obj1)

// 2. JSON.parse()
var obj2 = JSON.parse(strJSON);
console.log("JSON.parse() : ",typeof(obj2), obj2)

// 3. jQuery.parseJSON()
var obj3 = jQuery.parseJSON(strJSON);
// var obj3 = $().parseJSON(strJSON)
console.log("jQuery.parseJSON() : ",typeof(obj3), obj3)


// object -> string
// 1. JSON.stringigy()
var strJSON3 = JSON.stringify(obj1);
console.log("JSON.stringigy() ",typeof(strJSON3),strJSON3);

// 2. jQuery.toJSON()
var strJSON4 = jQuery.toJSON(obj1);
console.log("jQuery.toJSON()",typeof(strJSON4), strJSON4);

// 练习1，把一张九九乘法表放入JSON，然后解析

var jiujiu = {
	'0':['1 x 1 = 1'],
	'1':['1 x 2 = 2', '2 x 2 = 4'],
}
console.log(jiujiu)
// for (var i = 0; i < length(jiujiu); i++){
//     console.log(jiujiu[i])
// }
// var user = {
//     "empId":1,
//     "empName":"张三疯",
//     "empHead":null,
//     "empSex":"男",
//     "dept": [{"deptId":1},{"deptName":"研发部"}]
// }


var oNNTable = {};
for(var i = 1; i <= 9; i++){
	var line = [];
	for(var j = 1; j <= i; j++){
		var str = i + ' x ' + j + ' = ' + (i*j);
		line.push(str);
	}
	oNNTable[i-1] = (line);
}
console.log(oNNTable)
var sNNTable = JSON.stringify(oNNTable);

// var jsonTable = JSON.parse(sNNTable);
// for(var x in jsonTable){
// 	var line = jsonTable[x];
// 	for(var y in line){
// 		var text = line[y];
// 		console.log(text);
// 	}
// }

var jsonTable = JSON.parse(sNNTable)

for (var x in jsonTable){
    var line = jsonTable[x]
    for (var y in line){
        var text = line[y]
        console.log(text)
    }
}



// 把一张学生成绩单，放入JSON然后解析
// 学生的信息，包括：name，birthday, gender, class, {course, scale}

var oStdTable = {};
oStdTable.students = [];

var student = {
	'name': '小明',
	'birthday': '1988-03-08',
	'class': '一班',
	'scales': [
		{
			'course': '语文',
			'scale': 92
		},
		{
			'course': '数学',
			'scale': 97
		},
		{
			'course': '英语',
			'scale': 88
		}
	]
};
oStdTable.students.push(student);

var student = {
	'name': '小红',
	'birthday': '1987-09-05',
	'class': '二班',
	'scales': [
		{
			'course': '物理',
			'scale': 92
		},
		{
			'course': '化学',
			'scale': 97
		}
	]
};
oStdTable.students.push(student);

var student = {
	'name': '小齐',
	'birthday': '1990-05-01',
	'class': '一班',
	'scales': [
		{
			'course': '历史',
			'scale': 92
		},
		{
			'course': '地理',
			'scale': 97
		}
	]
};
oStdTable.students.push(student);


var sStdTable = JSON.stringify(oStdTable);
console.log(sStdTable);

var jsonTable = JSON.parse(sStdTable);
for(var x in jsonTable.students){
	console.log(jsonTable.students[x].name);
	console.log(jsonTable.students[x].birthday);
	console.log(jsonTable.students[x].class);
	
	var scales = jsonTable.students[x].scales;
	for(var y in scales){
		console.log('    ' + scales[y].course + ':' + scales[y].scale );
	}
}
