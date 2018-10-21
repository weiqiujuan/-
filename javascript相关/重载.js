
//三个参数，绑定方法的对象，绑定方法所用的属性名称，要绑定的方法
function addMethod(Object, name, fn) {
    let old = Object[name];
    Object[name] = function () {
        if (fn.length === arguments.length) {
            return fn.apply(this, arguments);
        } else if (typeof old === 'function')
            return old.apply(this, arguments);
    }
}
let ninjas={
    values:["nihao","hi","hello"]
};
addMethod(ninjas,"find",function () {
    return this.values;
});

addMethod(ninjas,"find",function (name) {
    let ret=[];
    for(let i=0;i<this.values.length;i++){
        if(this.values[i].indexOf(name)===0){
            ret.push(this.values[i]);
        }
    }
    return ret;
});

addMethod(ninjas,'find',function (begin,last) {
    let ret2=[];
    for(let j=0;j<this.values.length;j++){
        if(this.values[j]===(begin+" "+last))
            ret2.push(this.values[j]);
    }
    return ret2;
});

let sum=ninjas.find().length;
console.log(sum);
let sum2=ninjas.find('weiqiujuan').length;
console.log(sum2);
let sum3=ninjas.find('weiqiujuan','dadada').length;
console.log(sum3);
let sum4=ninjas.find('weiqiujuan','hahah','heheh');
if(sum4===null){
    console.log(true);
}else{
    console.log(false);
}