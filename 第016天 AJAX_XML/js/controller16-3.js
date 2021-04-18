// AJAX in Jquery


// $('#theB').onclick(function(){
//    htmlobj = $.ajax({
       
//    });
// });



$(document).ready(function(){
    // id=theB 点击事件
	$('#theB').click(function(){
		htmlobj = $.ajax({
			type: "get",
			url: './json/data.json',
			async: true,
			dataType: 'json',
			success: function(data){
                //.text == innerText
				//$('#theD').text(JSON.stringify(data));
				//console.log(data);
				
				$('#theD').append(jsonToHTML(data));
			}
		});
	});
});

function jsonToHTML(json){
    //xml 标签 对象
	var table = $('<table/>');
    //取出 json['LINE'] 集合each 运行
	$(json['LINE']).each(function(){
        
		var tr = $('<tr/>').appendTo(table);
		$(this['COLUMN']).each(function(){
            
			var th = $('<th/>').html(this['TEXT']).appendTo(tr);
		});
        
	});
	
	return table;
}
