// HTML DOM

// document对象
console.log("document object ")
console.log(window.document);

// 1. getElmentById(string);
var p1 = document.getElementById('i1');
console.log("getElementById",p1);
// IE8及以下浏览器，id不区分大小写，同时还会匹配name属性。

// 2. getElementsByClassName(string)
var pcls1 = document.getElementsByClassName('cls1');
console.log(pcls1);

// 3. getElementsByTagName
var ps = document.getElementsByTagName('p');
console.log("getElementsByTagName ",ps);

// name属性，只对部分元素有效：form, 表单元素, img, iframe
// getElementsByName
var inputs = document.getElementsByName('firstname');
console.log("getElementsByName",inputs);

// querySelector() 返回第一个指定CSS选择器的元素。
document.querySelector('form input').style.color = 'red';

// querySelectorAll() 返回所有
var s = document.querySelectorAll('form input');
console.log(s)
s[0].style.color = 'red';
s[2].style.color = 'red';


