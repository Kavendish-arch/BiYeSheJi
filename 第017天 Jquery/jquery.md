## 事件
1. ready()dom载入事件

2. blur() 失去焦点 blur(function)
3. change() change(function) 
change事件会在元素失去焦点的时候触发，也会当其值在获得焦点后改变时触发。




重定向几个例子：

第一种：
    <script language="javascript" type="text/javascript">
           window.location.href="href.php?backurl="+window.location.href;
    </script>

第二种：
    <script language="javascript">
        alert("返回");
        window.history.back(-1);
   </script>

第三种：
   <script language="javascript">
        window.navigate("href.php");
   </script>

第四种：
   <script language="JavaScript">
          self.location='href.php';
   </script>

第五种：
   <script language="javascript">
          alert("非法访问！");
          top.location='href.php';
   </script>
   
   转发的一个例子：
   
   function forward() {
   
       ... ... ... ... ... ... ...
   
       //获得表单内容并转发
       var doc = document.getElementById("document");
       doc.action = "${pageContext.request.contextPath}/documentManager/save";
       doc.method = "post";
       doc.submit();
   
   }