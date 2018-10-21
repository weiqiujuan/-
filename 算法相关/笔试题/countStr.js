function countWord(str){
    let strRes=str.split(' ')
    let changeStr=strRes.map(item=>{
        return item.toLowerCase();
    })
    let len=strRes.length
    let arr=new Array(len).fill(1);
    let result=[];
    for(let i=0;i<len-1;i++){
        let index = result.indexOf(changeStr[i])
        if(index===-1){
            result.push(changeStr[i])
            arr[result.length-1]
        }else{
            arr[index]++;
            changeStr.splice(i,1);
        }
    }
    let resultLen=result.length;
    let obj=[];
    for(let j=0;j<resultLen;j++){
        obj.push([result[j],arr[j]])
    }
    return obj;

}
let str = 'Wei qiu juan is a girl Wei qiu juan Wei qiu juan is a girl Wei qiu juan';
console.log(countWord(str));