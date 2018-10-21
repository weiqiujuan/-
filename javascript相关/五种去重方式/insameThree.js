//用indexOf(）判断下标
function insameThree(arr) {
    let resultArray=[];
    for(let i=0;i<arr.length;i++){
        if(resultArray.indexOf(arr[i])===-1){
            resultArray.push(arr[i]);
        }
    }
    return resultArray;
}
let arrThree=[2,2,5,9,8,5,8,2,3,1,6];
console.log(insameThree(arrThree));