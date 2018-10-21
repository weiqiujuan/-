
function smallest(array){
    return Math.min.apply(Math,array);

}
function largest(array){
    return Math.max.apply(Math,array);
}

console.log(smallest([1,2,3,4,5,2]));
console.log(largest([2,5,8,6,1,3]));