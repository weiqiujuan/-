/**
 * Created by 魏秋娟 on 2018/3/11.
 */
function bucketSort(array, step) {
    let result = [];
    let bucket = [],
        bucketCount,
        j, k, temp;
    let len = array.length;
    let max = array[0];
    let min = array[0];
    for (let i = 1; i < len; i++) {
        if (array[i] > max) {
            max = array[i]
        }
        if (array[i] < min) {
            min = array[i];
        }
    }
    min = min - len;
    bucketCount = Math.ceil((max - min) / step);

    for (let i2 = 0; i2 < len; i2++) {
        temp = array[i2];
        for (let j = 0; j < bucketCount; j++) {
            if (temp > (min + step * j) && temp <= (min + step * (j + 1))) {
                if (!bucket[j]) {
                    bucket[j] = [];
                }
                //通过插入排序将数字插入到桶中的合适位置
                let len2 = bucket[j].length;
                if (len2 > 0) {
                    for (k = len2 - 1; k >= 0; k--) {
                        if (bucket[j][k] > temp) {
                            bucket[j][k + 1] = bucket[j][k];
                        } else {
                            break;
                        }
                    }
                    bucket[j][k + 1] = temp;
                } else {
                    bucket[j].push(temp);
                }
            }
        }
    }

    for(let i3=0;i3<bucketCount;i3++){
        if(bucket[i3]){
            k=bucket[i3].length;
            for(let j2=0;j2<k;j++){
                result.push(bucket[i3][j2]);
            }
        }
    }

    return console.log(result);
}
let newArray=[68,96,36,52,89,62,74];
bucketSort(newArray,5);