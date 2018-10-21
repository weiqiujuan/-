axios.post('/user',{
    firstName:'wei',
    lastName:'qiujuan'
}).then(function (response) {
    console.log(response);
}).catch(function (error) {
    console.log(error);
});


