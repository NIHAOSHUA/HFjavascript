//setTimeout
// console.log("第一行代码");
// var time1 = setTimeout(() => {
//   console.log("1秒后执行");
// }, 1000);
// console.log("第二行代码");

// setTimeout(() => {
//   clearTimeout(time1);
//   console.log("中断了 time1 的执行");
// }, 500);

//setinerval
// var interval = setInterval(() => {
//   let date = new Date();
//   console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
// }, 1000);

// setTimeout(() => {
//   clearInterval(interval);
// }, 5000);

//promise
//创建自定义的异步操作，把耗时的工作交给promise，其他的同步代码可以继续往下执行
// var promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("执行失败");
//   }, 2000);
// });

// //promise.then((value) => console.log(value));
// promise.catch((error) => console.log(error));
// console.log("在Promise之前执行");

//链式调用
// new Promise((resolve, reject) => {
//   setTimeout(() => {
//     //reject("Promise失败");
//     resolve(1);
//   }, 1000);
// })
//   .then((value) => {
//     console.log(value);
//     throw "then1异常";
//     return value + 10;
//   })
//   .then((value) => {
//     console.log(value);
//     return new Promise((resolve) => resolve(value + 20));
//   })
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

//多个promise同时执行
// var p1 = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve(1);
//   }, 1000);
// });
// var p2 = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve(2);
//   }, 2000);
// });
// var p3 = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve(3);
//   }, 500);
// });

// Promise.all([p1, p2, p3]).then((values) => console.log(values));

//async await
//好处：用同步的代码样式执行异步的代码
async function async1() {
  let resulte2 = await async2();
  try {
    let resulte3 = await async3();
  } catch (e) {
    console.log(e);
  }
  console.log(resulte2);
}

async function async2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(10);
    }, 1000);
  });
}

async function async3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("执行出错");
    }, 500);
  });
}

async1();
