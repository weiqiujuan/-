/*Object.setPrototypeOf(object,prototype);
let o=Object.setPrototypeOf({},null);

function objSet(obj,proto) {
    obj.__proto__=proto;
    return obj;
}*/

let proto=[];
let obj={x:10};
Object.setPrototypeOf(obj, proto);

proto.y=20;
proto.z=30;
console.log(obj.prototype===proto.x);//true
proto.x=15;

console.log(obj.prototype===proto.x);//false
console.log(obj.prototype);//undefined

console.log(obj.x);//10而不是15，因为x不是它的原型对象属性
console.log(obj.y);//20
console.log(obj.z);//30


