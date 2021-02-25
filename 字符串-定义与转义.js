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
