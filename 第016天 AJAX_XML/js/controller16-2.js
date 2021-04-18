//// AJAX JS原生实现 JSON

var jsonHttp;

function loadJSONDoc(url_action){
	jsonHttp = null;
    if(window.XMLHttpRequest){
        jsonHttp = new XMLHttpRequest();
    } else if(window.ActiveXObject()){
        jsonHttp = new ActiveXObject('Microsoft.XMLHttp');
    }
    
    if(jsonHttp != null){
        jsonHttp.onreadystatechange = stateChange;
        jsonHttp.open("GET",url_action + '?t=' + Math.random(),true);
        jsonHttp.send();
    }
}
    function stateChange(){
        if(jsonHttp.readyState == 4){
            if(jsonHttp.status == 200){
                var theDiv = document.getElementById('theD');
                theDiv.innerHTML = jsonToHTML(jsonHttp.responseText)
                console.log("hello");
            }
        }
    }
// function stateChange(){
// 	if(jsonHttp.readyState == 4){
// 		if(jsonHttp.status == 200){
// 			var theDiv = document.getElementById('theD');
// 			//theDiv.innerText = jsonHttp.responseText;
// 			//console.log(jsonToHTML(jsonHttp.responseText));
// 			theDiv.innerHTML = jsonToHTML(jsonHttp.responseText);
// 		}
// 	}
// }

function jsonToHTML(jsonString){
    var strTmp = '<table>';
    var json = JSON.parse(jsonString);
    var lines = json['LINE'];
    for (var i = 0; i < lines.length; i++){
        var columns = lines[i]['COLUMN'];
        strTmp += '\n\r\t<tr>';
        strTmp += '\n\r\t<th>' + columns[0]['TEXT'] + '</th>';
        strTmp += '\n\r\t<th>' + columns[1]['TEXT'] + '</th>';
        strTmp += '\n\r\t</tr>';
    }
    strTmp += '\n\r\t</table>';
    return strTmp;
}

// function jsonToHTML(jsonString){
// 	var strTmp = '<table>';
// 	var json = JSON.parse(jsonString);
// 	var lines = json['LINE'];
// 	for(var i = 0; i < lines.length; i++){
// 		var columns = lines[i]['COLUMN'];
// 		strTmp += '\n\r\t<tr>';
// 		strTmp += '\n\r\t\t<th>' + columns[0]['TEXT'] + '</th>';
// 		strTmp += '\n\r\t\t<th>' + columns[1]['TEXT'] + '</th>';
// 		strTmp += '\n\r\t</tr>';
// 	}
	
// 	strTmp += '\n\r</table>';
	
// 	return strTmp;
// }

var a = 
{
 "LINE":[
            {"COLUMN":
                [
                    {"TEXT":"1.1"},
                    {"TEXT":"1.2"}
                ],
            },
            {"COLUMN":
                [
                    {"TEXT":"2.1"},
                    {"TEXT":"2.2"}
                ],
            },
            {"COLUMN":[
                {"TEXT":"3.1"},
                {"TEXT":"3.2"}
            ]},
            {"COLUMN":[
                {"TEXT":"4.1"},
                {"TEXT":"4.2"}
            ]},
            {"COLUMN":[
                {"TEXT":"5.1"},
                {"TEXT":"5.2"}
            ]}
        ]
}

console.log(a)