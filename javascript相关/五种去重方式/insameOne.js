
/**
 * Created by 魏秋娟 on 2018/3/31.
 */
//第一种
function inSameOne(arr){
    let newArr=arr.sort(function(a,b){
        return a-b;
    });
    let result=[newArr[0]];
    for(let i=1;i<newArr.length;i++){
        if(newArr[i]!==result[result.length-1]){
            result.push(newArr[i])
        }
    }
    return result;
}

console.log(inSameOne([2,2,5,9,8,5,8,2,3,1,6]));