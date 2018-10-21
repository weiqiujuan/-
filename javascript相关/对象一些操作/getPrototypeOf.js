function Rectangle() {

}

let rec = new Rectangle();

console.log(Object.getPrototypeOf(rec) === Rectangle.prototype);
console.log(Object.getPrototypeOf(rec));//Rectangle {}

Object.setPrototypeOf(rec, Object.prototype);
console.log(Object.getPrototypeOf(rec) === Rectangle.prototype);//false
console.log(Object.getPrototypeOf(rec));//{}