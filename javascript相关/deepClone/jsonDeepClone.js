//_tmp和result是相互独立的，没有任何联系，有各自的存储空间。
let deepClone = function (obj) {
    let _tmp = JSON.stringify(obj);//将对象转换为json字符串形式

    let result = JSON.parse(_tmp);//将转换而来的字符串转换为原生js对象

    return result;
};

let obj1 = {
    weiqiujaun: {
        age: 20,
        sex: "women",
        class: 1502
    },
    liuxiaotian: {
        age: 21,
        sex: "women",
        class: 1501
    }
};

let test = deepClone(obj1);
console.log(test);