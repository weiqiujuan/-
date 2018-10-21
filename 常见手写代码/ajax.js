
function ajax(jsonObj){
    var xhr=new XMLHttpRequest();
    function params(data){
        var arr=[];
        for(var i in data){
            arr.push(i+"="+data[i]);
        }
        return arr.join("&")
    }
    if(jsonObj.method.toLowerCase()==='get'){
        jsonObj.data=params(jsonObj.data);
        jsonObj.url+=jsonObj.url.indexof("?")===-1?"?"+jsonObj.data:"&"+jsonObj.data;
    }
    if(jsonObj.method.toLowerCase()==='post'){
        var formData=new FormData();
        for(var i in jsonObj.data){
            formData.append(i,jsonObj.data[i]);
        }
        jsonObj.data=formData;
    }
    if(jsonObj.async===true){
        xhr.onreadystatechange=function (params) {
            if(xhr.readyState===4){
                if(xhr.status===200){
                    jsonObj.success(JSON.parse(xhr.responseText));
                }else{
                    jsonObj.error(xhr.statusText);
                }
            }
        }
    }else{

    }
    xhr.open(jsonObj.method.jsonObj.url,jsonObj.async);
    if(jsonObj.method.toLowerCase()==='post'){
        xhr.send(jsonO)
    }else if(jsonObj.methof.toLowerCase()==='get'){
        xhr.send();
    }
}
