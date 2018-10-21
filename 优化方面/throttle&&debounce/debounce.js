//任务频繁触发的情况下，只有任务触发的间隔超过指定间隔的时候，任务才会执行
//实现：通过闭包保存一个标记来保存setTimeout的返回值，
// 如果用户输入的时候把前一个setTimeout给clear掉，然后又创建一个新的setTimout,这样保证输入字符后的interval间隔内如果还有字符输入的话，就不会执行fn函数
function debounce(fn, interval) {
    let timeout = null;
    return function () {
        clearTimeout(timeout)
        timeout = setTimeout(() => {
            fn.apply(this, arguments)
        }, interval)
    }
}