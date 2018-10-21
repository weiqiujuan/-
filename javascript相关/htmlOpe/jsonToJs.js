/**
 * Created by 魏秋娟 on 2018/3/31.
 */
let obj = {
    name: "weiqiujuan",
    sex: "girl",
    age: 20,
    grade: 1502,
    friends:[123,456,789]
}
let result=JSON.stringify(obj,["name","friends"],4);
console.log(result)