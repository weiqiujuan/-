let o=Object.create({
    "say":function () {
        alert(this.name);
    },
    "name":"weiqiujuan"
});
console.log(typeof o);