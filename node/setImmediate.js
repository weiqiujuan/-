process.nextTick(function () {
    console.log("process延迟执行");
});

setImmediate(function () {
    console.log("setImmediate延迟执行");
});

setInterval(function () {
    console.log("setInterval执行");
});
setTimeout(function () {
    console.log("setTimeout执行");
});
console.log("普通执行");