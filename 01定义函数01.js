// function abs(x) {
//   if (x >= 0) {
//     return x;
//   } else {
//     return -x;
//   }
// }
//arguments包含所有的参数，
//问题：想使用多余参数来附加操作，需要排除已有参数。
var abs = function (x) {
  console.log("x=>" + x);
  for (var i = 0; i < arguments.length; i++) {
    console.log(arguments[i]);
  }

  if (x >= 0) {
    return x;
  } else {
    return -x;
  }
};
