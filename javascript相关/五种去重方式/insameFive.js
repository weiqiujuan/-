/**
 * Created by 魏秋娟 on 2018/3/31.
 */
//利用对象的不重复属性去重
function insameFive(arr) {
    let res=[];
    let json={};
    for(let i=0;i<arr.length;i++){
        if(!json[arr[i]]){
            res.push(arr[i]);
            json[arr[i]]=1;
        }
    }
    return res;
}
let arr2 = [2, 2, 5, 9, 8, 5, 8, 2, 3, 1, 6];
console.log(insameFive(arr2));