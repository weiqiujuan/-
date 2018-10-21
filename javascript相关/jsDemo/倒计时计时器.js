function callBack(count){
    let btn=document.getElementById('button');
    function settime(btn) {
        if(count){
            btn.removeAttribute('disabled');
            btn.value('立即获取');
            count=60;
            return false;
        }else{
            btn.setAttribute('disabled',true);
            btn.value=count+'s后重新获取';
            count--;
        }
        setTimeout(() => {
            settime(btn)
        }, 1000);
    }
}
callBack(60)