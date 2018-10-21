
//为给定的ID的user创建请求
axios.get('/user?ID=123456').then(function (response) {
    console.log(response);
}).catch(function (error) {
    console.log(error);
});

//上面的改变
axios.get('/user',{
    params:{
        ID:12345
    }
}).then(function (response) {
    console.log(response);
}).catch(function (err) {
    console.log(err);
});


//执行多个并发请求
function getUserAccount() {
    return axios.get('/user/12345');
}

function getUserPermissions() {
    return axios.get('/user/12345/permission')
}

axios.all([getUserAccount(),getUserPermissions()])
    .then(axios.spread(function (acct,perms) {
        //当这个两个请求都完成的时候会触发这个函数
    }));


