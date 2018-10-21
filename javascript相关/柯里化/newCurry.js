/**
 * Created by 魏秋娟 on 2018/3/8.
 */
let getN;
function add(n) {
    getN=function () {
        console.log(n);
    };
    return function (m) {
        n+=m;
        arguments.callee.toString=function () {
            return n;
        };
        return arguments.callee;
    }
}
add(1)(2)(3)(4);
getN();