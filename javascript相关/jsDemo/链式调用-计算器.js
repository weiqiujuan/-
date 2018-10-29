//因为this总是返回调用当前函数的对象，因此当我们把函数
//封装再对象中时，在函数中return this时返回的是当前调用这个函数的对象
//返回的就是calc
let calc = {
    i: 0,
    init(n) {
        this.i = n;
        return this
    },
    add(n) {
        this.i += n;
        return this
    },
    minus(n) {
        this.i -= n;
        return this
    },
    multiply(n) {
        this.i *= n;
        return this
    },
    result() {
        return this.i
    }
}

let result = calc.init(3).add(6).multiply(13).minus(11).result()
console.log(result)
