let book={
    title:"javascript",
    autors:"tulin",
    edition:3,
    year:2018,
    releaseDate:new Date(2018,11,1)
};

let jsonText=JSON.stringify(book);
let bookCopy=JSON.parse(jsonText,function (key,value) {
    if(key==='releaseDate'){
        return new Date(value);
    }else {
        return value;
    }
});
console.log(bookCopy.releaseDate.getFullYear());