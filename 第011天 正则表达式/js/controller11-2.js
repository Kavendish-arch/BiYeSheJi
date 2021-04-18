// 练习1，做一个钟表
//var timer;
//
//function startTime(){
//	var today = new Date();
//	var h = to2bit(today.getHours());
//	var m = to2bit(today.getMinutes());
//	var s = to2bit(today.getSeconds());
//	
//	var div = document.getElementById('txt');
//	div.innerHTML = h + ':' + m + ':' + s;
//	timer = setTimeout('startTime()', 20);
//}
//
//function stopTime(){
//	clearTimeout(timer);
//}
//
//function to2bit(num){
//	if(num < 10){
//		return '0' + num;
//	}else{
//		return '' + num;
//	}
//	
//}
//
//timer = setTimeout('startTime()', 20);

// 改造成使用setInterval和clearInterval
//var timer;
//
//function startTime(){
//	var today = new Date();
//	var h = to2bit(today.getHours());
//	var m = to2bit(today.getMinutes());
//	var s = to2bit(today.getSeconds());
//	
//	for(var i = 1000000000; i > 0; i--){
//		
//	}
//	
//	var div = document.getElementById('txt');
//	div.innerHTML = h + ':' + m + ':' + s;
//	//timer = setTimeout('startTime()', 20);
//}
//
//function stopTime(){
//	clearInterval(timer);
//}
//
//function to2bit(num){
//	if(num < 10){
//		return '0' + num;
//	}else{
//		return '' + num;
//	}
//	
//}
//
//timer = setInterval('startTime()', 20);

// 练习2，做一个可以伸长的div
