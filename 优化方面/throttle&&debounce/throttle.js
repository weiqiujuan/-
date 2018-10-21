//函数节流：指定时间间隔内只能执行一次任务
//实现：通过一个闭包的形式，保存一个标记（CanRun=true）,在函数开头判断这个标记是否为true
//如果为true,则继续执行函数，否则return掉，判断完之后，立即将CanRun=false
//然后外部传入的函数的执行包在一个setTimeout中，setTimeout执行完毕后，再把标记设置为true

function throttle(fn, interval) {
    let canRun = true;
    return function () {
        if (!canRun) return;
        canRun = false
        setTimeout(() => {
            fn.apply(this, arguments)
            canRun = true
        }, interval)
    }
}