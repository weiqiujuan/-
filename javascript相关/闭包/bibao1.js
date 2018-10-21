/**
 * Created by 魏秋娟 on 2018/3/21.
 */
let outerNumber=10;
let later;
function outerFunction(){
    let innerNumber=20;
    function innerFunction() {
        console.log(outerNumber);
        console.log(innerNumber);
    }
    later=innerFunction;
}
outerFunction();//声明内部函数并将内部函数值赋值给later变量；
later();//10，20
