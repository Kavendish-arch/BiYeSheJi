
url = '"https://fanyi.baidu.com/basetr982ans query":"hello","from":"en","to":"zh""User-Agent":"Mozilla/5.0 (iPhone; CPU iPhone OS 10_3 like Mac OS X) AppleWebKit/6-02.1.50 0.89(KHTML, like Gecko) CriOS/56.0.-92924.75 Mobile/14E5239e Safari/602.1"'

console.log(url)

// ### 初级练习
// 1、求非负整数 : ^\d+$
regExp = /[\d]{2,5}/g
console.log(url.match(regExp))

// 2、匹配正整数： ^[1-9]*[1-9][0-9]*$ 在网上也有这种写法的 ^[0-9]*[1-9][0-9]*$
regExp = /[1-9][\d]+/g
console.log(url.match(regExp))
// 3、非正整数：^(-\d+|(0+))$
regExp = /-[\d]+/g
console.log(url.match(regExp))
// 4、负整数：^-[0-9]*[1-9][0-9]*$  
regExp = /-[\d]+/g
// 5、整数 ：^-?\d+$
regExp = /-?\d+/g
console.log("整数 " + url.match(regExp))
// 6、非负浮点数 ：^\d+(\.\d+)?$
regExp = /[1-9]\d+\.\d+/g
console.log("浮点数 " + url.match(regExp))

// 7、正浮点数 ：^(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*))$

// 8、非正浮点数 ：^((-\d+(\.\d+)?)|(0+(\.0+)?))$

// 9、负浮点数：^(-(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*)))$

// 10、浮点数：^(-?\d+)(\.\d+)?$
regExp = /(-?\d+)\.(\d+)/g
// 11、有数字、26个英文字母组成的字符串：^[A-Za-z0-9]+$
regExp = /\w+/g
console.log("数字字母 " + url.match(regExp))


str = "shdsdhw345@3 8s0*shd lihs@dkc."
// 中级练习
// 1、长度为8-10的用户密码（以字母开头、数字、下划线）^[a-zA-Z]\w{7,10}$
regExp = /[a-zA-Z][\w@#+-/*]{7,9}/g
console.log("匹配密码 " + str.match(regExp))

// 2、验证输入只能是汉字 ： ^[\u4e00-\u9fa5]{0,}$
str = "我现在要校验形式如：张三1#101，"
regExp = /[\u4e00-\u9fa5]{0,}/g
console.log("验证汉字 " + str.match(regExp))

// 3、电子邮箱验证：^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$
regExp = /\w{3,8}@[\w]?(.\w+){1,3}/g
str = "www.baid@qq.com.cn"
console.log("验证邮箱 " + str.match(regExp))

// 4、URL地址验证：^http://([\w-]+\.)+[\w-]+(/[\w-./?%&=]*)?$
regExp = /https:\/\/(\w+)(.\w+){2,}(\/\w+\.{0,1}\w{0,})/g
str = "https://zhidao.baidu.com/question/155461981.html"
str2 = "https://blog.csdn.net/kiritor/article/details/8733469"
console.log("验证url " + str.match(regExp))

// 5、电话号码的验证：请参考：http://blog.csdn.net/kiritor/article/details/8733469
regExp = //g
// 6、简单的身份证号验证：\d{15}|\d{18}$
