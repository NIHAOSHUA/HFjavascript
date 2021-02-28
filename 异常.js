//console.log(a);
try {
  //   var emp = undefined;
  //   console.log(emp.name);
} catch (err) {
  console.error("错误已处理");
} finally {
  console.log("总会执行");
}
console.log("你好");

//throw
console.clear();

function fetchDate() {
  console.log("获取数据....");
  throw "404";
}

try {
  fetchDate();
} catch (e) {
  if (e === "404") {
    console.log("未查询到数据");
  }
}

//Erro对象
console.clear();

class ApiError extends Error {
  constructor(url, ...params) {
    super(...params);
    this.url = url;
    this.name = "ApiError";
  }
}
function fetchDate() {
  console.log("获取数据....");
  //console.log(a);
  throw new ApiError("/post", "404");
}

try {
  fetchDate();
} catch (e) {
  //   console.error(e);
  //   console.error(e.name);
  //   console.error(e.message);
  //   console.error(e.url);
  if (e instanceof ReferenceError) {
    console.log("程序异常...");
  } else if (e instanceof ApiError) {
    console.log("API异常");
  }
}
