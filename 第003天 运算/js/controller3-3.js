// > 数字比较

document.write('[>] 2 > 1 ? ' + 2 > 1 + '<br>');
//'[>] 2 > 1 ? ' + 2 > 1 + '<br>'
//'[>] 2 > 1 ? 2' > 1 + '<br>'
//'[>] 2 > 1 ? 2' > '1<br>'
document.write('[>] 2 > 1 ? ' + (2 > 1) + '<br>');
document.write('[>] 2 < 1 ? ' + (2 < 1) + '<br>');
document.write('[>] 2 >= 1 ? ' + (2 >= 1) + '<br>');
document.write('[>] 2 <= 1 ? ' + (2 <= 1) + '<br>');

// 字符串比较
document.write('[>] \'aaa\' > \'bbb\' ? ' + ('aaa' > 'bbb') + '<br>');
document.write('[>] \'aaa\' > \'abb\' ? ' + ('aaa' > 'abb') + '<br>');
document.write('[>] \'aaa\' > \'aBb\' ? ' + ('aaa' > 'aBb') + '<br>');

document.write('[>] \'25\' < \'4\' ? ' + ('25' < '4') + '<br>');
////////////////////////////////////////////////////////////
document.write('[>] \'25\' < 4 ? ' + ('25' < 4) + '<br>');
document.write('[>] \'aaa\' > 4 ? ' + ('aaa' > 4) + '<br>');

document.write('[?:] 25>4?' + (25>4 ? 'l' : 's') + '<br>');

// ==
document.write('[==] null == undefined ?' + (null == undefined) + '<br>');
document.write('[==] \'NaN\' == NaN ?' + ('NaN' == NaN) + '<br>');
document.write('[==] 5 == NaN ?' + (5 == NaN) + '<br>');
document.write('[==] NaN != NaN ?' + (NaN != NaN) + '<br>');
document.write('[==] false == 0 ?' + (false == 0) + '<br>');
document.write('[==] true == 1 ?' + (true == 1) + '<br>');
document.write('[==] true == 2 ?' + (true == 2) + '<br>');
document.write('[==] undefined == 0 ?' + (undefined == 0) + '<br>');
document.write('[==] null == 0 ?' + (null == 0) + '<br>');

document.write('[==] \'5\' == 5 ?' + ('5' == 5) + '<br>');
document.write('[==] \'5\' === 5 ?' + ('5' === 5) + '<br>');
document.write('[==] \'5\' != 5 ?' + ('5' != 5) + '<br>');
document.write('[==] \'5\' !== 5 ?' + ('5' !== 5) + '<br>');

document.write('[==] null == undefined ?' + (null == undefined) + '<br>');
document.write('[==] null === undefined ?' + (null === undefined) + '<br>');
document.write('[==] true == 1 ?' + (true == 1) + '<br>');
document.write('[==] true === 1 ?' + (true === 1) + '<br>');
document.write('[==] false == 0 ?' + (false == 0) + '<br>');
document.write('[==] false === 0 ?' + (false === 0) + '<br>');
document.write('[==] [] == \'\' ?' + ([] == '') + '<br>');
document.write('[==] [] === \'\' ?' + ([] === '') + '<br>');
document.write('[==] {} == \'[object Object]\' ?' + ({} == '[object Object]') + '<br>');
document.write('[==] {} === \'[object Object]\' ?' + ({} === '[object Object]') + '<br>');
document.write('[==] [5] == \'5\' ?' + ([5] == '5') + '<br>');
document.write('[==] [5] === \'5\' ?' + ([5] === '5') + '<br>');

