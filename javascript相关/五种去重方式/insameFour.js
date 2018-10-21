/**
 * Created by 魏秋娟 on 2018/3/31.
 */
//利用标记进行去重；
function insameFour(arr) {
    let result = [arr[0]];
    for (let i = 1; i < arr.length; i++) {
        let flag = false;
        for (let j = 0; j < result.length; j++) {
            if (arr[i] === result[j]) {
                flag = true;
                break
            }
        }
        if (!flag) {
            result.push(arr[i]);
        }
    }
    return result;
}
let arr2 = [2, 2, 5, 9, 8, 5, 8, 2, 3, 1, 6];
console.log(insameFour(arr2));