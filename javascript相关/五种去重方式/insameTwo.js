/**
 * Created by 魏秋娟 on 2018/3/31.
 */
//使用ES6中的set
function insameTwo(arr) {
    let newArr = new Set(arr);
    let result = Array.from(newArr);
    return result;
}
console.log(insameTwo([2,2,5,9,8,5,8,2,3,1,6]));
//使用拓展运算符（...）使用for...of循环
let array=[2,2,5,9,8,5,8,2,3,1,6];
let resultArr=[...new Set(array)];
console.log(resultArr);