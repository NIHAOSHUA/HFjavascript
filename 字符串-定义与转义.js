var str = "hello";
console.log(str);

var str2 = new String("你好");
console.log(str2);

//转义字符
//\n换行\t4个空格的长度
str = '他说: \t"我们出去玩吧"';
console.log(str);

console.log("\u1010");

//遍历
console.clear();
for (let i = 0; i < str.length; i++) {
  console.log(str.charAt(i));
}

for (let c of str) {
  console.log(c);
}

//裁切
console.clear();
var str = "This is a long String.....";

console.log(str.slice(0, 4));
console.log(str.slice(4));
console.log(str.slice(0, -1));
console.log(str.slice(-6, -1));
console.log(str.slice(4, 1));

//substring不能接收负数
console.log(str.substring(0, 4));
console.log(str.substring(4));
console.log(str.substring(0, -1));
console.log(str.substring(4, 1));

//拼接
console.clear();
var str1 = "hello";
var str2 = "world";

console.log(str1 + str2);
console.log(str1.concat(str2));

//大小写
console.log(str1.toUpperCase());
console.log("WORLD".toLocaleLowerCase());

//去除空格
var str = "   hello  world  ";
console.log(str.trim());

//模板字符串
console.clear();

var name = "张三";
var str = `你好, ${name}`; //反引号`拼接各种各样的字符串，省了写加号

console.log(str);

function greeting(strings, gender) {
  let gendderStr = "";
  if (gender === "M") {
    genderStr = "男";
  } else if (gender === "F") {
    genderStr = "女";
  }
  return `${strings[0]}${genderStr}`;
}
var gender = "M";
var result = greeting`你好,张三${gender}`;
console.log(result);
