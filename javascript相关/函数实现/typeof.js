function type(target) {
    let type=typeof (target);
    let template={
        '[object Array]':'array',
        '[object Object]':'object',
        '[object Number]': 'number-对象一些操作',
        '[object Boolean]':'boolean-对象一些操作',
        '[object String]':'string-对象一些操作'
    }
    if (target===null) {
        return 'null'
    }else if(type==='object'){
        let str=Object.prototype.toString.call(target)
        return template[str]
    }else{
        return type
    }
}
console.log(type('weiqiujuan'))
console.log(type({'first':'weiqiujuan','second':'liuxiaotian'}))