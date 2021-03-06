// 'use strict';
//var定义的变量实际是有作用域的，
//假设在函数中声明,则在函数体外不可以使用~（闭包可使用）
// 内部函数可以访问外部的成员，反之而不行
// function yq() {
//   var x = 1;
//   function yq2() {
//     var y = x + 1;
//   }
//   var z = y + 1;
// }

//假设内部函数和外部函数的变量重名!
//假设在javaScript中函数查找变量从自身函数开始~，由“内”向“外”查找，
//假设外部存在这个同名的函数变量，则函数内部会自动屏蔽外部函数的变量。
// function yq() {
//   var x = 1;
//   function yq2() {
//     var x = 'A';
//     console.log('inner' + x);
//   }
//   console.log('outer' + x)
//   yq2()
// }
// yq()

// function yq(){
//   var x = "x" + y;
//   console.log(x);
//   var y ='y';
// }
//结果：xundefined
//说明：js执行引擎，自动提升了y的声明，但是不会提升变量y的赋值。
//所有的变量定义都放在函数的头部，便于代码维护。

//全局变量
// var x = 1;
// function f() {
//   console.log(x);
// }
// f();
// console.log(x);

// 全局对象window
// var x = 'nihao'
// alert(x);
// alert(window.x);
// alert()这个函数本身也是一个window对象。
// JavaScript实际上只有一个作用域，任何变量(函数也可以视为变量),假设没有在函数
// 作用范围内找到，就会向外查找，如果在全局作用域没有找到就会报错

// 规范
// 由于我们所有的全局变量都会绑定到window上，如果不同的js文件,使用了相同的全局变量，
// 冲突->如果能减少冲突
//唯一全局变量
// var KuangAp = {};
// // 定义全局变量
// KuangAp.name = 'kuangshen';
// KuangAp.add = function (a, b) {
//   return a + b;
// }
// 把自己的代码全部放入自己定义的唯一空间名字中，降低全局命名冲突的问题。

// 局部作用域let
// fuction aa(){
//   for (var i = 0; i < 100; i++) {
//     console.log(i);
//   }
//   console.log(i + 1);//问题1：i除了作用域还嫩那个使用
// }
// ES6let关键字，解决局部作用域冲突的问题！
// fuction aa(){
//   for (let i = 0; i < 100; i++) {
//     console.log(i);
//   }
//   console.log(i + 1);//问题1：i除了作用域还嫩那个使用
// }

// 常量const
// 在ES6之前，定义常量：只有用全部大写字母命名的变量就是常量，建议不要修改这样的值
// var PI = '3.14';
// console.log(PI);
// PI = '2.34';
// console.log(PI);
// 在ES6引入常量关键字const
// const PI = '3.14';
// console.log(PI);
// PI = '123';
