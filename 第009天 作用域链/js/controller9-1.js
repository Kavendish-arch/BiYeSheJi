// 作用域链
// 1. 外部对内部可见
var scope = 'g';
function t(){
	console.log(scope);
	//var scope = 'l';
	console.log(scope);
}
t();

// 2. 内部对外部不可见。
function t(){
	var scope = 'l';

}
t();
console.log(scope);


// 3. 都可见时，内部优先
var scope = 'g';
function t(){
	console.log(scope);
	var scope = 'l';
	console.log(scope);
}
t();

// JS的作用域，都是函数级别的。

var scope = 'g';
if(true){
	var scope = 'l';
	console.log(scope); //1
}
console.log(scope); //1

for(var i = 0; i < 10; i++){
	
}
console.log(i);// 10

function f(){
	aa = 5;
}
f();
console.log(aa); //5

var f = function(){
	
}
console.log(String);

栈内存
ST001: GEC-SC:HP001
ST002: faEC-SC:HP003
ST003:
ST004:
ST005:
ST006:
ST007:


//堆内存
HP001:GEC-SC: [HP002-(GO)](1)
HP002:GO:     {this:window, g:'g', fa: function { [HP002-(GO)] } }(3)
HP003:faEC-SC:[HP002-(GO), HP004-(fa-AO)](1)
HP004:fa-AO:  {this:window, a:'a', fb: function {[HP002-(GO), HP004-(fa-AO)]}}(2)
HP005:fbEC-SC [HP002-(GO), HP004-(fa-AO), HP006-(fb-AO)](1)
HP006:fb-AO:  {this:window, b:'b'}(1)
HP007:
HP008:
HP009:

function fa(){
	console.log(a);
	var a = 100;
	a++;
}

fa();
fa();
fa();

栈内存
ST001:GEC-SC:HP001
ST002:
ST003:
ST004:
ST005:
ST006:
ST007:


//堆内存
HP001:GEC-SC: [HP002-(GO)](1)
HP002:GO:     {this:window, fa: function {[HP002-(GO)]}}(1)
HP003:
HP004:
HP005:
HP006:
HP007:
HP008:
HP009:


var b = 15;
function fa(x){
	if(x > 2){
		var a = 100;
		a++;
		fa(x-1);
	}
	return 0;
}

fa(3);
//
栈内存
ST001:GEC-SC:HP001
ST002: fa(3)Ec-SC: HP003
ST003: fa(2)Ec-SC: 
ST004:
ST005:
ST006:
ST007:

execution context EC
GO Global Object
AO Activation Object 

//堆内存
HP001:GEC-SC:    [HP002-(GO)](1)
HP002:GO:        
{
    this:window, 
    b:15, fa: 
    function {
        [HP002-(GO)]
    }
}(1)
HP003:fa(3)Ec-SC:
{
    HP002:GO:,      //父类
    HP004:fa(3)-AO, //函数AO
}
HP004:fa(3)-AO      
HP005:
HP006:
HP007:
HP008:
HP009:

var name = 1;

var person = {
	name: 2,
    wife: {
        name: 3,
        age: 4
    }
}
//生成 with variable object
with(person.wife){
	console.log(name);
}

// 闭包
function outer(){
	var scope = 'outer';
	function inner(){
		return scope;
	}
	return inner;
}

var fn = outer();
console.log(fn());

/**
 * 1. 效率
 * 2. 重名
 * 
 */