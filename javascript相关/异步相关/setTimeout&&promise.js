console.log(1)

var promise=new Promise(function (params) {
    console.log(4)
},function () {
    console.log(5)
}).then(console.log(7))
setTimeout(() => {
    console.log(3)
}, 300);
console.log(2)