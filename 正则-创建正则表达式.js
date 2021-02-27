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

//字符匹配
console.clear();

var str = `This str contains 123
CAPITALIZED letters and _-$^% symbols`;

console.log(/T/.test(str));

//特殊字符匹配
//match把匹配到的值返回
console.clear();
console.log(str.match(/Th.s/g));
console.log(str.match(/1.3/g));
//\d代表数字0~9
console.log(str.match(/\d/g));
///w代表数字字母和_
console.log(str.match(/\w/g));
//\s代表空白字符
console.log(str.match(/\s/g));
//unicode
console.log("你好".match(/\u4f60/g));

//匹配次数
console.clear();
var str = `This str contains 123 CAPITALIZED letters and _-$^% symbols`;
//*代表0次或多次
//javascript中的变量可以重复定义，新的值会覆盖旧的值
console.log(str.match(/This.*/g));
//+代表1次或多次
console.log(str.match(/t+/g));
//用?代表匹配一个字符出现了0次或一次
console.log(str.match(/t?/g));

console.log(str.match(/t{2}/g));
console.log(str.match(/\d{1,3}/g));

//区间\逻辑和界定符
console.clear();
console.log(str.match(/[abc]/g));
console.log(str.match(/[a-z]/g));
console.log(str.match(/[0-9]/g));
console.log(str.match(/[^a-z]/g));
console.log(str.match(/[^0-9]/g));
console.log(str.match(/[\-_&\^]/g));
console.log(str.match(/This|contains/g));

//^不在中括号里则代表一个界定符，界定字符串的开始
//$界定字符串的结尾
//\b匹配单词的边界
var str = "this thata this and that";
console.log(str.match(/^this/g));
console.log(str.match(/this/g));
console.log(str.match(/that$/g));
console.log(str.match(/that/g));
console.log(str.match(/\bthat\b/g));

//分组
console.clear();

var str = `this that this and that`;
console.log(/(th).*(th)/.exec(str));

var str = `aaaab abb cddaa`;
console.log(str.match(/(aa){2}/g));

//常见的正则表达式
console.clear();
//手机号
var mobileRe = /^1[3-9]\d{9}/g;
console.log(mobileRe.test("18789108066"));
//邮箱
var emailRe = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/g;
console.log(emailRe.test("sdjyq@163.com"));
//账号
var usernameRe = /^[a-zA-Z][a-zA-Z0-9_]{5,14}$/g;
console.log(usernameRe.test("abcded"));

//字符串替换
console.clear();
var str = "Tish 1is 2an 3apple";
console.log(str.replace("Tish", "This"));
console.log(str.replace(/\d+/g, ""));

var html = `<span>hello</span><div> world</div>`;
console.log(html.replace(/<[^>]*>([^<>]*)<\/[^>]*>/g, "$1"));

//字符串分隔
var tags = "html, css, javascript";
console.log(tags.split(", "));

var str = "This  | is , an & apple";
console.log(str.split(/\W+/g));
