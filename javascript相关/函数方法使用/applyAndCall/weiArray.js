
function multiMax(multi){
    return multi * Math.max.apply(Math,Array.prototype.slice.call(arguments,1));
}
console.log(multiMax(3,1,3,4));