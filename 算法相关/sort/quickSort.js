function quickSort(arr){
    let len=arr.length;
    let index=Math.floor(len/2);
    let value=arr[index];
    let left=[];
    let right=[];
    if(len<=1){
        return arr;
    }
    for(let i=1;i<len;i++){
        if(value>arr[i]){
            left.push(arr[i]);
        }else {
            right.push(arr[i]);
        }
    }
    return quickSort(left).concat([value],quickSort(right));
}

let arr=[96,54,65,87,25,12,89];
console.log(quickSort(arr));