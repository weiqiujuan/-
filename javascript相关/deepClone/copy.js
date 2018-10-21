
let target=[];
let testArr=[2,3,5,8];
Object.assign(target,testArr);
console.log(target);
testArr.push(8);
console.log("我是原来的"+target+",我是现在的"+testArr);