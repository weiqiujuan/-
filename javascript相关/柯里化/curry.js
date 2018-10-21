/**
 * Created by 魏秋娟 on 2018/3/8.
 */
function curry(fn) {
    let args=Array.prototype.slice.call(arguments,1);
    return function () {
        let innerArgs=Array.prototype.slice.call(arguments);
        let finnalArgs=args.concat(innerArgs);
        return fn.apply(null,finnalArgs);
    }
}