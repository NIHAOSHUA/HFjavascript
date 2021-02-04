//数组，有序的信息数据集合,同一数组放相同的数据类型
var arr1 = [1, 2, 3];
console.log(arr1);
var arr2 = new Array(4, 5, 6);//构造函数
console.log(arr2);
var arr3 = Array(7,8,9);
console.log(arr3);
var arr4 = Array.of(10, 11, 12);
console.log(arr4);

var arrSingle = Array(6);
console.log(arrSingle);
var arrSingle2 = new Array(7);
console.log(arrSingle2);
var arrSingle3 = Array.of(4);
console.log(arrSingle3);
var arrSingle4 = [9];
console.log(arrSingle4);

//访问数组
console.clear();
var arr = [1, 2, 3];
console.log(arr.length);
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);

//添加元素
console.clear();
var arr = [1, 2, 3];
arr[0] = 4;
console.log(arr);
arr[3] = 5;
console.log(arr);
arr[8] = 9;
console.log(arr);
console.log(arr[6]);

//删除元素
console.clear();
var arr = [1, 2, 3];
arr.length = 2;
console.log(arr);
arr.length = 0;
console.log(arr);

var arr = [1, 2, 3, 4, 5, 6];

arr.splice(2, 1);

console.log(arr);

arr.splice(1,2,3,7,8);
console.log(arr);

arr.splice(1,0,8,9);
console.log(arr);

//数组的遍历
console.clear();
var arr = [1, 3, 5, 7, 9];
for(let i = 0; i < arr.length;i++){
    console.log(arr[i]);
}

console.log("for....of");
for(let ele of arr){
    console.log(ele);
}

arr.forEach((ele, index, self)=>{
    console.log(ele, index, self);
});

//栈模式

