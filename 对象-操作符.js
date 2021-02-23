//Spread 操作符
var post = {
    id : 1,
    title: "标题1",
    content: "这是内容"
};
console.log(post);

var postClone = { ...post };
console.log(postClone);
console.log(post === postClone);

var post2 = {
    ...post,
    author: "张三"
};

console.log(post2);

var arr = [1, 2, 3];
var arrClone = [ ...arr];

console.log(arrClone);

var arr2 = [ ...arr, 4, 5, 6];
console.log(arr2);

function savePost(id, title, content){
    console.log("保存了文章:" , id, title, content);
}
savePost( ...[2, "标题", "内容内容"]);

//destructuring & rest
console.clear();
var post = {
    id:1,
    title: "标题一",
    content:"这是内容",
    comments:null
};

var{ id, title} = post;
console.log(id,title);

var{id,title:headline} = post;
console.log(id,headline);

var{id,title,comments = "没有评论"} =post;
console.log(comments);

var[a, b = 2] = [1];
console.log(a,b);

var post2 = {
    id: 2,
    title:"标题2",
    content:"这是内容",
    comments:[
        {
            userId:1,
            comment:"评论1"
        },
        {
            userId:2,
            comment:"评论2"
        },
        {
            userId:3,
            comment:"评论3"
        }
    ]
};

var {comments:[, {comment}]}= post2;
console.log(comment);

function getId(idKey, obj){
    let {[idKey]:id} = obj;
    return id;
}
console.log(getId("userId",{ userID:3}));

var {comments, ...rest} =post2;
console.log(rest);