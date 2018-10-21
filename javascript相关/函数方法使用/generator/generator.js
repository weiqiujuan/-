/**
 * Created by 魏秋娟 on 2018/3/8.
 */
function* next_id(n){
    for(let current_id=1;current_id<=n;current_id++){
        yield current_id;
    }
}

function test(){
    for (let x of next_id(5)){
        console.log(x);
    }
}
test();

