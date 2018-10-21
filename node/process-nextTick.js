process.nextTick=function (callback) {
    if(process._exiting) return;
    if(tickDepth>=process.maxTickDepth) maxTickWarn();

    let tock={
        callback:callback
    };
    if(process.domain) tock.domain=process.domain;
    nextTickQuenue.push(tock);
    if(nextTickQuenue.length){
        process._needTickCallback();
    }
};