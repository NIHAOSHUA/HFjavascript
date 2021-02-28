//rest(ES6新特性)
//获取除了已定义参数之外的所有参数 ...
//rest参数智能写在最后面，必须用...表示
function aaa(a, b, ...rest) {
  console.log("a=>" + a);
  console.log("b=>" + b);
  console.log(rest);
}
