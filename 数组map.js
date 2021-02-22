//数组 map
//和forEach类似，map会在每个元素操作后返回一个新的数组，也接收三个参数(当前元素，当前索引，数组本身);
var arr = [1, 2, 3, 4];
var mappedArr = arr.map(ele => ele *2);//ele当前元素、第一个参数
console.log(mappedArr);
console.log(arr);

//数组reduce
//接收四个参数(上一次计算的结果，当前遍历到的数组元素，当前遍历到的索引，数组的本身);
console.clear();
var arr = [1, 2, 3, 4];
var result = arr.reduce((previous,current) => previous +current, 0);
console.log(result);

var result2 = arr.reduce((first, second) => first + second);
console.log(result2);

//数组过滤
console.clear();
var arr = [1, 2, 3, 4, 5, 6];
var filteredArr = arr.filter(item => item >4);
console.log(filteredArr);

//数组测试
console.clear();
var arr = [1, 2, 3, 4, 5, 6];
var result = arr.every(item => item > 0);
console.log(result);

var resultSome = arr.some(item => item >5);
console.log(resultSome);

//destructuring 解构操作符
//把数组的元素赋值给变量
console.clear();
var arr = [1, 2, 3];
var [a, b, c] = arr;
console.log(a, b, c);

var [d,e] = arr;
console.log(d, e);

var [,f] = arr;
console.log(f);

//用途:当函数返回多个返回值时,可以返回一个数组，然后在调用的时候解构出来
function multipleReturns() {
    let name = "峰华";
    let position = "前端工程师";

    return [name,position];
}
var [myName, myPosition] = multipleReturns();
console.log(myName,myPosition);

//rest 操作符
var arr = [1, 2, 3, 4, 5, 6, 7, 8];
var [a,b, ...rest] = arr;
console.log(a, b, rest);

var [a, ,b, ...rest] = arr;
console.log(a, b, rest);

//这个操作符还可以用在函数当作参数，用来接收不固定个数的参数
function variousArgs( ...args){
    console.log(args);
}
variousArgs(1,2,3);

//多维数组
console.clear();
var arr = [];
for(let i = 0; i<5 ;i++){
    arr[i] = [];
    for(let j = 0; j<4; j++){
        arr[i][j] = i+j;
    }
}
console.log(arr);


