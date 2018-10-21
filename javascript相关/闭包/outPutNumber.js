//第一种
function timeMange() {
    for(let i=1;i<=5;i++){
        (function (num) {
            setTimeout(function () {
                console.log(num);
            },1000);
        })(i);
    }
}
timeMange();
//第二种
function timeMange2() {
    for(let j=1;j<=5;j++){
        setTimeout((function (e) {
            return function () {
                console.log(e);
            }
        })(j),1000)
    }
}
timeMange2();