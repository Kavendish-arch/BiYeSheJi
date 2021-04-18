// for

// 0 ~ 19
//for(var i = 0 ; i < 20; i++){
//	//document.write('[for]' + i + '<br>');
//}

//i = 0;
//for(;i<20;){
//	//document.write('[for]' + i + '<br>');
//	i++;
//}

// do while

//i = 0;
//do{
//	//document.write('[for]' + i + '<br>');
//	i++;
//}while(i < 20)

// while

//i = 0;
//while(i < 20){
//	if(i == 10){
//		break;
//	}
//	document.write('[for]' + i + '<br>');
//	i++;
//}

//var i = 0;
//while(i < 20){
//	if(i == 10){
//		i++;
//		continue;
//	}
//	document.write('[for]' + i + '<br>');
//	i++;
//}

////50000以内,找到前五个满足:初7余5,13:7,17:13
////var b1 = false;
////var b2 = false;
////var b3 = false;
//var count = 0;
//for(var i = 1; i <= 50000; i++ ){
////	b1 = false;
////	b2 = false;
////	b3 = false;
//	
////	if(){
////		b1 = true;
////	}
////	
////	if(){
////		b2 = true;
////	}
////	
////	if(){
////		b3 = true;
////	}
//	
//	if(i % 7 == 5 && i % 13 == 7 && i % 17 == 13){
//		document.write('[50000以内]' + i + '<br>');
//		count++;
//		if(count >= 5){
//			break;
//		}
//	}	
//}

// 计算阶乘  10! = 10 * 9 * 8 * 7 ~ 1
//var iRet = 1;
//var n = 10;
//for(var i = n; i >= 1; i--){
//	if(!isFinite(iRet)){
//		document.write('[阶乘] break <br>');
//		break;
//	}
//	
//	iRet *= i;
//	
//}
//
//document.write('[阶乘] ' + iRet + '<br>');

// 1累加到100
//var iRet = 0;
//var n = 1E8; // 限制n的大小
//for(var i = 1; i <= n; i++){
//	if(!isFinite(iRet)){
//		iRet += i;
//	}
//}
//
//document.write('[累加]' + iRet + '<br>');

//var bJump = false;
//for(var i;;){//1
//	if(bJump)
//		break;
//	for(var j;;){//2
//		if(bJump)
//			break;
//		for(var k;;){//3
//			if(bJump)
//				break;
//			for(var l;;){//4
//				bJump = true;
//				if(bJump)
//					break;
//			}
//		}
//	}
//}


// 5的n次幂
var iRet = 1;
var n = 300;
var di = 5;
for(var i = 0; i < n; i++){
	if(!isFinite(iRet)){
		break;
	}
	iRet *= di;
}

document.write('[n次幂]' + iRet + '<br>');
