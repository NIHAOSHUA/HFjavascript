//声明函数
function put() {
  console.log("打冰箱");
  console.log("放进去");
  console.log("关上冰箱门");
}
function putAnythingInRefrigerator(something) {
  console.log("打开冰箱");
  console.log("把" + something + "放进去");
  console.log("关上冰箱门");
}
function add(a, b) {
  return a + b;
}

function testNum(num) {
  if (num < 0) return;
  return num > 10;
}

//调用函数
put();
putAnythingInRefrigerator("小鸟");
console.log(add(1, 2));

var result = add(1, 2);
console.log(result);

console.log(add(result, 5));

console.log(testNum(-5));
console.log(testNum(15));

//函数表达式
console.log(add);

var plus = add;
var res = plus(5, 6);
console.log(res);

//匿名函数，调试的时候不容易发现是哪个代码
var multiply = function (a, b) {
  return a * b;
};
console.log(multiply(6, 2));

//函数和变量的提升
console.clear();

x = 5;
console.log(x);
var x;

console.log(divide(8, 2));
function divide(a, b) {
  return a / b;
}

//默认参数
function greetings(name = "yangqiao") {
  console.log("你好，" + name);
}
greetings();
greetings("张三");

function greetingWithWeather(name = "yangqiao", weather) {
  console.log("你好，" + name + ".今天是" + weather);
}
greetingWithWeather(undefined, "晴天");

//递归
console.clear();

function sum(n) {
  if (n === 1) {
    return 1;
  }
  return n + sum(n - 1);
}

console.log(sum(10));

// 1 1 2 3 5 8 13...
function fib(num) {
  if (num <= 1) {
    return 1;
  }
  return fib(num - 1) + fib(num - 2);
}

console.log(fib(5));

//arguments
console.clear();
function log() {
  for (let i = 0; i < arguments.length; i++) {
    console.log(arguments[i]);
  }
}
log("abc", "bcd");

//作用域
console.clear();

var x = 5;
function add(a) {
  var y = 10;
  console.log("y=" + y);
  return a + x;
}
console.log(add(8));
x = 20;
console.log(add(8));

var num = 100;

function multiply1(num) {
  return num * 10;
}

console.log(multiply1(4));

//var/let
console.clear();

var z = 6;
if (z > 2) {
  console.log(z);
  var innerZ = 17;
}
console.log(innerZ);

for (var i = 0; i < 10; i++) {
  console.log(i);
  var innerI = 33;
}
console.log(i);
console.log(innerI);

//箭头函数 ，简化函数的示例,匿名函数
console.clear();

var greeting = () => {
  console.log("hello");
};
greeting();

var greeting = (name) => {
  console.log("hello" + name);
};
greeting("yangqiao");

var greeting = (name, weather) => {
  console.log("hello" + name + "今天是" + weather);
};
greeting("yangqiao", "晴天");

var increment = (x) => x + 1;
console.log(increment(6));

//闭包 , 函数里再定义函数，内部函数可以访问外部函数的变量，形成私有的private函数
console.clear();
function squareSum(a, b) {
  function square(x) {
    return x * x;
  }
  return square(a) + square(b);
}
console.log(squareSum(2, 3));
//内部函数也可以作为返回值返回出去，整个外部函数就成为高阶函数(higher-order function)
function person() {
  let name = "yangqiao";
  //只能访问它的值，不能修改它的值，起到保护作用
  function getName() {
    //retuen 外部的name;
    return name;
  }
  return getName;
}
var getName = person();
console.log(person());
console.log(getName());

//柯里化 把一个接收多个参数的函数，变成一系列接收一个参数的内部函数，这样他们的值能够保留
console.clear();

function addThreeNums(a, b, c) {
  return a + b + c;
}
console.log(addThreeNums(1, 2, 3));

function addThreeNumsCurry(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}
console.log(addThreeNumsCurry(1)(2)(3));
//好处：前两个固定
var fixedTwo = addThreeNumsCurry(1)(2);
console.log(fixedTwo(3));
console.log(fixedTwo(4));
console.log(fixedTwo(5));

//自执行函数 函数定义完后 直接调用它自己，优势代码防止外部访问，防止被篡改。内部形成作用域，防止和外部变量命名冲突。
console.clear();

var num1 = 10;
(function () {
  var num1 = 20;
  console.log(num1);
})();
console.log(num1);

//回调函数 一段代码执行完后要调用的函数，一般作为另一个函数的参数传进去，在另一个函数里面调用它
console.clear();

function request(cb) {
  console.log("请求数据");
  cb("success");
  console.log("请求结束");
}
// function callback(result){
//     console.log("执行回调");
//     console.log("执行结果是:" + result);
// }
// request(callback);

//使用箭头函数
request((result) => {
  console.log("执行回调");
  console.log("执行结果是:" + result);
});
