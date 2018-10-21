//在滚动条下拉状态下刷新页面
//页面实现更新渲染之后会立即触发滚动条事件，回到上一次页面的停留位置?
//但是并不是scrollTop为0的位置
window.onload=function () {
    let scrollTop=window.scrollY;
    let imgs=Array.from(document.querySelectorAll('img'))
    lazyLoad();
    
    //采用节流函数
    window.addEventListener('scroll',throttle(lazyLoad,500,1000));
    function throttle(fun,delay,time) { 
        let timeout,startTime=new Date();
        return function(){
            let context=this,args=arguments,curTime=new Date();
            clearTimeout(timeout);
            //如果达到了设定的触发事件间隔，触发handler
            if (curTime-startTime>=time) {
                fun();
                startTime=curTime;
            }else{
                timeout=setTimeout(fun, delay);
            }
        }
     }
     //实际想绑定在scroll事件上的handler需要问imgs，scroll
     function lazyLoad() {
         scrollTop=window.scrollY;
         imgs.forEach((item,index)=>{
             if (scrollTop===0&&item.dataset.src!==''&&item.offsetTop<window.innerHeight+screenTop) {
                 item.setAttribute('src',item.dataset.src)
                 item.setAttribute('data-src','')
             }else if(item.dataset.src!==''&&item.offsetTop<window.innerHeight+screenTop&&item.offsetTop>scrollTop){
                 item.setAttribute('src',item.dataset.src)
                 item.setAttribute('data-src','')
             }
         })
     }
}
function getTop(el) {
    let top=el.offsetTop;
    let parent=el.offsetParent;
    while (parent!==null) {
        top+=parent.offsetTop+parent.clientTop;
        parent=parent.offsetParent;
    }
    return top;
}
function inSight(el) {
    const clientHeight=document.documentElement.clientHeight;
    const scrollHeight=document.documentElement.scrollTop+clientHeight;
    return getTop(el,0)<scrollHeight;
}

function loadImg(el) {
    if(!el.src){
        el.src=el.dataset.src;
    }
}
function checkImgs() {
      const imgs=document.getElementsByTagName('img');
      Array.from(imgs).forEach(el=>{
          if(inSight(el)){
              loadImg(el);
          }
      })
}
window.addEventListener('scroll',checkImgs,false);
window.onload=checkImgs;
