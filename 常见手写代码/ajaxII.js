function ajax(){
    let xhr=new XMLHttpRequest();
    let url='www.com';
    if(method==='get'){
        if(data){
            url+='?';
            url+data;
        }else{

        }
        xhr.open(method,url);
        ajax.send();
    }else{
        xhr.open(method,url);
        xhr.setRequestHeader('Content-type', 'application/application/x-www-form-urlencoded');
        if(data){
            xhr.send(data);
        }else{
            xhr.send()
        }
    }
    xhr.onreadystatechange=function () {
        if(ajax.readyState===4&&xhr.status===200){
            success(xhr.responseText);
        }else{
            error(msg);
        }
    }
}
