// if

var iScore = 70;
if(iScore >= 60){
	document.write('[if] U r a good student!!!!<br>');
}

iScore = 50;
if(iScore >= 60){
	document.write('[if] U r a good student!!!!<br>');
}else{
	document.write('[if] Oh, my god!!!!<br>');
}

//100 ~ 90: 优
//90  ~ 75: 良
//75  ~ 60: 中
//60以下        : 差


// 错的
if(iScore <= 100 && iScore >= 90){
	//
}

if(iScore < 90 && iScore >= 75){
	//
}

if(iScore < 75 && iScore >= 60){
	//
}

if(iScore < 60){
	//
}

var iScore = 55;

// 不好 if嵌套语句

//if(iScore >= 90){
//	document.write('[if] 优<br>');  // 1
//}else{
//	if(iScore >= 75){
//		document.write('[if] 良<br>');  // 2
//	}else{
//		if(iScore >= 60){
//			document.write('[if] 中<br>');  // 3
//		}else{
//			document.write('[if] 差<br>');  // 4
//		}
//	}
//}

// 最好

if(iScore >= 90){
	document.write('[if] 优<br>');  // 1
}else if(iScore >= 75){
	document.write('[if] 良<br>');  // 2
}else if(iScore >= 60){
	document.write('[if] 中<br>');  // 3
}else{
	document.write('[if] 差<br>');  // 4
}

