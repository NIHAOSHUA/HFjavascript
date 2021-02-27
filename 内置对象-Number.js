//Number对象把字符串转化为数字对数字的精度进行操作
//转为数字
var strNum = "15";
var num = Number.parseInt(strNum);
console.log(strNum);
console.log(num);
console.log(typeof num);

//转为浮点数
var strNum = "12.34";
var num = parseFloat(strNum);
console.log(typeof num);

//转为数字
var strNum = "abc";
var num = parseInt(strNum);
console.log(num);
console.log(isNaN(num));

//保留小数
var num = 12.33645;
var numStr = num.toFixed(2);
console.log(numStr);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.POSITIVE_INFINITY);

//Math
console.clear();
console.log(Math.PI);
console.log(Math.abs(-5));
console.log(Math.sin(Math.PI / 2));
console.log(Math.floor(3.98));
console.log(Math.ceil(3.1));
console.log(Math.pow(10, 3));
console.log(Math.trunc(2.45));
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());

//date
console.clear();
var date = new Date();
console.log(date);
console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getDay());
console.log(date.getDate());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());
console.log(date.getTime());
console.log(date.toLocaleDateString());

date.setFullYear(2022);
console.log(date.toLocaleDateString());
date.setTime(1714434255957);
console.log(date.toLocaleDateString());

//JSON
//对象，数组，数字
console.clear();
//把JSON转换成javascript对象
var postJSON = `{
    "id":1,
    "title":"标题",
    "comments":[
        {
            "userId":1,
            "comment":"评论1"
        },{
            "userId":1,
            "comment":"评论1"
        }
    ],
    "published":true,
    "author":null
}`;
console.log(JSON.parse(postJSON));

//把对象转换成JSON字符串
var person = {
  id: 1,
  name: "张三",
  skills: ["Vue", "Java"],
};
console.log(person);
console.log(JSON.stringify(person, null, 2));
var comments = `[
    {
        "userId":1,
        "comment":"评论1"
    },{
        "userId":1,
        "comment":"评论1"
    }
]`;
console.log(JSON.parse(comments));

//Set
console.clear();

var set = new Set();
set.add(1);
set.add(3);
set.add(5);
console.log(set);

set.add(3);
console.log(set);

console.log(set.has(4));

set.forEach((value) => {
  console.log(value);
});
set.delete(3);
console.log(set);
set.clear();
console.log(set);

var obj1 = { id: 1 };
var obj2 = { id: 1 };
set.add(obj1);
set.add(obj2);
console.log(set);

set.add(obj1);
console.log(set);

//map
console.clear();

var map = new Map();
var objKey = { key: 2 };
map.set(1, "值1");
map.set(objKey, "值2");
map.set("key 3", "值3");

console.log(map);
console.log(map.get(1));
console.log(map.get(objKey));
console.log(map.get("key 3"));

console.log(map.has("key 3"));

map.forEach((value, key) => {
  console.log(key, value);
});

var iterator = map.entries();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

for (let [key, value] of map) {
  console.log(key, value);
}

map.delete(1);
console.log(map);
