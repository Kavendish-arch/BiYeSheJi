// DOM 增删替

//var p = document.createElement('p');
//var txt = document.createTextNode('aaaa');
//p.appendChild(txt);
//console.log(p);
//document.body.appendChild(p);
//// append 父亲元素把儿子元素放到所有当前儿子元素的最后。
//var p2 = document.createElement('p');
//var txt2 = document.createTextNode('bbbb');
//p2.appendChild(txt2);
//document.body.insertBefore(p2, p);
//
//// 删除 removeChild 父亲删除儿子
////console.log(document.body.removeChild(p2))
//
//// 删除 remove 元素自杀
////p2.remove();
//
//// 替换 replace 父亲替换儿子
//var p3 = document.createElement('p');
//var txt3 = document.createTextNode('cccc');
//p3.appendChild(txt3);
//
//document.body.replaceChild(p3, p2);

// 练习：
var p = document.getElementById('pid');
var stg = document.createElement('strong');
var str = document.createTextNode('Hey, it is new line!');
stg.appendChild(str);
p.appendChild(stg);

var cmt = document.createComment('###Comment');
p.insertBefore(cmt, stg);

//var df = document.createDocumentFragment();
//df.appendChild(document.getElementsByClassName('firstname')[0]);
//df.appendChild(document.getElementsByClassName('firstname')[0]);
//p.appendChild(df);

// element.innerHTML
// node.innerText
// node.textContent

//p.innerHTML = '<a href="http://www.taobao.com">淘宝</a>';
//p.innerText = '<a href="http://www.taobao.com">淘宝</a>';
//p.textContent = '<a href="http://www.taobao.com">淘宝</a>';

// element.setAttribute()
// element.getAttribute()

console.log(p.getAttribute('class'));
p.setAttribute('class', 'cls2');
console.log(p.getAttribute('class'));
