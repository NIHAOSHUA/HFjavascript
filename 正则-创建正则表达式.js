//表示字符串的规则或模式，判断某些字符串是否符合规律和规则
//用途:验证邮箱，验证手机号，有没有特殊字符
var str = "where when what";
var re = /wh/g;
var re2 = new RegExp("wh");

//exec返回数据,test返回布尔值
console.log(re.exec(str));
// console.log(re.test(str));

// console.log(re2.exec(str));
// console.log(re2.test(str));

console.log(re.exec(str));
console.log(re.exec(str));
console.log(re.exec(str));
