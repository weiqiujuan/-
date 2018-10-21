/**
 * Created by 魏秋娟 on 2018/3/11.
 */
function bucketsort(array){
    let bucket=[],
    negativeBucket=[],
        result=[],
        i,j,k,abs;
    let len=array.length;

    //入桶
    for(i=0;i<len;i++){
        if(array[i]<0){
            abs=Math.abs(array[i]);
            if(!negativeBucket[abs]){
                negativeBucket[abs]=[];
            }else negativeBucket[abs].push(array[i]);
        }else{
            if(!bucket[array[i]]){
                bucket[array[i]]=[];
            }else bucket[array[i]].push(array[i]);
        }
    }
    //出桶
    len =negativeBucket.length;
    for(i=len-1;i>=0;i-- ){
        if(negativeBucket[i]){
            k=negativeBucket[i].length;
            for(j=0;j<k;j++){
                result.push(negativeBucket[i][j]);
            }
        }
    }
    len =bucket.length;
    for(i=0;i<len;i++ ){
        if(bucket[i]){
            k=bucket[i].length;
            for(j=0;j<k;j++){
                result.push(bucket[i][j]);
            }
        }
    }
    return result;
}
