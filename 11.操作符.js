var x = 10;
var y = x;

console.log(x, y);

// console.clear();
var negativaNum = -5;
console.log(negativaNum);

var strNum = +"3";
console.log(strNum, typeof strNum);

var num = 8;
console.log(num++);

console.clear();
console.log("7/2=", 7 % 2);

//比较操作符
console.clear();
console.log(1 > 5);
console.log(1 >= 5);
console.log(5 >= 5);
console.log(5 == 5);
console.log(5 == "5");
console.log(5 === "5");
console.log(undefined == null);
console.log(undefined === null);

//逻辑操作符
console.clear();
console.log(true && true);
console.log(true && false);
console.log(true || false);
console.log(true && "hello"); //前端开发中如果是true则显示hello
console.log(false || "default");
var a = null;
b = a || 5;
console.log(b);

console.log(false && "hello");
console.log(true || "hello");

//位运算符
console.clear();
//5 101
//3 011
console.log(5 & 3);
console.log(5 | 3);
console.log(5 ^ 3); //异或
console.log(~5); //取反
console.log(5 << 1); //左移一位
console.log(5 >> 1); //右移一位

//三目运算符
console.clear();
var temperature = 10;
console.log(temperature > 15 ? "出门" : "在家");
