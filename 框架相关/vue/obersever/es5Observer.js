/**
 * Created by 魏秋娟 on 2018/3/22.
 */
// 创建对象
var targetObj = {
    age: 1
}
// 定义值改变时的处理函数
function observer(oldVal, newVal) {
    // 其他处理逻辑...
    console.info('name属性的值从 '+ oldVal +' 改变为 ' + newVal);
}

// 定义name属性及其set和get方法
Object.defineProperty(targetObj, 'name', {
    enumerable: true,
    configurable: true,
    get: function() {
        return name;
    },
    set: function(val) {
        //调用处理函数
        observer(name, val)
        this.name = val;
    }
});

targetObj.name = 'Martin';
targetObj.name = 'Lucas';
console.info('targetObj:', targetObj)