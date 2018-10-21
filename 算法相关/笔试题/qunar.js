
function shuiEnd(m) {
    let endTotal;
    let shuilv = [0.03, 0.1, 0.2, 0.25, 0.30, 0.35, 0.45];
    let kouCount = [0, 105, 555, 1005, 2755, 5505, 13505];
    let shouldTotal = m - m * 0.2 - 3500;
    let i = 0;
    if (shouldTotal <= 1500) {
        i = 0;
    } else if (shouldTotal > 1500 && shouldTotal <= 4500) {
        i = 1;
    } else if (shouldTotal > 4500 && shouldTotal <= 9000) {
        i = 2;
    } else if (shouldTotal > 9000 && shouldTotal <= 35000) {
        i = 3;
    }
    else if (shouldTotal > 35000 && shouldTotal <= 55000) {
        i = 4;
    } else if (shouldTotal > 55000 && shouldTotal <= 80000) {
        i = 5;
    } else {
        i = 6;
    }
    let eDu = Math.round(shouldTotal * shuilv[i] - kouCount[i]);
    endTotal = m - m * 0.2 - eDu;
    return endTotal;
}

console.log(shuiEnd(16000));