/**
 * Created by 魏秋娟 on 2018/3/22.
 */
class  TargetObj{
    constructor(age,name){
        this.name=name;
        this.age=age;
    }
    set name(val){
        observer(name,val);
        name=val;
    }
}
let targetObj=new TargetObj(1,'weiqiujuan');

//定义值改变时的处理函数
function observer(oldval,newval) {
    //其他处理逻辑
    console.info("name属性从" + oldval + '改变为' + newval);
}
targetObj.name='liuxiaotian';
console.log(targetObj);