// &&

var bRst = true;
var bRst2 = true;
document.write('[&&] bRst && bRst2 ?' + (bRst && bRst2) + '<br>');

// 1,都是布尔
document.write('[&&] true && false ?' + (true && false) + '<br>');
document.write('[&&] true && true ?' + (true && true) + '<br>');
document.write('[&&] false && false ?' + (false && false) + '<br>');
document.write('[&&] false && true ?' + (false && true) + '<br>');

// 2, x && y -> if x is false, return x, else return y
document.write('[&&] 0 && true ?' + (0 && true) + '<br>');
// 0,undefined,null,NaN,''
document.write('[&&] undefined && true ?' + (undefined && true) + '<br>');
document.write('[&&] null && true ?' + (null && true) + '<br>');
document.write('[&&] NaN && true ?' + (NaN && true) + '<br>');

var iCount = 0;

document.write('[&&] 0 && true ?' + (0 && (++iCount)) + '[' + iCount +']<br>');
document.write('[&&] undefined && true ?' + (undefined && (++iCount)) + '[' + iCount +']<br>');
document.write('[&&] null && true ?' + (null && (++iCount)) + '[' + iCount +']<br>');
document.write('[&&] NaN && true ?' + (NaN && (++iCount)) + '[' + iCount +']<br>');

// 3, data && fn(data);

// || 
document.write('[||] true || false ?' + (true || false) + '<br>');
document.write('[||] true || true ?' + (true || true) + '<br>');
document.write('[||] false || false ?' + (false || false) + '<br>');
document.write('[||] false || true ?' + (false || true) + '<br>');

// 2, x || y -> if x is true, return x, else return y

// 3, var event = e || window.event;

document.write('[!] !false ?' + (!false) + '<br>');

var iNum2 = 123;
var iNum3 = 456;
//var iTemp = iNum2;
//iNum2 = iNum3;
//iNum3 = iTemp;
iNum2 += iNum3; // 123 + 456
iNum3 = iNum2 - iNum3; // 123
iNum2 = iNum2 - iNum3; // 456

var iNum1 = 4;
document.write('[1]' + (30<15?!true:true,iNum1*4+5<3==25>24&&false||true)  + '<br>');
//30<15?!true:true,iNum1*4+5<3==25>24&&false||true
//false?!true:true,iNum1*4+5<3==25>24&&false||true
//false?false:true,iNum1*4+5<3==25>24&&false||true
//true,iNum1*4+5<3==25>24&&false||true
//4*4+5<3==25>24&&false||true
//21<3==25>24&&false||true
//false==true&&false||true
//false&&false||true
//false||true
//true
var iNum1 = 4;
document.write('[2]' + (100>15?(iNum1=++iNum1*3+5/3):false) + '<br>');

var iNum1 = 4;
document.write('[3]' + (1 + 1 + true + null + 'ccc' + 1 + 1 + true + null) + '<br>');
